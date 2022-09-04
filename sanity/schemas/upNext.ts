export default {
  title: "Up Next",
  name: "upNext",
  type: "object",

  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Button",
      name: "button",
      type: "object",
      fields: [
        {
          title: "Label",
          name: "label",
          type: "string",
        },
        {
          title: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
  ],
};
