import { styled } from '@mui/material';
import { ReactNode } from 'react';

const Wrapper = styled('div')({
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: '24px',
  border: '4px solid #ffffff',
  borderRadius: '6px',
  paddingLeft: '10px',
  paddingRight: '10px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textTransform: 'capitalize',
  wordBreak: 'break-all',
  paddingTop: 3,
  paddingBottom: 3,
});

const SearchTag = ({ children }: { children: ReactNode }) => {
  return <Wrapper data-cid="SearchTag">{children}</Wrapper>;
};

export default SearchTag;
