import cx from "clsx";

interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
}

const Section = ({ size, children }: Props) => {
  const styles = cx({
    "py-4": size === "xs",
    "py-6": size === "sm",
    "py-8": size === "md",
    "py-12": size === "lg",
    "py-16": size === "xl",
  });

  return <div className={styles}>{children}</div>;
};

export { Section };
