import { Button, Text, DiffusedGradientBg, Section } from "@components/index";

const Hero = () => {
  return (
    <DiffusedGradientBg src="https://cdn.sanity.io/images/qnrs6r79/production/24b6ee6f74c705bbc0c88ab534364459aed85ce2-5220x2588.jpg?h=400">
      <Section size="xl">
        <h1 className="text-center text-5xl font-extrabold leading-tight">
          Next-Gen Websites
          <br />
          Made to Convert
        </h1>
        <Text weight="medium" align="center" size="lg" color="neutral-700">
          Everything you need in a world-class frontend
          <br />
          as a monthly subscription plan.
        </Text>

        <div className="mt-4 flex w-full justify-center">
          <a href="/pricing">
            <Button size="xl" round shadow="lg">
              Watch the Video
            </Button>
          </a>
        </div>
      </Section>
    </DiffusedGradientBg>
  );
};

export { Hero };
