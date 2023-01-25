import { styled } from '@mui/system';
import { useRouter } from 'next/router';
import styles from './appNav.module.scss';
import cx from 'classnames';
import { RouteMap, ZIndexLevel } from '../../types';

const Wrapper = styled('div')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: ZIndexLevel.AppNav,
  width: '100%',
  height: '67px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(24, 24, 24, 0.2)',
  backdropFilter: 'blur(27.1828px)',
  boxShadow: '0px 0.5px 0px 0px #000000CC inset',
});

const Touchable = styled('div')({
  height: '100%',
  paddingLeft: '28.5px',
  paddingRight: '28.5px',
  cursor: 'pointer',
  paddingTop: '19.5px',
  paddingBottom: '24.5px',
});

const AppNav = () => {
  const router = useRouter();
  const routeActive = router.pathname;

  const handleGoHome = () => {
    router.push(RouteMap.Home);
  };

  const handleGoTag = () => {
    router.push(RouteMap.Tags);
  };

  return (
    <Wrapper data-cid="AppNav">
      <Touchable
        onClick={handleGoHome}
        className={cx({
          [styles.inactive]: routeActive !== RouteMap.Home,
          [styles.active]: routeActive === RouteMap.Home,
        })}
      >
        <img
          src={
            routeActive !== RouteMap.Home
              ? '/images/fa-solid_pencil-ruler-grey.svg'
              : '/images/fa-solid_pencil-ruler.svg'
          }
          alt=""
          className="w-[24px] h-[24px]"
        />
      </Touchable>
      <Touchable
        onClick={handleGoTag}
        className={cx({
          [styles.inactive]: routeActive !== RouteMap.Tags,
          [styles.active]: routeActive === RouteMap.Tags,
        })}
      >
        <img
          src={
            routeActive !== RouteMap.Tags
              ? '/images/fa-solid_pencil-ruler-grey.svg'
              : '/images/fa-solid_pencil-ruler.svg'
          }
          alt=""
          className="w-[24px] h-[24px]"
        />
      </Touchable>
    </Wrapper>
  );
};

export default AppNav;
