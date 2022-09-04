import { commonDocumentTypes } from "../utils";

export default {
  title: "Comparison Points",
  name: "comparisonPoints",
  type: "object",

  fields: [
    {
      title: "Positives",
      name: "positives",
      type: "object",

      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Content",
          name: "content",
          type: "array",
          of: [{ type: "block" }, { type: "image" }],
        },
      ],
    },
    {
      title: "Negatives",
      name: "negatives",
      type: "object",

      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Content",
          name: "content",
          type: "array",
          of: [{ type: "block" }, { type: "image" }],
        },
      ],
    },
  ],

  preview: {
    select: {
      positives: "positives.title",
      negatives: "negatives.title",
    },
    prepare(selection) {
      return {
        title: `${selection.positives} vs ${selection.negatives}`,
      };
    },
  },
};
