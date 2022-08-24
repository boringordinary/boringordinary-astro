import { useEffect, useRef, forwardRef, Ref } from "react";
import { styled } from "@/styles/index";

const BaseButton = styled("button", {
  fontFamily: "$sansSerif",
  fontSize: "xl",
  fontWeight: "500",
  color: "#fff",
  borderRadius: "$2",
  backgroundImage: "radial-gradient(circle, $orange9 0%, $accent9 100%)",
  border: "$accent7 2px solid",
  backgroundSize: "200% 200%",
  cursor: "pointer",
  backgroundPosition:
    "calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "$sm",
  },
  "&:active": {
    filter: "brightness(0.9)",
    transform: "scale(0.95)",
    borderColor: "$accent8",
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    color: {
      primary: {
        background: "$primary9",
        "&:hover": {
          background: "$primary10",
        },
      },
    },
    variant: {
      ghost: {
        background: "transparent",
        border: "0",
        color: "$gray11",

        "&:hover": {
          transform: "none",
          boxShadow: "none",
        },
      },
    },
    size: {
      sm: {
        py: "$1",
        px: "$3",
        br: "$lg",
      },
      md: {
        py: "$2",
        px: "$4",
        br: "$lg",
      },
      lg: {
        fontSize: "$lg",
        py: "$3",
        px: "$6",
        br: "$xl",
      },
      xl: {
        fontSize: "$xl",
        py: "$4",
        px: "$8",
        br: "$xl",
      },
    },
    round: {
      true: {
        br: "$pill",
      },
    },
  },
});

const Button = forwardRef(({ children, ...rest }: any, forwardRef: any) => {
  const ref = useRef<HTMLButtonElement>();

  useEffect(() => {
    const buttonEl = ref.current as HTMLButtonElement;
    buttonEl.addEventListener("mousemove", (e) => {
      const rect = buttonEl.getBoundingClientRect();
      const x = ((e.clientX - rect.left) * 100) / buttonEl.clientWidth;
      const y = ((e.clientY - rect.top) * 100) / buttonEl.clientHeight;
      buttonEl.style.setProperty("--mouse-x", `${x}`);
      buttonEl.style.setProperty("--mouse-y", `${y}`);
    });
  }, []);

  return (
    <BaseButton {...rest} ref={ref}>
      {children}
    </BaseButton>
  );
});

Button.displayName = "Button";

export { Button };
