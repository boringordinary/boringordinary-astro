import { ContentRenderer, Testimonial } from "@/components";

const Letter = ({ content }: any) => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-screen-sm rounded-xl border border-gray-200 bg-white p-8 shadow-xl">
        <ContentRenderer content={content} />
      </div>

      <div className="absolute top-0">
        <Testimonial />
      </div>
    </div>
  );
};

export { Letter };
