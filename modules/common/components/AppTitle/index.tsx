import { styled } from '@mui/system';
import { ReactNode } from 'react';

const CustomDiv = styled('div')(({ theme }) => {
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 400,
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'capitalize',
    letterSpacing: '0.25px',
    [theme.breakpoints.up('sm')]: {
      fontSize: 30,
    },
  };
});

const AppTitle = ({ children }: { children: ReactNode }) => (
  <CustomDiv data-cid="AppTitle">{children}</CustomDiv>
);

export default AppTitle;
