import { Block } from "payload/types";

const ListSupportBlock: Block = {
  slug: "listSupport",
  fields: [
    {
      name: "subTitle",
      type: "text",
    },
    {
      name: "title",
      type: "text",
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
      ],
    },
  ],
};

export default ListSupportBlock;
