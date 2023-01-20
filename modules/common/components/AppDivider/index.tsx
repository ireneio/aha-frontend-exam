interface Props {
  top?: number | string;
  bottom?: number | string;
  enableLine?: boolean;
}

const AppDivider = ({ top, bottom, enableLine = false }: Props) => (
  <div
    data-cid="AppDivider"
    style={{
      marginTop: top,
      marginBottom: bottom,
      width: '100%',
      height: enableLine ? '1px' : 0,
      backgroundColor: '#ffffff',
      opacity: 0.1,
    }}
  />
);

export default AppDivider;
