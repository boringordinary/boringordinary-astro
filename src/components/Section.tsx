import cx from "clsx";

interface Props {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
  align?: "left" | "center" | "right";
}

const Section = ({ size = "md", children, align, className }: Props) => {
  const styles = cx({
    "w-full max-w-screen-md md:max-w-screen-lg xl:max-w-screen-xl mx-auto px-4":
      true,
    "py-8": size === "xs",
    "py-12": size === "sm",
    "py-16": size === "md",
    "py-18": size === "lg",
    "py-24": size === "xl",
    "flex justify-center": align === "center",
    [className as string]: className,
  });

  return <div className={styles}>{children}</div>;
};

export { Section };
