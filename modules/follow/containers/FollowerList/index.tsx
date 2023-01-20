import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useSWR from 'swr';
import { User } from '../../../../store/reducers/user';
import { fetcher } from '../../../../utils/swr';
import AvatarCard from '../../../common/components/AvatarCard';
import TabGroup from '../../components/TabGroup';
import Loading from '../../components/Loading';

enum TabsEnum {
  Followers,
  Following,
}

const Wrapper = styled('div')(({ theme }) => {
  return {
    display: 'none',
    overflow: 'auto',
    paddingLeft: '16px',
    paddingRight: '16px',
    [theme.breakpoints.only('xl')]: {
      display: 'block',
      position: 'fixed',
      top: 0,
      right: 0,
      width: '375px',
      height: '100%',
    },
  };
});

const FollowerList = () => {
  const [tab, setTab] = useState<TabsEnum>(TabsEnum.Followers);
  const [followingPage, setFollowingPage] = useState(1);
  const [followersPage, setFollowersPage] = useState(1);
  const [followingData, setFollowingData] = useState<User[]>([]);
  const [followersData, setFollowersData] = useState<User[]>([]);

  const { data: following, isValidating: followingLoading } = useSWR(
    `/users/friends?page=${followingPage}&pageSize=30`,
    fetcher,
    { revalidateOnFocus: false }
  );
  const { data: followers, isValidating: followersLoading } = useSWR(
    `/users/all?page=${followersPage}&pageSize=30`,
    fetcher,
    { revalidateOnFocus: false }
  );

  const { inView, ref } = useInView();

  useEffect(() => {
    if (following?.data) {
      setFollowingData((prev) => [...prev, ...following.data]);
    }
  }, [following]);

  useEffect(() => {
    if (followers?.data) {
      setFollowersData((prev) => [...prev, ...followers.data]);
    }
  }, [followers]);

  useEffect(() => {
    if (
      tab === TabsEnum.Followers &&
      followers?.page < followers?.totalPages &&
      !followersLoading &&
      followers?.data !== undefined
    ) {
      setFollowersPage((prev) => prev + 1);
    } else if (
      tab === TabsEnum.Following &&
      following?.page < following?.totalPages &&
      !followingLoading &&
      following?.data !== undefined
    ) {
      setFollowingPage((prev) => prev + 1);
    }
  }, [inView]);

  const tabs = [
    { label: 'Followers', data: followersData, value: TabsEnum.Followers },
    { label: 'Following', data: followingData, value: TabsEnum.Following },
  ];

  return (
    <Wrapper data-cid="FollowerList">
      <TabGroup onChange={(value: TabsEnum) => setTab(value)} value={tab} tabs={tabs} enableDivider>
        {tabs.map((item, index) => {
          return (
            <div className="overflow-auto h-full" key={item.value}>
              {item.data.map(({ username, isFollowing, name, avater }: User) => {
                return (
                  <AvatarCard
                    key={username}
                    displayName={name}
                    username={username}
                    following={isFollowing}
                    // avatar link broken
                    avatarLink="/images/dog.png"
                    enableDivider
                  />
                );
              })}
              <div ref={ref} />
              {followersLoading || followingLoading ? <Loading /> : null}
            </div>
          );
        })}
      </TabGroup>
    </Wrapper>
  );
};

export default FollowerList;
