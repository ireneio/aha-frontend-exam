import { styled } from '@mui/system';
import { ReactNode } from 'react';

const CustomDiv = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 400,
  fontSize: '24px',
  color: '#ffffff',
  textTransform: 'capitalize',
});

const AppTitle = ({ children }: { children: ReactNode }) => (
  <CustomDiv data-cid="AppTitle">{children}</CustomDiv>
);

export default AppTitle;
