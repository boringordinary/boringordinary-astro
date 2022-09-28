import { PortableText } from "@portabletext/react";
import { Text } from "./";

const ContentRenderer = ({ content }: any) => {
  return (
    <PortableText
      value={content}
      components={{
        block: {
          h2: ({ children }) => (
            <div className="mb-4">
              <Text as="h2" display size="sm">
                {children}
              </Text>
            </div>
          ),
          h3: ({ children }) => (
            <div className="mb-4">
              <Text as="h3" display size="sm">
                {children}
              </Text>
            </div>
          ),
          normal: ({ children }) => <Text color="neutral-600">{children}</Text>,
        },
      }}
    />
  );
};

export { ContentRenderer };
