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
      size="xl"
      css={{
        mx: "auto",
        maxWidth: "$md",
        display: "flex",
        justifyContent: "center",
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
        <Text as="h1" display size="lg" gradient="primary" align="center">
          World-class Design & Dev
          <br />
          without the Headaches.
        </Text>

        <Box
          css={{
            mt: "$4",
            w: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a href="/pricing">
            <Button size="xl" round shadow="lg">
              Start a project
            </Button>
          </a>
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
