import { commonBlocks } from "../utils";

export default {
  title: "Two Blocks",
  name: "twoBlocks",
  type: "object",

  fields: [
    {
      title: "Title",
      name: "title",
      description: "Just to make it clear what this is for.",
      type: "string",
    },
    {
      title: "Left Blocks",
      name: "leftBlocks",
      type: "array",
      of: [...commonBlocks],
    },

    {
      title: "Right Blocks",
      name: "rightBlocks",
      type: "array",
      of: [...commonBlocks],
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "_type",
    },
  },
};
