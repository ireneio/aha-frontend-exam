import { ReactNode } from 'react';
import AppNav from '../../common/containers/AppNav';
import AppHeader from '../../common/containers/AppHeader';
import { styled } from '@mui/system';

interface Props {
  children: ReactNode;
  showNav?: boolean;
  showHeader?: boolean;
}

const Wrapper = styled('div')({
  paddingTop: '70px',
});

const Mobile = ({ children, showNav = true, showHeader = true }: Props) => {
  return (
    <div data-cid="Layout_Mobile">
      {showHeader && <AppHeader />}
      <Wrapper>{children}</Wrapper>
      {showNav && <AppNav />}
    </div>
  );
};

export default Mobile;
