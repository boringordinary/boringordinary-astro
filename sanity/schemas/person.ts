export default {
  name: "person",
  type: "document",
  title: "Person",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "avatar",
      type: "image",
      title: "Avatar",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "avatar",
    },
  },
};
