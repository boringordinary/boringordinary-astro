import MuxPlayer from "@mux/mux-player-react";

interface Props {
  // Mux player ID
  src: string;
  title: string;
}

const VideoWidget = ({ title, src }: Props) => {
  return (
    <div className="fixed bottom-8 right-8">
      <div className="border-divider overflow-hidden rounded-2xl shadow-xl">
        <MuxPlayer
          style={{ height: "100%", maxWidth: "100%" }}
          streamType="on-demand"
          playbackId={src}
          metadata={{
            video_title: title,
            viewer_user_id: "unidentified",
          }}
        />
      </div>
    </div>
  );
};

export { VideoWidget };
