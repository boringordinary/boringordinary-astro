import { commonBlocks } from "../utils";

export default {
  name: "industryPost",
  type: "document",
  title: "Industry Post",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
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
    {
      title: "Icon",
      name: "icon",
      type: "image",
    },
  ],
};
