export default {
  title: "Features",
  name: "features",
  type: "object",

  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Tagline",
      name: "tagline",
      type: "string",
    },
    {
      name: "features",
      type: "array",
      of: [
        {
          title: "Feature",
          name: "feature",
          type: "object",

          fields: [
            {
              title: "Icon",
              name: "icon",
              type: "image",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              title: "Description",
              name: "description",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
