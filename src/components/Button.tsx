import { css } from "@linaria/core";
import { useEffect, useRef, forwardRef, Ref } from "react";

const styles = css`
  background-image: radial-gradient(var(--tw-gradient-stops));
  background-size: 200% 200%;
  background-position: calc((100 - var(--mouse-x, 0)) * 1%)
    calc((100 - var(--mouse-y, 0)) * 1%);

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    filter: brightness(0.9);
    transform: scale(0.95);
  }
`;

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
    <button
      className={`${styles} cursor-pointer rounded-full from-orange-500 to-pink-500 py-3 px-4 text-lg font-medium text-white duration-200 hover:shadow-md`}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
