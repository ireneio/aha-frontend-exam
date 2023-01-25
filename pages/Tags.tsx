import TagsCardLoading from '../modules/tags/components/TagsCardLoading';
import { styled } from '@mui/system';
import { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useSWR from 'swr';
import AppDivider from '../modules/common/components/AppDivider';
import AppTitle from '../modules/common/components/AppTitle';
import Layout from '../modules/layout';
import TagsCard from '../modules/tags/components/TagsCard';
import { fetcher } from '../utils/swr';

interface Data {
  id: string;
  name: string;
  count: number;
}

interface DataDisplay {
  key: string;
  tag: string;
  title: string;
  subtitle: string;
}

const Wrapper = styled('div')(({ theme }) => {
  return {
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingBottom: '48px',
    paddingTop: 19.5,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 77,
      paddingLeft: 337,
      paddingRight: 257,
    },
  };
});

const PAGE_LIMIT_DEFAULT = 8;

const Tags = () => {
  const { data, isValidating } = useSWR('/tags', fetcher);
  const { ref: lastAnchor, inView } = useInView();
  const [pageLimit, setPageLimit] = useState<number>(PAGE_LIMIT_DEFAULT);

  useEffect(() => {
    if (inView) {
      setPageLimit((prev) => prev + PAGE_LIMIT_DEFAULT);
    }
  }, [inView]);

  const dataDisplay: DataDisplay[] = useMemo(() => {
    if (data && data.length) {
      return data.slice(0, pageLimit).map(({ id, name, count }: Data, index: number) => {
        return {
          key: `${id}_${index}`,
          tag: name,
          title: name,
          subtitle: count.toString(),
        };
      });
    }

    return [];
  }, [data, pageLimit]);

  return (
    <Layout data-cid="Tags" showNav={false}>
      <Wrapper>
        <div className="ml-[-4px] xl:ml-0">
          <AppTitle>tags</AppTitle>
        </div>
        <AppDivider top={24} />
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-x-[24px] gap-y-[24px] xl:gap-y-[36px]">
          {dataDisplay.map(({ key, tag, title, subtitle }) => {
            return <TagsCard key={key} tag={tag} title={title} subtitle={subtitle} />;
          })}
          {isValidating ? [1, 2, 3, 4, 5].map((val) => <TagsCardLoading key={val} />) : null}
          <div ref={lastAnchor} />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Tags;
