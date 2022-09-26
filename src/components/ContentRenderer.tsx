import { PortableText } from "@portabletext/react";
import { Text } from "./";

const ContentRenderer = ({ content }: any) => {
  return (
    <PortableText
      value={content}
      components={{
        block: {
          h2: ({ children }) => (
            <Text as="h2" display>
              {children}
            </Text>
          ),
          normal: ({ children }) => <Text>{children}</Text>,
        },
      }}
    />
  );
};

export { ContentRenderer };
