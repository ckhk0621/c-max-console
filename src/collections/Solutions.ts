import type { CollectionConfig } from "payload/types";
import { admins } from "./access/admins";
import adminsAndUser from "./access/adminsAndUser";
import { anyone } from "./access/anyone";

const Solutions: CollectionConfig = {
  slug: "solutions",
  access: {
    read: () => true,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
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
          label: "solution",
          value: "solution",
        },
      ],
      admin: {
        position: "sidebar",
        readOnly: true,
        hidden: true,
      },
      defaultValue: "solution",
    },
    {
      name: "file",
      type: "upload",
      relationTo: "media",
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
      type: "richText",
    },
  ],
};

export default Solutions;
