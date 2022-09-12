import MuxPlayer from "@mux/mux-player-react";
import { Text, Button, Section } from "@/components";

const Hero = () => {
  return (
    <Section size="lg">
      <div className="grid max-w-screen-xl grid-cols-2 p-8">
        <div className="flex flex-col gap-4 ">
          <Text display size="lg">
            The New Standard for Real Estate Agents
          </Text>
          <Text color="text-neutral-500" size="lg">
            Sell more, easier by cutting through the noise.
          </Text>
          <div>
            <Button variant="primary" size="lg" round shadow="lg">
              Get Started
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg">
          <MuxPlayer
            style={{ height: "100%", maxWidth: "100%" }}
            streamType="on-demand"
            playbackId="Dc8u02pLO02SbclOCuS6Hgue8EOaFRbrq8"
            metadata={{
              video_id: "strategy-call",
              video_title: "Strategy call",
              viewer_user_id: "unidentified",
            }}
          />
        </div>
      </div>
    </Section>
  );
};

export { Hero };
