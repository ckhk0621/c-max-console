import { Block } from "payload/types";

const IntroductionBlock: Block = {
  slug: "introduction",
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
        name: "link",
        relationTo: "pages",
        type: "relationship",
    }
  ],
};

export default IntroductionBlock;
