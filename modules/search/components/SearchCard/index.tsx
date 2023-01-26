import { useMediaQuery, useTheme, styled } from '@mui/material';
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
  const theme = useTheme();
  const is1440 = useMediaQuery(theme.breakpoints.only('xl'));

  return (
    <Wrapper data-cid="SearchCard">
      <Img
        src={src}
        alt={alt}
        layout={is1440 ? 'fixed' : 'responsive'}
        width={219}
        height={146}
        objectFit="contain"
        onError={(e: any) => handleImageError(e)}
      />
      <div className="mt-[20.33px] xl:mt-0">
        <AppCardTitle>{title}</AppCardTitle>
      </div>
      <AppCardSubtitle>by {subtitle}</AppCardSubtitle>
    </Wrapper>
  );
};

export default SearchCard;
