export default {
  title: "Question and Answer",
  name: "questionAnswer",
  type: "object",
  fields: [
    {
      title: "Question",
      name: "question",
      type: "string",
    },
    {
      title: "Answer",
      name: "answer",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
