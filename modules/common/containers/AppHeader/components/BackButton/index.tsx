import { styled } from '@mui/material';
import { TouchEventHandler } from 'react';

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  padding: 15,
});

const BackButton = ({ onClick }: { onClick: TouchEventHandler }) => {
  return (
    <Wrapper onClick={onClick}>
      <img src="/images/chevron_left.svg" alt="" className="w-[21.67px] h-[21.67px]" />
    </Wrapper>
  );
};

export default BackButton;
