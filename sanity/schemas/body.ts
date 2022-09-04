export default {
  name: "body",
  title: "Body",
  type: "object",
  fields: [
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
