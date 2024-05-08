import { Block } from "payload/types";

const faqBlock: Block = {
  slug: "faq",
  fields: [
    {
      name: "list",
      type: "array",
      fields: [
        {
          name: "question",
          type: "text",
          localized: true,
        },
        {
          name: "answer",
          type: "richText",
          localized: true,
        },
      ],
    },
  ],
};

export default faqBlock;
