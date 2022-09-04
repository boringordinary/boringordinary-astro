import { commonBlocks } from "../utils";

export default {
  title: "Approach",
  name: "approach",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
    },
    {
      title: "Blocks",
      name: "blocks",
      type: "array",
      of: [...commonBlocks],
    },
  ],
};
