export default {
  name: "header",
  type: "object",
  title: "Header",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error("Headers must include an image."),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "_type",
    },
  },
};
