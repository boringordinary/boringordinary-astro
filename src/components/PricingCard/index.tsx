import { Text, Button } from "@/components";

interface FeatureList {
  title?: string;
  features: Feature[];
}

interface Feature {
  title: string;
  value: string;
}

export interface Tier {
  title: string;
  prominent?: boolean;
  description: string;
  priceMonthly: number;
  features: FeatureList[];
}

export type Tiers = Tier[];

interface Props {
  tiers: Tiers;
}

const PricingCard = ({ tiers }: Props) => {
  return (
    <div className="width-full grid grid-cols-3 rounded-md">
      {tiers.map(({ title, description, priceMonthly, features }) => {
        const priceText = `${priceMonthly}`;

        return (
          <div className="rounded-md border border-neutral-200 p-6" key={title}>
            <p className="text-center text-3xl font-bold">{title}</p>

            <p className="text-lg text-neutral-600">{description}</p>

            <div className="my-4 flex justify-center pt-4">
              <div className="align-baseline text-3xl font-bold">
                <sup className="mr-1 text-base">
                  USD{" "}
                  <Text color="dark" as="span" size="sm">
                    $
                  </Text>
                </sup>

                <span>{priceText}</span>

                <sub className="ml-1 justify-end text-base">/mo</sub>
              </div>
            </div>

            <div className="mt-6 mb-4">
              {features.map(({ title, features }, index) => (
                <div key={`featureList-${index}`}>
                  {title && (
                    <Text display size="xs">
                      {title}
                    </Text>
                  )}

                  <div className="flex flex-col gap-2">
                    {features.map(({ title, value }, index) => (
                      <div
                        className="flex justify-between"
                        key={`feature-${title}-${index}`}
                      >
                        <p className="text-xl font-semibold">{title}</p>
                        <p className="text-xl">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Button shadow="lg" size="lg" fullWidth css={{ mt: "$4" }}>
              Get Started
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export { PricingCard };
