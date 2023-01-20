import React from 'react';
import { Chip, styled } from '@mui/material';

type Variant = 'outlined' | 'primary' | 'default';

const CustomChipOutlined = styled(Chip)({
  border: '1px solid #ffffff',
  color: '#ffffff',
  fontWeight: 600,
  cursor: 'pointer',
  '&:hover': {
    color: '#121212',
    backgroundColor: '#ffffff',
  },
});

const CustomChipSolid = styled(Chip)({
  border: '1px solid #ffffff',
  backgroundColor: '#ffffff',
  color: '#121212',
  fontWeight: 600,
  cursor: 'pointer',
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
          return <CustomChipOutlined label={children} />;
        case 'primary':
          return <CustomChipSolid label={children} />;
        default:
          return <Chip label={children} />;
      }
    };

    return generateComponent();
  }
);

AppChip.displayName = 'AppChip';

export default AppChip;
