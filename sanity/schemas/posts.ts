import { commonDocumentTypes } from "../utils";

export default {
  title: "Post",
  name: "post",
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
      title: "Category",
      name: "category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
    {
      title: "Blocks",
      name: "blocks",
      type: "array",
      of: commonDocumentTypes,
    },
  ],
};
