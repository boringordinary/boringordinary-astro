import { useEffect, useRef, forwardRef } from "react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  shadow?: "md" | "lg";
  onClick?: () => void;
  round?: boolean;
}

const Button = forwardRef(
  (
    {
      children,
      size = "md",
      variant = "primary",
      shadow,
      round,
      fullWidth,
      ...rest
    }: Props,
    forwardedRef: any
  ) => {
    const ref = useRef<HTMLButtonElement>(null);

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

    const styles = clsx({
      "text-md font-medium transition transition-150 ease-in-out text-center rounded-lg focus:brightness-90 border-2 shadow-none":
        true,
      "active:shadow-none active:translate-y-0 focus:translate-y-0": shadow,
      "hover:translate-y-[-2px] hover:shadow-sm": shadow === "md",
      "hover:translate-y-[-2px] hover:shadow-md": shadow === "lg",
      "text-gray-500": variant === "ghost",
      "border-primary-600 text-white": variant === "primary",
      "px-3 py-2": size === "sm",
      "px-4 py-2": size === "md",
      "text-lg px-8 py-3": size === "lg",
      "text-xl px-6 py-3": size === "xl",
      "rounded-full": round,
      "w-full": fullWidth,
    });

    const gradientStyles = {
      backgroundPosition:
        "calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)",
      backgroundImage: "radial-gradient(circle, #ed1594 0%, #ff7615)",
      backgroundSize: "200% 200%",
    };

    return (
      <button
        className={styles}
        style={variant === "primary" ? gradientStyles : undefined}
        {...rest}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export { Button };
