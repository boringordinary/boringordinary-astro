import { Button, DiffusedGradientBg, Section } from "@components/index";

const Hero = () => {
  return (
    <DiffusedGradientBg src="https://cdn.sanity.io/images/qnrs6r79/production/24b6ee6f74c705bbc0c88ab534364459aed85ce2-5220x2588.jpg?h=400">
      <Section size="xl">
        <h1 className="text-center text-5xl font-extrabold leading-snug">
          The Digital Agency of the Future
        </h1>
        <p className="mt-4 text-center text-2xl font-medium leading-normal text-gray-600">
          Get a world-class website that boosts your business,
          <br />
          made affordable by a monthly payment model.
        </p>

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
