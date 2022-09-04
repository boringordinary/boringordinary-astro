export default {
  title: "Homepage",
  name: "homepage",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
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
  ],
};
