import { ContentRenderer } from "@/components";

const Letter = ({ content }: any) => {
  return (
    <div className="relative">
      <div className="z-10 mx-auto max-w-screen-sm rounded-xl border border-gray-200 bg-white p-8 shadow-xl">
        <ContentRenderer content={content} />
      </div>

      <div className="absolute z-0"></div>
    </div>
  );
};

export { Letter };
