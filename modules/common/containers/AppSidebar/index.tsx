import { styled } from '@mui/system';
import { useRouter } from 'next/router';
import { RouteMap } from '../../types';
import { useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonBase } from '@mui/material';

const Wrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2,
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
  paddingTop: '34px',
  paddingBottom: '27px',
  paddingLeft: '22px',
  paddingRight: '22px',
  letterSpacing: '-0.05em',
});

const Touchable = styled(ButtonBase)({
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  padding: '12.7px 22px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
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
  const [hoverIdx, setHoverIdx] = useState(-1);

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
      <Logo className="textGradientBase" onClick={() => handleGoHome()}>
        logo
      </Logo>
      {SIDEBAR_ITEMS.map(
        ({ path, clickHandler, label, disabledCondition, notification }, index) => {
          const isHovered = hoverIdx === index;
          return (
            <Touchable
              key={path}
              onClick={() => clickHandler()}
              onMouseEnter={() => setHoverIdx(index)}
              onMouseLeave={() => setHoverIdx(-1)}
            >
              {notification && disabledCondition ? (
                <div className="bg-[#00D1FF] w-[6px] h-[6px] rounded-full absolute right-[24px] top-[10px] border border-[#1b1b1b]" />
              ) : null}
              <img
                src="/images/fa-solid_pencil-ruler-grey.svg"
                alt=""
                className={twMerge(
                  'w-[24px] h-[24px]',
                  disabledCondition && !isHovered ? 'block' : 'hidden'
                )}
              />
              <img
                src="/images/fa-solid_pencil-ruler.svg"
                alt=""
                className={twMerge(
                  'w-[24px] h-[24px]',
                  !disabledCondition || isHovered ? 'block' : 'hidden'
                )}
              />
              <div
                className={twMerge(
                  isHovered || !disabledCondition ? 'block' : 'hidden',
                  disabledCondition && !isHovered ? 'text-[#8A8A8F]' : 'text-[#FFFFFF]'
                )}
              >
                <TouchableText>{label}</TouchableText>
              </div>
              <div
                className={twMerge(
                  'h-[18px] w-full',
                  !isHovered && disabledCondition ? 'block' : 'hidden'
                )}
              />
            </Touchable>
          );
        }
      )}
    </Wrapper>
  );
};

export default AppSidebar;
