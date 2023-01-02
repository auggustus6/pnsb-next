type SpacingProps = {
  size: number;
};

const Spacing = ({ size }: SpacingProps) => {
  return <div style={{ paddingTop: `${size}rem` }} />;
};

export default Spacing;
