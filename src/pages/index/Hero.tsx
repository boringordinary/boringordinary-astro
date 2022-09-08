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
    <section className="mx-auto flex max-w-screen-md justify-center py-16">
      <Container
        size="md"
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 className="text-center text-5xl font-extrabold leading-snug">
          World-class Design & Dev
          <br />
          without the Headaches.
        </h1>

        <div className="mt-4 flex w-full justify-center">
          <Button size="xl" round shadow="lg">
            Start a project
          </Button>
        </div>

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
    </section>
  );
};

export { Hero };
