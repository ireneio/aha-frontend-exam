import AppSkeleton from '../../../common/components/AppSkeleton';

const Loading = () => {
  return (
    <div>
      <div className="flex items-center gap-[15px]">
        <AppSkeleton className="w-[38px] h-[38px]" />
        <div>
          <AppSkeleton className="h-[14px] w-[140px]" />
          <AppSkeleton className="h-[14px] w-[120px] mt-[8px]" />
        </div>
      </div>
      <div className="flex items-center gap-[15px] mt-[12px]">
        <AppSkeleton className="w-[38px] h-[38px]" />
        <div>
          <AppSkeleton className="h-[14px] w-[140px]" />
          <AppSkeleton className="h-[14px] w-[120px] mt-[8px]" />
        </div>
      </div>
      <div className="flex items-center gap-[15px] mt-[12px]">
        <AppSkeleton className="w-[38px] h-[38px]" />
        <div>
          <AppSkeleton className="h-[14px] w-[140px]" />
          <AppSkeleton className="h-[14px] w-[120px] mt-[8px]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
