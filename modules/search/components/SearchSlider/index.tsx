import { styled } from '@mui/system';
import SliderUnstyled from '@mui/base/SliderUnstyled';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

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
      height: '26px',
      width: '26px',
      marginTop: '-8px',
      marginLeft: '-4px',
      borderRadius: '50%',
      border: '6px solid #ffd05d',
      backgroundColor: '#1b1b1b',
      '&.Mui-active': {
        boxShadow: '0 0 0 0.25rem #ffffff',
      },
    },
    '& .MuiSlider-rail': {
      position: 'absolute',
      width: '107%',
      height: '8px',
      borderRadius: '33px',
      backgroundColor: '#ffffff',
      opacity: '0.3',
      [theme.breakpoints.up('lg')]: {
        width: '102.5%',
      },
    },
    '& .MuiSlider-markLabel': {
      display: 'none',
      position: 'absolute',
      marginTop: 22,
      opacity: 0.5,
      color: '#ffffff',
      fontSize: 14,
      [theme.breakpoints.up('lg')]: {
        fontSize: 16,
      },
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
    case 2.5:
      return 6;
    case 4:
      return 9;
    case 5.5:
      return 12;
    case 7:
      return 15;
    case 9:
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
      return 2.5;
    case 9:
      return 4;
    case 12:
      return 5.5;
    case 15:
      return 7;
    case 50:
      return 9;
    default:
      return 0;
  }
}

const marks = [1, 2.5, 4, 5.5, 7, 9].map((value) => ({
  value,
  label: calculateValue(value),
}));

const SearchSlider = ({ value, onChange }: { onChange: any; value: number }) => {
  const [internalValue, setInternalValue] = useState(calculateValueReverse(value));

  return (
    <>
      <CustomSlider
        data-cid="SearchSlider"
        value={internalValue}
        onChange={(e: any, newValue: any) => {
          setInternalValue(newValue);
          onChange(calculateValue(newValue));
        }}
        step={null}
        min={1}
        max={9}
        marks={marks}
        scale={calculateValue}
      />
      <div className="relative text-[14px] xl:text-[16px] mt-[22px]">
        <div
          className={twMerge(
            'text-[#FFFFFF] xl:mt-[-2px] xl:left-[1px] left-[1px] absolute',
            internalValue === 1 ? 'opacity-100' : 'opacity-50'
          )}
        >
          3
        </div>
        <div
          className={twMerge(
            'text-[#FFFFFF] xl:mt-[-2px] xl:left-[18.5%] left-[18.5%] absolute',
            internalValue === 2.5 ? 'opacity-100' : 'opacity-50'
          )}
        >
          6
        </div>
        <div
          className={twMerge(
            'text-[#FFFFFF] xl:mt-[-2px] xl:left-[37.25%] left-[36.7%] absolute',
            internalValue === 4 ? 'opacity-100' : 'opacity-50'
          )}
        >
          9
        </div>
        <div
          className={twMerge(
            'text-[#FFFFFF] xl:mt-[-2px] xl:left-[55.2%] left-[54.25%] absolute',
            internalValue === 5.5 ? 'opacity-100' : 'opacity-50'
          )}
        >
          12
        </div>
        <div
          className={twMerge(
            'text-[#FFFFFF] xl:mt-[-2px] xl:left-[74%] left-[74%] absolute',
            internalValue === 7 ? 'opacity-100' : 'opacity-50'
          )}
        >
          15
        </div>
        <div
          className={twMerge(
            'text-[#FFFFFF] xl:mt-[-2px] xl:right-[-4px] right-[-12.25px] absolute',
            internalValue === 9 ? 'opacity-100' : 'opacity-50'
          )}
        >
          50
        </div>
      </div>
    </>
  );
};

export default SearchSlider;
