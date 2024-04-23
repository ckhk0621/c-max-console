import { Block, CollectionConfig } from "payload/types";

const ListImagesBlock: Block = {
  slug: "listImages",
  fields: [
    {
      name: "title",
      type: "text",
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
        }
      ]
    },
  ],
};

export default ListImagesBlock;
