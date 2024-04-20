import type { CollectionConfig } from "payload/types";

const Blocks: CollectionConfig = {
  slug: "blocks",
  access: {
    delete: () => false,
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "type",
      type: "select",
      options: [
        {
          label: "Email",
          value: "email",
        },
      ],
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "email",
      type: "text",
    },
  ],
};

export default Blocks;
