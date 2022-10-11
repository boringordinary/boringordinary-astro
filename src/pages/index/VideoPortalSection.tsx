import { Section, Text } from "@/components";

const VideoPortalSection = () => {
  return (
    <Section>
      <div className="mx-auto my-8 grid max-w-screen-md">
        <div className="flex items-center justify-center">
          <img src="/images/portal.png" className="h-24 w-24" />
          <Text display size="lg" lineHeight="snug" gradient="primary">
            Video Portal
          </Text>
        </div>

        <div></div>

        <Text display size="sm">
          Greet your visitors with a pre-recorded video that shows your face and
          makes it easy for them to chat with you. Conveniently reply to
          visitors with the app or SMS.
          <br />
          <br />
          Combined with Link Magic, you can personalize your video to different
          types of visitors.
        </Text>
      </div>
    </Section>
  );
};

export { VideoPortalSection };
