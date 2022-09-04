export default {
  name: "image",
  title: "Image",
  type: "image",
  fields: [
    {
      title: "Caption",
      name: "caption",
      type: "string",
    },
    {
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "caption",
    },
  },
};
