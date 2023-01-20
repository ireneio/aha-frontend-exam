import { CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

const AppSkeleton = ({ className, style }: { className?: string; style?: CSSProperties }) => {
  return (
    <div
      className={twMerge('animate-pulse bg-[#aaaaaa] rounded m-1 h-3', className)}
      style={style}
    />
  );
};

export default AppSkeleton;
