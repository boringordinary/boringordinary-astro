import { styled } from "@styles/index";

const Base = styled("div", {});

const Box = ({ children }) => {
  return (
    <Base>
      <>{children}</>
    </Base>
  );
};

export { Box };
