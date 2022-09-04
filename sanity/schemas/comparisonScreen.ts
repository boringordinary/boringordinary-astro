export default {
  title: "Comparison Screen",
  name: "comparisonScreen",
  type: "document",

  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Before",
      name: "before",
      type: "screen",
    },
    {
      title: "After",
      name: "after",
      type: "screen",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "after",
    },
    prepare(selection) {
      return {
        title: `${selection.title} comparison`,
      };
    },
  },
};
