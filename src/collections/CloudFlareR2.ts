import path from "path";
import type { CollectionConfig } from "payload/types";
import dotenv from "dotenv";

dotenv.config();

const Media: CollectionConfig = {
  slug: "cloudFlareR2",
  admin: {
    group: "Others",
  },
  access: {
    create: () => true,
    // Payload's access control functions apply to files also, meaning you can permit or deny file downloads easily
    read: () => true,
    delete: () => true,
  },
  upload: {
    staticURL: "https://bucket.ideastime.dev",
    staticDir: path.resolve(__dirname, "../../media"),
    disableLocalStorage: true,
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
      {
        name: "large",
        width: 1920,
        height: undefined,
        position: "centre",
      },
    ],
  },
  fields: [
    {
      name: "status",
      type: "select",
      options: [
        {
          label: "Public",
          value: "public",
        },
        {
          label: "Private",
          value: "private",
        },
      ],
    },
    {
      label: {
        zh: "發佈者",
        cn: "發佈者",
        en: "Creator",
      },
      type: "relationship",
      relationTo: "users",
      name: "creator",
      admin: {
        position: "sidebar",
      },
      hasMany: false,
    },
  ],
};

export default Media;
