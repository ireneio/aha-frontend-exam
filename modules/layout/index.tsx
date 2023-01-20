import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/system';
import { ReactNode } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

interface Props {
  children: ReactNode;
  showNav?: boolean;
  showHeader?: boolean;
}

const Layout = ({ children, showNav = true, showHeader = true }: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div data-cid="Layout">
      {matches && <Desktop>{children}</Desktop>}
      {!matches && (
        <Mobile showNav={showNav} showHeader={showHeader}>
          {children}
        </Mobile>
      )}
    </div>
  );
};

export default Layout;
