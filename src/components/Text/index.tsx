import cx from "clsx";

interface Props {
  align?: "left" | "center" | "right";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  as?: keyof JSX.IntrinsicElements;
  color?: string;
  display?: boolean;
  children?: React.ReactNode;
}

const Text = ({ size = "md", as = "p", display, align, children }: Props) => {
  const styles = cx({
    "text-xs": size === "xs",
    "text-sm": size === "sm",
    "text-base": size === "md",
    "text-lg": size === "lg",
    "text-xl": size === "xl",
    "text-2xl font-bold": size === "xs" && display,
    "text-3xl font-bold": size === "sm" && display,
    "text-4xl font-bold": size === "md" && display,
    "text-5xl font-extrabold": size === "lg" && display,
    "text-6xl font-extrabold": size === "xl" && display,
    "text-left": align === "left",
    "text-center": align === "center",
    "text-right": align === "right",
  });

  const El = as;

  return <El className={styles}>{children}</El>;
};

export { Text };
