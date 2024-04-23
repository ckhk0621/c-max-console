import type { CollectionConfig } from "payload/types";
import { admins } from './access/admins'
import adminsAndUser from './access/adminsAndUser'
import { anyone } from './access/anyone'

const Products: CollectionConfig = {
  slug: "products",
  access: {
    read: ()=> true,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
        name: "category",
        type: "relationship",
        relationTo: "categories",
        admin: {
          position: "sidebar",
        },
        hasMany: true,
      },
    {
      name: "type",
      type: "select",
      options: [
        {
          label: "product",
          value: "product",
        },
      ],
      admin: {
        position: "sidebar",
        readOnly: true,
        hidden: true,
      },
      defaultValue: "product",
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "slug",
      type: "text",
      admin: {
        position: "sidebar",
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            const value = siblingData.title
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/[^\w-]+/g, "");
            return value;
          },
        ],
      },
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "content",
      type: "richText"
    },
  ],
};

export default Products;
