import { Block, CollectionConfig } from "payload/types";

const ListProductsBlock: Block = {
  slug: "listProducts",
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "enableCategoryFilter",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};

export default ListProductsBlock;
