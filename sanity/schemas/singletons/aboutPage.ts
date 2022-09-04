import { commonBlocks } from "../../utils";

export default {
  title: "About Page",
  name: "about",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Blocks",
      name: "blocks",
      type: "array",
      of: [...commonBlocks],
    },
    {
      title: "Team",
      name: "people",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "people" }],
        },
      ],
    },
  ],
};
