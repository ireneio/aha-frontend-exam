import { styled, Tab, Tabs } from '@mui/material';
import { ReactNode, useMemo } from 'react';

type TabValue = string | number;

interface Props {
  onChange?: (val: any) => void;
  value: TabValue;
  tabs: TabItem[];
  children: ReactNode | ReactNode[];
  enableDivider?: boolean;
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
    paddingTop: 32,
    backgroundColor: '#181818',
    zIndex: 2,
    '& .MuiTabs-indicator': {
      backgroundColor: '#ffffff',
      height: '2px',
    },
    '& .MuiTabs-flexContainer': {
      borderBottom: '2px solid #1f1f1f',
    },
  };
});

const CustomTab = styled(Tab)(({ theme }) => {
  return {
    color: '#929292',
    backgroundColor: '#181818',
    // borderBottom: '2px solid #1f1f1f',
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
  marginTop: '35px',
});

const TabGroup = ({ onChange, value, tabs, children, enableDivider = true }: Props) => {
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
      {enableDivider && <Divider />}
      {tabPanelContent}
    </div>
  );
};
export default TabGroup;
