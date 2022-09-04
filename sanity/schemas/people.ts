export default {
  title: "People",
  name: "people",
  type: "document",

  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      title: "Members",
      name: "people",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "person",
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
