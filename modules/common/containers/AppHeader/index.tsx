import { styled } from '@mui/material';
import { useRouter } from 'next/router';
import { RouteMap, RouteNameTitleMap, ZIndexLevel } from '../../types';
import BackButton from './components/BackButton';

const Wrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: ZIndexLevel.AppHeader,
  width: '100%',
  backgroundColor: '#181818',
  paddingLeft: '21px',
  paddingRight: '21px',
  height: '70px',
});

const Logo = styled('h1')({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  width: '20vw',
  // make clickable area larger
  paddingLeft: '15px',
  paddingRight: '15px',
  marginLeft: '-20px',
  backgroundImage: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
  fontSize: '13px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontFamily: 'Ubuntu-Bold',
  letterSpacing: '-0.05em',
});

const TitleWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  height: '70px',
});

const Title = styled('h1')({
  fontSize: '24px',
  fontWeight: 400,
  color: '#ffffff',
});

const BackButtonWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '-21px',
  height: '70px',
});

const AppHeader = () => {
  const router = useRouter();
  const pathname = router.pathname as RouteMap;
  const isHomePage = pathname === RouteMap.Home;

  const handleGoHome = () => {
    router.push(RouteMap.Home);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Wrapper>
      {isHomePage && (
        <Logo className="textGradientBase" onClick={handleGoHome}>
          logo
        </Logo>
      )}
      {!isHomePage && (
        <TitleWrapper>
          <BackButtonWrapper>
            <BackButton onClick={handleGoBack} />
          </BackButtonWrapper>
          <Title>{RouteNameTitleMap[pathname]}</Title>
        </TitleWrapper>
      )}
    </Wrapper>
  );
};

export default AppHeader;
