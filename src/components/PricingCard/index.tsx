import { toPlainText } from "@portabletext/react";
import { Text, Button, Divider } from "@/components";

interface Feature {
  title: string;
  value: any;
}

export interface Tier {
  title: string;
  prominent?: boolean;
  tagline: string;
  price: number;
  interval: 0 | 30 | 365;
  features: Feature[];
}

export type Tiers = Tier[];

interface Props {
  tiers: Tiers;
}

const PricingCard = ({ tiers }: Props) => {
  return (
    <>
      <div className={`grid grid-cols-${tiers.length} w-full gap-6`}>
        {tiers.map(
          ({ title, tagline, prominent, price, features, interval }) => {
            const priceText = `${price}`;
            const intervalText = interval === 30 ? "mo" : "yr";

            return (
              <div
                className="duration-400 relative cursor-pointer border-2 border-neutral-100 bg-white p-6 shadow-md transition hover:border-violet-900 hover:shadow-lg sm:rounded-3xl"
                key={title}
              >
                {prominent && (
                  <div className="absolute top-0 right-4 translate-y-[-50%] rounded-full bg-violet-700 px-3 py-1 text-sm">
                    <p className="text-white">Most popular</p>
                  </div>
                )}
                <p className="mb-1 text-2xl font-semibold text-violet-900">
                  {title}
                </p>

                <p className="text-lg text-gray-500">{tagline}</p>

                <div className="my-4 border border-slate-200 bg-slate-50 p-4 shadow-sm sm:rounded-2xl">
                  <div className="flex">
                    <div className="flex justify-center p-4">
                      <div className="align-baseline text-4xl font-semibold">
                        <sup className="mr-1 text-base">
                          USD{" "}
                          <Text color="dark" as="span" size="sm">
                            $
                          </Text>
                        </sup>

                        <span>{priceText}</span>

                        {interval !== 0 && (
                          <sub className="ml-1 justify-end text-base">
                            /{intervalText}
                          </sub>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <span className="font-medium">
                        or $14999
                        <br />
                        one-time
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button shadow="lg" size="lg" fullWidth>
                      Select Plan
                    </Button>
                  </div>
                </div>

                <Divider />

                <div className="mt-6 mb-4">
                  <div className="flex flex-col gap-2">
                    {features.map(({ title, value }, index) => (
                      <div
                        className="flex justify-between"
                        key={`feature-${title}-${index}`}
                      >
                        <p className="text-xl font-semibold">{title}</p>
                        <p className="text-xl">{toPlainText(value)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export { PricingCard };
