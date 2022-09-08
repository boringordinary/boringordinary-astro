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
    <Section size="xl" className="mx-auto flex max-w-screen-md justify-center">
      <Container
        size="md"
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 className="text-center text-5xl">
          World-class Design & Dev
          <br />
          without the Headaches.
        </h1>

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
