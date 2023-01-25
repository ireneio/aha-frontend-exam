import { Button } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const CustomButton = styled(Button)({
  height: '38px',
  width: '100%',
  fontFamily: 'Ubuntu-bold',
  fontWeight: 'bold',
  fontSize: '14px',
  textTransform: 'uppercase',
  backgroundColor: '#ffffff',
  color: '#181818',
  borderRadius: '4px',
  border: '1px solid #ffffff',
  '&:hover': {
    backgroundColor: '#121212',
    color: '#ffffff',
    border: '1px solid #ffffff',
  },
});

const AppButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <CustomButton data-cid="AppButton" onClick={() => onClick && onClick()}>
    {children}
  </CustomButton>
);

export default AppButton;
