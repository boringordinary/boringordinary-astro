import { Button, Text, Container, Box } from "@components/index";

const Hero = () => {
  return (
    <Box
      css={{
        maxWidth: "$md",
        mx: "auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        py: "$20",
      }}
    >
      <Container size="md">
        <Text as="h1" size="xl4" gradient="primary">
          We craft websites that take your online business to the next level.
        </Text>

        <Button size="xl" round>
          Chat with Us
        </Button>
      </Container>
    </Box>
  );
};

export { Hero };
