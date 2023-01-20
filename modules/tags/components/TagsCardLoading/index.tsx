import AppSkeleton from '../../../common/components/AppSkeleton';

const TagsCardLoading = () => {
  return (
    <div data-cid="TagsCardLoading">
      <AppSkeleton className="rounded-[10px] h-auto w-full aspect-square" />
      <AppSkeleton className="h-[14.9px] mt-[20.33px] w-full" />
      <AppSkeleton className="h-[11.17px] mt-[10.33px] w-full" />
    </div>
  );
};

export default TagsCardLoading;
