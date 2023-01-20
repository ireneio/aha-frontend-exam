import { styled } from '@mui/system';
import SliderUnstyled from '@mui/base/SliderUnstyled';
import { useState } from 'react';

const CustomSlider = styled(SliderUnstyled)(({ theme }) => {
  return {
    display: 'block',
    height: '1px',
    width: '98%',
    position: 'relative',
    '& .MuiSlider-mark': {
      display: 'none',
    },
    '& .MuiSlider-track': {
      position: 'absolute',
      height: '8px',
      borderRadius: '33px',
      background: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
    },
    '& .MuiSlider-thumb': {
      position: 'absolute',
      height: '22px',
      width: '22px',
      marginTop: '-5px',
      marginLeft: '-3.5px',
      borderRadius: '50%',
      border: '6px solid #ffd05d',
      backgroundColor: '#1b1b1b',
      '&.Mui-active': {
        boxShadow: '0 0 0 0.25rem #ffffff',
      },
    },
    '& .MuiSlider-rail': {
      position: 'absolute',
      width: '105%',
      height: '8px',
      borderRadius: '33px',
      backgroundColor: '#ffffff',
      opacity: '0.3',
      [theme.breakpoints.up('lg')]: {
        width: '102%',
      },
    },
    '& .MuiSlider-markLabel': {
      position: 'absolute',
      marginTop: 18,
      opacity: 0.5,
      color: '#ffffff',
      paddingRight: 20,
      fontSize: 14,
    },
    '& .MuiSlider-markLabelActive': {
      opacity: 1,
    },
  };
});

function calculateValue(value: number) {
  switch (value) {
    case 1:
      return 3;
    case 2:
      return 6;
    case 3:
      return 9;
    case 4:
      return 12;
    case 5:
      return 15;
    case 6:
      return 50;
    default:
      return 0;
  }
}

function calculateValueReverse(value: number) {
  switch (value) {
    case 3:
      return 1;
    case 6:
      return 2;
    case 9:
      return 3;
    case 12:
      return 4;
    case 15:
      return 5;
    case 50:
      return 6;
    default:
      return 0;
  }
}

const marks = [1, 2, 3, 4, 5, 6].map((value) => ({
  value,
  label: calculateValue(value),
}));

const SearchSlider = ({ value, onChange }: { onChange: any; value: number }) => {
  const [internalValue, setInternalValue] = useState(calculateValueReverse(value));

  return (
    <CustomSlider
      data-cid="SearchSlider"
      value={internalValue}
      onChange={(e: any, newValue: any) => {
        setInternalValue(newValue);
        onChange(calculateValue(newValue));
      }}
      step={1}
      min={1}
      max={6}
      marks={marks}
      scale={calculateValue}
    />
  );
};

export default SearchSlider;
