import Loading from '../TagsCardLoading';
import AppCardSubtitle from '../../../common/components/AppCardSubtitle';
import AppCardTitle from '../../../common/components/AppCardTitle';
import SearchTag from '../Tag';
import { styled } from '@mui/system';

interface Props {
  tag: string;
  title: string;
  subtitle: string;
}

const Wrapper = styled('div')({
  position: 'relative',
  // width: '150px'
});

const Accordion = styled('div')({
  backgroundColor: '#ffffff',
  opacity: 0.06,
  borderRadius: '10px',
  minHeight: '150px',
  minWidth: '150px',
  position: 'relative',
});

const WrapperSearchTag = styled('div')({
  position: 'absolute',
  left: '14px',
  bottom: '70px',
  zIndex: 2,
  right: '14px',
});

const Subtitle = styled('span')({
  textTransform: 'capitalize',
});

const TagsCard = ({ tag, title, subtitle }: Props) => {
  return (
    <Wrapper data-cid="TagsCard">
      <Accordion className="aspect-square" />
      <WrapperSearchTag>
        <SearchTag>{tag}</SearchTag>
      </WrapperSearchTag>
      <AppCardTitle>{title}</AppCardTitle>
      <AppCardSubtitle>
        {subtitle} <Subtitle>questions</Subtitle>
      </AppCardSubtitle>
    </Wrapper>
  );
};

export default TagsCard;
