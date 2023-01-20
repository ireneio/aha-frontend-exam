import { styled, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import AppButton from '../modules/common/components/AppButton';
import AppDivider from '../modules/common/components/AppDivider';
import AppInput from '../modules/common/components/AppInput';
import AppTitle from '../modules/common/components/AppTitle';
import { RouteMap } from '../modules/common/types';
import Layout from '../modules/layout';
import { useAppDispatch, useAppSelector } from '../store';
import FollowerList from '../modules/follow/containers/FollowerList';
import SearchSlider from '../modules/search/components/SearchSlider';

const Wrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingLeft: '20px',
  paddingRight: '20px',
  height: 'calc(100vh - 87px)',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: '87px',
  },
  [theme.breakpoints.only('xl')]: {
    marginRight: 130 + 375,
  },
}));

const CounterWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
});

const CounterDisplay = styled('div')({
  fontWeight: 'bold',
  fontSize: '48px',
});

const CounterUnit = styled('div')({
  fontWeight: 'normal',
  fontSize: '16px',
  marginLeft: '10px',
  marginTop: '15px',
});

const SliderWrapper = styled('div')(({ theme }) => ({
  paddingRight: 12,
  [theme.breakpoints.up('lg')]: {
    paddingRight: 0,
  },
}));

const Toolbar = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: 'auto',
  paddingBottom: '66px',
  paddingLeft: '20px',
  paddingRight: '20px',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    width: 'inherit',
  },
}));

const Home = () => {
  const pageSize = useAppSelector((state) => state.user.pagination.pageSize);
  const dispatchStore = useAppDispatch();
  const router = useRouter();
  const theme = useTheme();
  const isClientAboveMobile = useMediaQuery(theme.breakpoints.up('sm'));

  const { getValues, setValue } = useForm({
    mode: 'onChange',
    defaultValues: {
      keyword: '',
    },
  });

  const handleSearch = async () => {
    const keyword = getValues('keyword');
    dispatchStore({ type: 'SET_KEYWORD', payload: keyword });
    router.push({ pathname: RouteMap.Result, query: { keyword: keyword, pageSize, page: 1 } });
  };

  const handlePageSizeUpdate = (value: number) => {
    dispatchStore({ type: 'SET_PAGE_SIZE', payload: value });
  };

  const handleInputChange = (e: any) => {
    setValue('keyword', e.target.value, { shouldValidate: false });
  };

  return (
    <Layout>
      <div data-cid="Home">
        <Wrapper>
          <AppTitle>search</AppTitle>
          {!isClientAboveMobile && <AppDivider top={16} />}
          {isClientAboveMobile && <AppDivider top={20} />}
          <AppInput placeholder="Keyword" onChange={handleInputChange} />
          {isClientAboveMobile && <AppDivider enableLine top={30} bottom={30} />}
          {!isClientAboveMobile && <AppDivider top={28} />}
          <AppTitle># of results per page</AppTitle>
          <AppDivider top={16} />
          <CounterWrapper>
            <CounterDisplay>{pageSize}</CounterDisplay>
            <CounterUnit>results</CounterUnit>
          </CounterWrapper>
          <SliderWrapper>
            <SearchSlider value={pageSize} onChange={handlePageSizeUpdate} />
          </SliderWrapper>
          {!isClientAboveMobile && (
            <Toolbar>
              <AppDivider enableLine bottom={80} />
              <AppButton onClick={() => handleSearch()}>search</AppButton>
            </Toolbar>
          )}
          {isClientAboveMobile && (
            <Toolbar>
              <div className="w-[343px]">
                <AppButton onClick={() => handleSearch()}>search</AppButton>
              </div>
            </Toolbar>
          )}
        </Wrapper>
        <FollowerList />
      </div>
    </Layout>
  );
};

export default Home;
