import cx from "clsx";

interface Props {
  gradient?: "primary";
  align?: "left" | "center" | "right";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  as?: keyof JSX.IntrinsicElements;
  color?: string;
  display?: boolean;
  children?: React.ReactNode;
}

const Text = ({
  size = "md",
  as = "p",
  display,
  gradient,
  align,
  color,
  weight,
  children,
}: Props) => {
  const styles = cx({
    "leading-normal": true,
    "text-neutral-600": !display,
    "text-md": size === "xs" && !display,
    "text-lg": size === "sm" && !display,
    "text-xl": size === "md" && !display,
    "text-2xl": size === "lg" && !display,
    "text-3xl": size === "xl" && !display,
    "text-2xl font-semibold": size === "xs" && display,
    "text-3xl font-semibold": size === "sm" && display,
    "text-4xl font-bold": size === "md" && display,
    "text-5xl font-bold": size === "lg" && display,
    "text-6xl font-bold": size === "xl" && display,
    "text-left": align === "left",
    "text-center": align === "center",
    "text-right": align === "right",
    [`font-${weight}`]: weight,
    [`text-${color}`]: color,
    "bg-gradient-to-r from-violet-800 via-violet-500 to-violet-600 text-transparent bg-clip-text":
      gradient === "primary",
  });

  const El = as;

  return <El className={styles}>{children}</El>;
};

export { Text };
