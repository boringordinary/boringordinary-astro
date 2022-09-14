import { Button, Section } from "@components/index";
import { LogoReel } from "./LogoReel";

const Hero = () => {
  return (
    <Section size="xl">
      <h1 className="text-center text-5xl font-extrabold leading-snug">
        World-class Design & Dev
        <br />
        without the Headaches.
      </h1>

      <div className="mt-4 flex w-full justify-center">
        <a href="/pricing">
          <Button size="xl" round shadow="lg">
            Start a project
          </Button>
        </a>
      </div>

      <div className="flex justify-center grayscale">
        <LogoReel logos={[]} />
      </div>
    </Section>
  );
};

export { Hero };
