import { Block } from "payload/types";

const ParagraphBlock: Block = {
  slug: "paragraph",
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "content",
      type: "richText",
      localized: true,
    },
  ],
};

export default ParagraphBlock;
