import { Block } from "payload/types";

const horizontalListImagesBlock: Block = {
  slug: "horizontalListImages",
  fields: [
    {
      name: "subTitle",
      type: "text",
      localized: true,
    },
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "highlight",
      type: "text",
      localized: true,
    },
    {
      name: "content",
      type: "richText",
      localized: true,
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "link",
          relationTo: "pages",
          type: "relationship",
        },
      ],
    },
  ],
};

export default horizontalListImagesBlock;
