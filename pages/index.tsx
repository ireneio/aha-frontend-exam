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
  height: 'calc(100vh - 70px)',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 210,
    paddingRight: 130,
    height: 'calc(100vh - 54px)',
    paddingTop: 54,
  },
  [theme.breakpoints.up('xl')]: {
    paddingRight: 505,
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
  marginLeft: -3,
  [theme.breakpoints.up('lg')]: {
    marginLeft: 0,
    paddingRight: 0,
  },
}));

const Toolbar = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 93,
  left: 0,
  width: '100%',
  height: 'auto',
  paddingLeft: '20px',
  paddingRight: '20px',
  [theme.breakpoints.up('sm')]: {
    bottom: 38.5,
    left: 210,
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
  const is1440 = useMediaQuery(theme.breakpoints.only('xl'));

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
      <Wrapper>
        <AppTitle>
          <div className="text-[24px]">search</div>
        </AppTitle>
        {!isClientAboveMobile && <AppDivider top={17} />}
        {isClientAboveMobile && <AppDivider top={20} />}
        <AppInput placeholder="Keyword" onChange={handleInputChange} />
        {isClientAboveMobile && <AppDivider enableLine top={38} bottom={30} />}
        {!isClientAboveMobile && <AppDivider top={30} />}
        <AppTitle>
          <div className="text-[24px]"># of results per page</div>
        </AppTitle>
        <AppDivider top={8} />
        <CounterWrapper>
          <CounterDisplay>{pageSize}</CounterDisplay>
          <CounterUnit>results</CounterUnit>
        </CounterWrapper>
        <AppDivider top={15} />
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
      {is1440 ? <FollowerList /> : null}
    </Layout>
  );
};

export default Home;
