import cx from "clsx";

interface Props {
  gradient?: "primary";
  align?: "left" | "center" | "right";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
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
  children,
}: Props) => {
  const styles = cx({
    "leading-normal": !display,
    "leading-tight": display,
    "text-xs": size === "xs",
    "text-sm": size === "sm",
    "text-xl": size === "md",
    "text-2xl": size === "lg",
    "text-3xl": size === "xl",
    "text-2xl font-bold": size === "xs" && display,
    "text-3xl font-bold": size === "sm" && display,
    "text-4xl font-bold": size === "md" && display,
    "text-5xl font-extrabold": size === "lg" && display,
    "text-6xl font-extrabold": size === "xl" && display,
    "text-left": align === "left",
    "text-center": align === "center",
    "text-right": align === "right",
    "bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text":
      gradient === "primary",
  });

  const El = as;

  return <El className={styles}>{children}</El>;
};

export { Text };
