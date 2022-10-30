import cx from "clsx";

interface Props {
  gradient?: "primary" | "secondary" | "radialPrimary";
  align?: "left" | "center" | "right";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  lineHeight?: string;
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
  lineHeight,
  color,
  weight,
  children,
}: Props) => {
  const styles = cx({
    "text-md": size === "xs" && !display,
    "text-lg": size === "sm" && !display,
    "text-xl": size === "md" && !display,
    "text-2xl": size === "lg" && !display,
    "text-3xl": size === "xl" && !display,
    "text-2xl font-semibold": size === "xs" && display,
    "text-3xl font-semibold leading-normal": size === "sm" && display,
    "text-4xl font-bold": size === "md" && display,
    "text-5xl font-extrabold leading-snug": size === "lg" && display,
    "text-6xl font-extrabold": size === "xl" && display,
    "text-left": align === "left",
    "text-center": align === "center",
    "text-right": align === "right",
    [`leading-${lineHeight}`]: lineHeight,
    [`font-${weight}`]: weight,
    [`text-${color}`]: color,
    "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 text-transparent bg-clip-text":
      gradient === "primary",
    "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 text-transparent bg-clip-text":
      gradient === "radialPrimary",
    "bg-gradient-to-b from-purple-200 to-purple-800 text-transparent bg-clip-text":
      gradient === "secondary",
  });

  const El = as;

  return <El className={styles}>{children}</El>;
};

export { Text };
