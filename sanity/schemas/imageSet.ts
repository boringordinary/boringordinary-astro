export default {
  title: "Image Set",
  name: "imageSet",
  description: "Collection of images for a slider",
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
  preview: {
    select: {
      title: "Image Slider",
    },
  },
};
