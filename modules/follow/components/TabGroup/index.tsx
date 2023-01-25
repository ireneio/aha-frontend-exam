import { styled, Tab, Tabs } from '@mui/material';
import { ReactNode, useMemo } from 'react';

type TabValue = string | number;

interface Props {
  onChange?: (val: any) => void;
  value: TabValue;
  tabs: TabItem[];
  children: ReactNode | ReactNode[];
}

interface TabItem {
  label: string;
  value: TabValue;
}

const CustomTabs = styled(Tabs)(() => {
  return {
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#181818',
    zIndex: 2,
    borderBottom: '2px solid #1F1F1F',
    marginTop: 2,
    '& .MuiTabs-indicator': {
      zIndex: 3,
      // bottom: -2,
      backgroundColor: '#ffffff',
      height: '2px',
    },
  };
});

const CustomTab = styled(Tab)(() => {
  return {
    color: '#929292',
    backgroundColor: '#181818',
    fontWeight: 700,
    fontSize: 16,
    fontFamily: 'Ubuntu-Bold',
    textTransform: 'capitalize',
    letterSpacing: '0.15px',
    position: 'relative',
    minHeight: 0,
    padding: 0,
    paddingTop: 32,
    paddingBottom: 11,
    '&:after': {
      content: '',
      width: '400px',
      position: 'absolute',
      bottom: 0,
      height: 2,
      backgroundColor: '#1F1F1F',
    },
    '&.Mui-selected': {
      color: '#ffffff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#ffffff',
    },
    '&:hover': {
      color: '#ffffff',
      opacity: 1,
    },
  };
});

const Divider = styled('div')({
  marginTop: '28px',
});

const TabGroup = ({ onChange, value, tabs, children }: Props) => {
  const tabPanelContent = useMemo(() => {
    const idx = tabs.findIndex((tab) => tab.value === value);

    return Array.isArray(children) ? children[idx] : children;
  }, [children, tabs, value]);

  const handleChange = (v: TabValue) => {
    if (onChange) {
      onChange(v);
    }
  };

  return (
    <div>
      <CustomTabs
        value={value}
        onChange={(value: TabValue, newValue: TabValue) => handleChange(newValue)}
      >
        {tabs.map(({ label, value: _v }) => {
          return (
            <CustomTab
              key={_v}
              label={label}
              value={_v}
              style={{ width: `calc(100%/${tabs.length})` }}
            />
          );
        })}
      </CustomTabs>
      <Divider />
      {tabPanelContent}
    </div>
  );
};
export default TabGroup;
