export default {
  title: "Screen",
  name: "screen",
  type: "object",

  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Caption",
      name: "caption",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "caption",
      media: "image",
    },
  },
};
