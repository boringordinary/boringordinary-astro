import { styled } from "@styles/index";
import { Box, Text, Button } from "@/components";

interface FeatureList {
  title: string;
  features: Feature[];
}

interface Feature {
  title: string;
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
  border: "$divider 0.5px solid",
  br: "$md",
});

const Card = styled("div", {
  p: "$4",
  border: "$divider 0.5px solid",
});

const PricingCard = ({ tiers }: Props) => {
  return (
    <Wrapper
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {tiers.map(({ title, description, priceMonthly, features }) => {
        const priceText = `${priceMonthly}`;

        return (
          <Card>
            <Text display size="sm" align="center">
              {title}
            </Text>

            <Text align="center">{description}</Text>

            <Box css={{ display: "flex", justifyContent: "center", pt: "$4" }}>
              <Text
                as="sup"
                size="sm"
                weight="600"
                color="neutral"
                css={{ mr: "$1" }}
              >
                USD{" "}
                <Text color="dark" as="span" size="sm" weight="600">
                  $
                </Text>
              </Text>
              <Text display>{priceText}</Text>
            </Box>

            {features.map(({ title, features }) => (
              <Box>
                <Text display size="xs">
                  {title}
                </Text>

                {features.map(({ title }) => (
                  <Text>{title}</Text>
                ))}
              </Box>
            ))}

            <Button shadow="lg">Get Started</Button>
          </Card>
        );
      })}
    </Wrapper>
  );
};

export { PricingCard };
