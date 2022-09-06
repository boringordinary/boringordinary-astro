import { styled } from "@styles/index";
import { Box, Text, Button } from "@/components";

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

const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  border: "$divider 0.5px solid",
  br: "$md",
  width: "100%",
});

const Card = styled("div", {
  p: "$6",
  border: "$divider 0.5px solid",
});

const PricingCard = ({ tiers }: Props) => {
  return (
    <Wrapper>
      {tiers.map(({ title, description, priceMonthly, features }) => {
        const priceText = `${priceMonthly}`;

        return (
          <Card key={title}>
            <Text display size="sm" align="center">
              {title}
            </Text>

            <Text align="center">{description}</Text>

            <Box css={{ display: "flex", justifyContent: "center", pt: "$4" }}>
              <Text display css={{ display: "flex", alignItems: "baseline" }}>
                <Text
                  as="sup"
                  size="sm"
                  weight="600"
                  color="neutral"
                  css={{ mr: "$1", alignSelf: "flex-start" }}
                >
                  USD{" "}
                  <Text color="dark" as="span" size="sm" weight="600">
                    $
                  </Text>
                </Text>

                <span>{priceText}</span>

                <Text
                  as="sub"
                  size="sm"
                  weight="600"
                  color="neutral"
                  css={{ ml: "$1", justifySelf: "flex-end" }}
                >
                  /mo
                </Text>
              </Text>
            </Box>

            {features.map(({ title, features }, index) => (
              <Box key={`featureList-${index}`}>
                {title && (
                  <Text display size="xs">
                    {title}
                  </Text>
                )}

                <Box>
                  {features.map(({ title, value }, index) => (
                    <Box
                      key={`feature-${title}-${index}`}
                      css={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Text display size="xs">
                        {title}
                      </Text>
                      <Text>{value}</Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}

            <Button shadow="lg" size="lg" fullWidth css={{ mt: "$4" }}>
              Get Started
            </Button>
          </Card>
        );
      })}
    </Wrapper>
  );
};

export { PricingCard };
