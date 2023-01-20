import { styled } from '@mui/system';
import { ReactNode } from 'react';
import AppSidebar from '../../common/containers/AppSidebar';
import FollowerList from '../../follow/containers/FollowerList';

const Container = styled('div')({
  paddingTop: '54px',
  paddingLeft: '211px',
  paddingRight: '211px',
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
