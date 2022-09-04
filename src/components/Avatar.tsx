import { styled, css } from "@/styles";

const StyledAvatar = styled("div", {
  br: "4200px",
  position: "relative",
  overflow: "hidden",

  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        size: "$fontSizes$xl5",
      },
      md: {
        size: "$fontSizes$xl6",
      },
      lg: {
        size: "$fontSizes$xl7",
      },
    },
  },
});

const StyledImage = styled("img", {
  size: "100%",
  objectFit: "cover",
});

interface Props {
  src: string;
}

const Avatar = ({ src }: Props) => {
  return (
    <StyledAvatar>
      <StyledImage src={src} alt="avatar" />
    </StyledAvatar>
  );
};

export { Avatar };
