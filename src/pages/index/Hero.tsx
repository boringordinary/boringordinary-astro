import { Button, Text, Container, Box, ImageClip } from "@components/index";
import { LogoReel } from "./LogoReel";

const Hero = () => {
  return (
    <Box
      css={{
        maxWidth: "$md",
        mx: "auto",
        display: "grid",
        py: "$20",
        gridAutoFlow: "dense",

        "@sm": {
          gridTemplateColumns: "1fr 1fr",
        },
      }}
    >
      <Container size="md">
        <Text as="h1" display size="lg" gradient="primary">
          We craft websites that take your online business to the next level.
        </Text>

        <Button size="xl" round shadow="lg">
          Get Started
        </Button>

        <LogoReel logos={[]} />
      </Container>

      <ImageClip src="/images/homepage/local-owner.jpeg" width="100%" />
    </Box>
  );
};

export { Hero };
