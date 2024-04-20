import { Block } from "payload/types";

const PromotionBlock: Block = {
  slug: "promotion",
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
    {
        name: "button",
        type: "text",
        localized: true,
    },
    {
        name: "link",
        relationTo: "pages",
        type: "relationship",
    }
  ],
};

export default PromotionBlock;
