import { Block } from "payload/types";

const twoColumnContentBlock: Block = {
  slug: "twoColumnContent",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "imagePosition",
      type: "select",
      defaultValue: "left",
      options: [
        {
          label: "Left",
          value: "left",
        },
        {
          label: "Right",
          value: "right",
        },
      ],
    },
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
      name: "button",
      type: "text",
      localized: true,
    },
    {
      name: "link",
      relationTo: "pages",
      type: "relationship",
    },
  ],
};

export default twoColumnContentBlock;
