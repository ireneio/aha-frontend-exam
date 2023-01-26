import { styled, useMediaQuery } from '@mui/material';
import AppDivider from '../modules/common/components/AppDivider';
import AppTitle from '../modules/common/components/AppTitle';
import SearchCard from '../modules/search/components/SearchCard';
import Layout from '../modules/layout';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '../utils/swr';
import { useAppDispatch, useAppSelector } from '../store';
import theme from '../styles/theme';
import BackButton from '../modules/common/containers/AppHeader/components/BackButton';
import { useRouter } from 'next/router';
import { RouteMap } from '../modules/common/types';
import { twMerge } from 'tailwind-merge';
import SearchCardLoading from '../modules/search/components/SearchCardLoading';
import FollowerList from '../modules/follow/containers/FollowerList';
import { UserApiDto } from '@/modules/common/types/api';

const Wrapper = styled('div')({
  marginRight: 0,
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 20,
  [theme.breakpoints.up('sm')]: {
    marginTop: 92,
    paddingLeft: 210,
    paddingRight: 130,
  },
  [theme.breakpoints.only('xl')]: {
    paddingRight: 505,
  },
});

const Result = () => {
  const { page, pageSize, totalPages } = useAppSelector((state) => state.user.pagination);
  const userData = useAppSelector((state) => state.user.data);
  const { keyword } = useAppSelector((state) => state.user.params);
  const dispatchStore = useAppDispatch();
  const isClientAboveMobile = useMediaQuery(theme.breakpoints.up('sm'));
  const is1440 = useMediaQuery(theme.breakpoints.only('xl'));
  const router = useRouter();
  const { ref: lastAnchor, inView } = useInView();

  useEffect(() => {
    if (router.query) {
      const { keyword: _keyword, pageSize: _pageSize, page: _page } = router.query;
      if (_keyword) {
        dispatchStore({ type: 'SET_KEYWORD', payload: _keyword?.toString() ?? '' });
      }
      if (_pageSize) {
        dispatchStore({
          type: 'SET_PAGE_SIZE',
          payload: Number.isNaN(Number(_pageSize)) ? 30 : Number(_pageSize),
        });
      }
      if (_page) {
        dispatchStore({
          type: 'SET_PAGINATION',
          payload: { page: Number.isNaN(Number(_page)) ? 1 : Number(_page) },
        });
      }
    }
  }, [router.query]);

  const { data, isValidating } = useSWR<UserApiDto>(
    `/users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    fetcher.bind(null, {
      method: 'get',
      url: '/users/all',
      query: {
        page,
        pageSize,
        keyword,
      },
    }),
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    if (inView && !isValidating && page < totalPages) {
      dispatchStore({
        type: 'SET_PAGINATION',
        payload: {
          page: page + 1,
        },
      });
    }
  }, [inView]);

  useEffect(() => {
    if (data) {
      if (data.page === 1) {
        dispatchStore({
          type: 'CLEAR_DATA',
        });
      }
      if (data?.data) {
        dispatchStore({
          type: 'SET_DATA',
          payload: {
            data: data?.data,
            pagination: {
              page: data.page,
              pageSize: data.pageSize,
              total: data.total,
              totalPages: data.totalPages,
            },
          },
        });
      }
    }
  }, [data]);

  const handleOnBackButtonClick = () => {
    router.push(RouteMap.Home);
    dispatchStore({
      type: 'SET_DATA',
      payload: {
        data: [],
        pagination: { page: 1, pageSize, total: 0, totalPages: 0 },
      },
    });
  };

  return (
    <Layout data-cid="Result" showNav={false}>
      <Wrapper>
        <div className="mt-[20px] xl:mt-0 xl:ml-[7.5px]">
          <AppTitle>
            {isClientAboveMobile && (
              <div className="absolute left-[-62.5px]">
                <BackButton onClick={handleOnBackButtonClick} />
              </div>
            )}
            <div>results</div>
          </AppTitle>
        </div>
        <AppDivider top={24} />
        <div
          className={twMerge('text-[#FFF]', !userData.length && !isValidating ? 'block' : 'hidden')}
        >
          No Results Found.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[34px] gap-y-[31px]">
          {userData.map(({ id, name, username }) => {
            return (
              <div key={id + username}>
                <SearchCard
                  // avatar does not show
                  src="/images/dog.png"
                  alt={`${name}'s Avatar`}
                  title={name}
                  subtitle={username}
                />
              </div>
            );
          })}
          {[!isClientAboveMobile ? 1 : 1, 2, 3, 4, 5, 6].map((skeleton) => {
            return (
              <div key={skeleton} className={twMerge(isValidating ? 'block' : 'hidden')}>
                <SearchCardLoading />
              </div>
            );
          })}
        </div>
        <div ref={lastAnchor} className="invisible" />
      </Wrapper>
      {is1440 ? <FollowerList /> : null}
    </Layout>
  );
};

export default Result;
