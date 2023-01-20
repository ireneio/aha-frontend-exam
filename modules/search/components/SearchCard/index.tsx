import { styled } from '@mui/material';
import Image from 'next/image';
import AppCardSubtitle from '../../../common/components/AppCardSubtitle';
import AppCardTitle from '../../../common/components/AppCardTitle';

interface Props {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

const Wrapper = styled('div')({
  width: '100%',
  marginBottom: '40px',
});

const WrapperImg = styled('div')({
  position: 'relative',
  minHeight: '222.67px',
});

const Img = styled(Image)({
  verticalAlign: 'middle',
  color: '#fff',
});

const Alt = '/images/dog.png';
const handleImageError = (e: any) => {
  if (e.target.src !== Alt) {
    e.target.src = Alt;
  }
};

const SearchCard = ({ src, alt = '', title, subtitle }: Props) => {
  return (
    <Wrapper data-cid="SearchCard">
      <WrapperImg>
        <Img src={src} alt={alt} layout="fill" objectFit="contain" onError={(e: any) => handleImageError(e)} />
      </WrapperImg>
      <AppCardTitle>{title}</AppCardTitle>
      <AppCardSubtitle>by {subtitle}</AppCardSubtitle>
    </Wrapper>
  );
};

export default SearchCard;
