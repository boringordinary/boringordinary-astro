import {
  Button,
  Text,
  Container,
  Box,
  Section,
  ImageClip,
} from "@components/index";
import { LogoReel } from "./LogoReel";

const Hero = () => {
  return (
    <Section
      css={{
        mx: "auto",
        maxWidth: "$md",
        display: "flex",
        justifyContent: "center",
        py: "$20",
        gridAutoFlow: "dense",
      }}
    >
      <Container
        size="md"
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text as="h1" display size="xl" gradient="primary" align="center">
          A Non-Traditional Web Agency
        </Text>
        <Text as="h1" display size="sm" gradient="primary" align="center">
          That delivers non-traditional solutions.
        </Text>

        <Box
          css={{
            mt: "$4",
            w: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button size="xl" round shadow="lg">
            Start a project
          </Button>
        </Box>

        <Box
          css={{
            filter: "grayscale(1)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LogoReel logos={[]} />
        </Box>
      </Container>
    </Section>
  );
};

export { Hero };
