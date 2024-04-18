import path from 'path';
import type { CollectionConfig } from 'payload/types';
import dotenv from 'dotenv';

dotenv.config();

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: "Others"
  },
  access: {
    create: () => true,
    // Payload's access control functions apply to files also, meaning you can permit or deny file downloads easily
    read: () => true,
    delete: () => true,
  },
  upload: {
    staticURL: 'https://c-max-bucket.s3.ap-east-1.amazonaws.com',
    // staticDir tell Payload where to store files to and allows them to be served
    staticDir: path.resolve(__dirname, "../../media"),
    // adminThumbnail: "small",
    adminThumbnail: ({ doc }) => {
      return `https://c-max-bucket.s3.ap-east-1.amazonaws.com/${doc.filename}`
    },
    disableLocalStorage: true,

    imageSizes: [
      {
        height: 400,
        width: 400,
        crop: 'center',
        name: 'thumbnail',
      },
      {
        width: 900,
        height: 450,
        crop: 'center',
        name: 'sixteenByNineMedium',
      },
    ],
  },
  fields: [{
    name: 'alt',
    type: 'text',
  }, {
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
    hasMany: false
  },],
};

export default Media;
