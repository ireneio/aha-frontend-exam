import { styled } from '@mui/system';
import { ReactNode } from 'react';
import AppSidebar from '../../common/containers/AppSidebar';

const Container = styled('div')({
  minHeight: '100vh',
});

const Desktop = ({ children }: { children: ReactNode }) => {
  return (
    <Container data-cid="Layout_Desktop">
      <AppSidebar />
      {children}
    </Container>
  );
};

export default Desktop;
