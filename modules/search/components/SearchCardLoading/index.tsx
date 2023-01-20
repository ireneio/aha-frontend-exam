import AppSkeleton from '../../../common/components/AppSkeleton';

const SearchCardLoading = () => {
  return (
    <div data-cid="SearchCard_Loading">
      <AppSkeleton className="rounded-[10px] h-[222.67px] w-full" />
      <AppSkeleton className="h-[14.9px] mt-[20.33px] w-full" />
      <AppSkeleton className="h-[11.17px] mt-[12.33px] w-full" />
    </div>
  );
};

export default SearchCardLoading;
