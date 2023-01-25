import AppCardSubtitle from '../../../common/components/AppCardSubtitle';
import AppCardTitle from '../../../common/components/AppCardTitle';
import SearchTag from '../Tag';
import { styled } from '@mui/system';
import { useMediaQuery, useTheme } from '@mui/material';

interface Props {
  tag: string;
  title: string;
  subtitle: string;
}

const Wrapper = styled('div')({
  position: 'relative',
});

const Accordion = styled('div')({
  backgroundColor: '#ffffff',
  opacity: 0.06,
  borderRadius: '10px',
  minHeight: '150px',
  minWidth: '150px',
});

const WrapperSearchTag = styled('div')({
  position: 'absolute',
  left: 10,
  bottom: 64,
  zIndex: 2,
  right: 10,
});

const Subtitle = styled('span')({
  textTransform: 'capitalize',
});

const TagsCard = ({ tag, title, subtitle }: Props) => {
  const theme = useTheme();
  const isClientAboveMobile = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Wrapper data-cid="TagsCard">
      <Accordion className="aspect-square" />
      <WrapperSearchTag>
        <SearchTag>{tag}</SearchTag>
      </WrapperSearchTag>
      <div className="mt-[9px] xl:mt-[12px]">
        <AppCardTitle>{title}</AppCardTitle>
        <AppCardSubtitle>
          {subtitle} <Subtitle>{isClientAboveMobile ? 'results' : 'questions'}</Subtitle>
        </AppCardSubtitle>
      </div>
    </Wrapper>
  );
};

export default TagsCard;
