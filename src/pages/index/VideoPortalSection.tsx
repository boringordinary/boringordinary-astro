import { Section, Text } from "@components/index";

const VideoPortalSection = () => {
  return (
    <Section>
      <div className="mx-auto my-8 flex max-w-screen-md">
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src="/images/portal.png" className="h-24 w-24" />
            <Text display size="lg" lineHeight="snug" gradient="primary">
              Video Portal
            </Text>
          </div>

          <Text size="xl">
            Greet your visitors with a pre-recorded video that shows your face
            and makes it easy for them to chat with you. Conveniently reply to
            visitors with the app or SMS.
            <br />
            <br />
            Combined with Link Magic, you can personalize your video to
            different types of visitors.
          </Text>
        </div>
      </div>
    </Section>
  );
};

export { VideoPortalSection };
