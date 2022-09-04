export default {
  name: "service",
  type: "document",
  title: "Service",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "tagline",
      type: "string",
      title: "Tagline",
      description: "Keep this short.",
    },
    {
      title: "Icon",
      name: "icon",
      type: "image",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
    },
    // {
    //   title: "Video",
    //   type: "video",
    //   name: "video",
    // },
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
      ],
    },
    {
      title: "Examples",
      name: "examples",
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
          title: "Items",
          name: "items",
          type: "array",
          of: [
            {
              type: "image",
              fields: [{ title: "Caption", name: "caption", type: "string" }],
            },
          ],
        },
      ],
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Our process",
      name: "process",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Steps",
          name: "steps",
          type: "array",
          of: [
            {
              title: "step",
              name: "step",
              type: "object",
              fields: [
                { title: "Title", name: "title", type: "string" },
                { title: "Description", name: "description", type: "text" },
                { title: "Timeframe", name: "timeframe", type: "string" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "FAQ",
      name: "faq",
      type: "array",
      blockTypes: ["questionAnswer"],
      of: [
        {
          type: "questionAnswer",
        },
      ],
    },
  ],
};
