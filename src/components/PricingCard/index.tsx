import { Text, Button, Divider } from "@/components";

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
    <div className={`grid grid-cols-${tiers.length} w-full gap-6`}>
      {tiers.map(({ title, description, priceMonthly, features }) => {
        const priceText = `${priceMonthly}`;

        return (
          <div
            className="duration-400 cursor-pointer rounded-lg border-2 border-neutral-100 p-6 shadow-md transition-all hover:border-violet-900 hover:shadow-lg"
            key={title}
          >
            <p className="border- mb-1 text-center text-3xl font-bold text-violet-900">
              {title}
            </p>

            <p className="text-center text-lg text-gray-500">{description}</p>

            <div className="my-4 flex justify-center pt-4">
              <div className="align-baseline text-4xl font-bold">
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

            <div className="flex justify-center py-6">
              <Button shadow="lg" size="lg" round>
                Select Plan
              </Button>
            </div>

            <Divider />

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
          </div>
        );
      })}
    </div>
  );
};

export { PricingCard };
