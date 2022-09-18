import { Button, DiffusedGradientBg, Section } from "@components/index";

const Hero = () => {
  return (
    <DiffusedGradientBg src="https://cdn.sanity.io/images/qnrs6r79/production/14896f3b2cab11551308a94c1989b8bab5009ed0-5600x3550.png?h=400">
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
      </Section>
    </DiffusedGradientBg>
  );
};

export { Hero };
