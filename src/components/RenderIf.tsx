const RenderIf: React.FC<IRenderIf> = ({ isTrue, children }) => {
  if (!isTrue) {
    return null;
  }

  return <>{children}</>;
};

export default RenderIf;
