import { Button, Text, Container, Box, ImageClip } from "@components/index";
import { LogoReel } from "./LogoReel";

const Hero = () => {
  return (
    <Box
      css={{
        maxWidth: "$md",
        display: "flex",
        justifyContent: "center",
        py: "$20",
        gridAutoFlow: "dense",
      }}
    >
      <Container size="md">
        <Text as="h1" display size="xl" gradient="primary" align="center">
          World-class Design & Dev
        </Text>
        <Text as="h1" display size="md" gradient="primary" align="center">
          Fixed price for all projects.
        </Text>

        <Button size="xl" round shadow="lg">
          Start a project
        </Button>

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
    </Box>
  );
};

export { Hero };
