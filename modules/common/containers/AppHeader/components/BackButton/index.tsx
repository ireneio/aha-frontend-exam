import { Button, styled } from '@mui/material';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { TouchEventHandler } from 'react';

const Wrapper = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  paddingTop: '25px',
  paddingBottom: '25px',
  paddingRight: '19.88px',
});

const BackButton = ({ onClick }: { onClick: TouchEventHandler }) => {
  return (
    <Wrapper onClick={onClick}>
      <ChevronLeftOutlinedIcon sx={{ fontSize: 30, color: '#ffffff' }} />
    </Wrapper>
  );
};

export default BackButton;
