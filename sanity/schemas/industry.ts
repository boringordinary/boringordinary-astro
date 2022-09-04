import { commonBlocks } from "../utils";

export default {
  title: "Industry",
  name: "industry",
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
      title: "Header",
      name: "header",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "string",
        },
        {
          title: "Button Text",
          name: "buttonText",
          type: "string",
        },
      ],
    },
    {
      title: "Companies",
      name: "companies",
      type: "object",
      fields: [
        {
          title: "Logos",
          name: "logos",
          type: "array",
          of: [
            {
              type: "image",
            },
          ],
        },
      ],
    },
    {
      title: "Services",
      name: "services",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "string",
        },
        {
          title: "Services",
          name: "services",
          type: "array",
          of: [{ type: "reference", to: [{ type: "service" }] }],
        },
      ],
    },
    {
      title: "Featured Work",
      name: "featuredWork",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "story" }],
        },
      ],
    },

    {
      title: "Blocks",
      name: "blocks",
      type: "array",
      of: [...commonBlocks],
    },
  ],
};
