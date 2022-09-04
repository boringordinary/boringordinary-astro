export default {
  title: "FAQ Page",
  name: "faq",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Questions and Answers",
      name: "questionAnswers",
      type: "array",
      blockTypes: ["questionAnswer"],
      of: [
        {
          type: "questionAnswer",
        },
      ],
    },
    {
      title: "Team",
      name: "team",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "person" }],
        },
      ],
    },
  ],
};
