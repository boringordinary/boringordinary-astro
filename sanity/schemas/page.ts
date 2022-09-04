import { commonBlocks } from "../utils";

export default {
  title: "Page",
  name: "page",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      title: "Blocks",
      name: "blocks",
      type: "array",
      of: [...commonBlocks],
    },
  ],
};
