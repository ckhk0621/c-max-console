import { Block } from "payload/types";

const ListContentBlock: Block = {
  slug: "listContent",
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
        name: "list",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          localized: true,
        },
        {
          name: "link",
          relationTo: "pages",
          type: "relationship",
        },
        {
          name: "description",
          type: "richText",
          localized: true,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        }
      ]
    }
  ],
};

export default ListContentBlock;
