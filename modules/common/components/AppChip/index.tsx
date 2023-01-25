import React from 'react';
import { styled } from '@mui/material';

type Variant = 'outlined' | 'primary' | 'default';

const CustomChipOutlined = styled('div')({
  border: '1px solid #ffffff',
  color: '#ffffff',
  fontWeight: 400,
  fontFamily: 'NotoSans-Regular',
  fontSize: 12,
  lineHeight: '12px',
  cursor: 'pointer',
  padding: '8px 10px',
  borderRadius: '20px',
  '.MuiChip-label': {
    padding: 0,
  },
  '&:hover': {
    color: '#121212',
    backgroundColor: '#ffffff',
  },
});

const CustomChipSolid = styled('div')({
  border: '1px solid #ffffff',
  backgroundColor: '#ffffff',
  color: '#121212',
  fontWeight: 400,
  fontFamily: 'NotoSans-Regular',
  fontSize: 12,
  lineHeight: '12px',
  cursor: 'pointer',
  padding: '8px 10px',
  borderRadius: '20px',
  '.MuiChip-label': {
    padding: 0,
  },
  '&:hover': {
    color: '#ffffff',
    backgroundColor: '#121212',
  },
});

const AppChip = React.memo(
  ({ children, variant = 'default' }: { children: string; variant?: Variant }) => {
    const generateComponent = () => {
      switch (variant) {
        case 'outlined':
          return <CustomChipOutlined>{children}</CustomChipOutlined>;
        case 'primary':
        default:
          return <CustomChipSolid>{children}</CustomChipSolid>;
      }
    };

    return generateComponent();
  }
);

AppChip.displayName = 'AppChip';

export default AppChip;
