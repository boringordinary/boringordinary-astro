import { Text, Section } from "@/components";

const features = [
  {
    pre: "Bi-annually",
    title: "New Features",
    tagline: "Innovative ways to engage, interact, and convert visitors.",
  },
  {
    pre: "Weekly",
    title: "UI Improvements",
    tagline: "Tweaks on aesthetics and UX to better tell your story.",
  },
  {
    pre: "Quarterly",
    title: "Content Refresh",
    tagline:
      "New sections, video, and messaging to stand out in the changing market.",
  },
];

const EvolvingSection = () => {
  return (
    <Section>
      <div>
        <div className="mx-auto flex max-w-screen-sm flex-col items-center gap-4 text-center">
          <img src="/images/boomerang.png" className="h-24" />
          <div className="text-left">
            <Text display lineHeight="snug" color="neutral-800">
              A site that's
            </Text>
            <div>
              <Text display lineHeight="snug" size="lg" gradient="primary">
                Always evolving,
              </Text>
            </div>
            <div className="ml-12">
              <Text display lineHeight="snug" size="lg" gradient="primary">
                Always ahead of the curve
              </Text>
            </div>
          </div>
          <Text display size="sm" align="left">
            As your industry changes, your content and design must keep up. As
            the web evolves, your tech should stay ahead of the curve.
          </Text>
        </div>
        <div className="mx-auto mt-8 grid max-w-screen-lg grid-cols-3 gap-4">
          {features.map(({ title, pre, tagline }) => (
            <div key={title} className="text-left">
              <Text display size="xs">
                {pre}
              </Text>
              <Text display size="sm" gradient="secondary">
                {title}
              </Text>
              <Text weight="semibold">{tagline}</Text>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export { EvolvingSection };
