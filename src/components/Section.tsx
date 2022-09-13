import cx from "clsx";

interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
  align?: "left" | "center" | "right";
}

const Section = ({ size = "md", children, align }: Props) => {
  const styles = cx({
    "max-w-screen-xl mx-auto px-4": true,
    "py-4": size === "xs",
    "py-6": size === "sm",
    "py-8": size === "md",
    "py-12": size === "lg",
    "py-16": size === "xl",
    "flex justify-center": align === "center",
  });

  return <div className={styles}>{children}</div>;
};

export { Section };
