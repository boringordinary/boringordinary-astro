// import { useMemo, Ref, memo, ReactNode, forwardRef } from "react";
// import type { CSS } from "@/styles/index";

// type As = keyof JSX.IntrinsicElements | React.ComponentType<any>;

// export interface Props {
//   tag: keyof JSX.IntrinsicElements;
//   children?: ReactNode;
//   color?: string;
//   size?: string | number;
//   margin?: string | number;
//   transform?: string;
//   css?: CSS;
//   as?: As;
// }

// export const Text = forwardRef((props: Props, ref: Ref<HTMLElement>) => {
//   const {
//     children,
//     tag,
//     color,
//     transform,
//     margin: marginProp,
//     size,
//     css,
//     ...otherProps
//   } = props;

//   const fontSize = useMemo<string>(() => {
//     if (!size) return "inherit";
//     if (typeof size === "number") return `${size}px`;
//     return size;
//   }, [size]);

//   const margin = useMemo<string>(() => {
//     if (!marginProp) return "inherit";
//     if (typeof marginProp === "number") return `${size}px`;
//     return marginProp;
//   }, [marginProp]);

//   return (
//     <StyledText
//       as={tag}
//       css={{
//         color,
//         fontSize: size ? fontSize : "",
//         margin,
//         tt: transform,
//         ...(css as any),
//       }}
//       {...otherProps}
//     >
//       {children}
//     </StyledText>
//   );
// });

// const MemoTextChild = memo(Text);
