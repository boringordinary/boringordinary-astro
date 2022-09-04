export default {
  name: "quote",
  title: "Quote",
  type: "object",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "by",
      title: "By",
      type: "reference",
      to: [{ type: "person" }],
    },
  ],
  preview: {
    select: {
      title: "content",
      subtitle: "by.name",
      media: "by.avatar",
    },
    prepare(selection) {
      return {
        title: "Quote",
        subtitle: `By ${selection.subtitle}`,
        media: selection.media,
      };
    },
  },
};
