import { styled } from '@mui/system';
import { useRouter } from 'next/router';
import cx from 'classnames';
import styles from './appSidebar.module.scss';
import { RouteMap } from '../../types';
import { useMemo } from 'react';

const Wrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: '#1b1b1b',
  minHeight: '100vh',
  width: '80px',
});

const Logo = styled('h1')({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  backgroundImage: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
  fontSize: '13px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontFamily: 'Ubuntu-Bold',
  fontStyle: 'normal',
  paddingTop: '37px',
  paddingBottom: '45px',
  paddingLeft: '22px',
  paddingRight: '22px',
  letterSpacing: '-0.05em',
});

const Touchable = styled('div')({
  height: '100%',
  cursor: 'pointer',
  paddingLeft: '22px',
  paddingRight: '22px',
});

const TouchableText = styled('div')({
  textTransform: 'capitalize',
  fontSize: '12px',
});

interface SidebarItem {
  path: RouteMap;
  clickHandler: () => void;
  label: string;
  disabledCondition: boolean;
  notification: boolean;
}

const AppSidebar = () => {
  const router = useRouter();
  const routeActive = router.pathname;

  const handleGoHome = () => {
    router.push(RouteMap.Home);
  };

  const handleGoTag = () => {
    router.push(RouteMap.Tags);
  };

  const SIDEBAR_ITEMS: SidebarItem[] = useMemo(() => {
    return [
      {
        path: RouteMap.Home,
        clickHandler: handleGoHome,
        label: 'home',
        disabledCondition: routeActive !== RouteMap.Home && routeActive !== RouteMap.Result,
        notification: false,
      },
      {
        path: RouteMap.Tags,
        clickHandler: handleGoTag,
        label: 'tags',
        disabledCondition: routeActive !== RouteMap.Tags,
        notification: true,
      },
    ];
  }, [routeActive]);

  return (
    <Wrapper>
      <Logo className="textGradientBase" onClick={handleGoHome}>
        logo
      </Logo>
      {SIDEBAR_ITEMS.map(
        ({ path, clickHandler, label, disabledCondition, notification }, index) => {
          return (
            <Touchable
              key={path}
              onClick={clickHandler}
              className={cx(
                'flex flex-row flex-wrap items-center justify-center pb-[25px] relative',
                {
                  [styles.inactive]: disabledCondition,
                  [styles.active]: !disabledCondition,
                }
              )}
            >
              {notification && disabledCondition ? (
                <div className="bg-[#00D1FF] w-[7px] h-[7px] rounded-full absolute right-[23px] top-[-6px]" />
              ) : null}
              <img
                src={
                  disabledCondition
                    ? '/images/fa-solid_pencil-ruler-grey.svg'
                    : '/images/fa-solid_pencil-ruler.svg'
                }
                alt=""
                className="w-[24px] h-[24px]"
              />
              {!disabledCondition && <TouchableText>{label}</TouchableText>}
              {disabledCondition && <div className="h-[18px] w-full" />}
            </Touchable>
          );
        }
      )}
    </Wrapper>
  );
};

export default AppSidebar;
