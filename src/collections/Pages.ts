import type { CollectionConfig } from "payload/types";

const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    group: "Pages",
  },
  fields: [
    {
        name: "title",
        type: "text",
        required: true,
        localized: true,
      },
      {
        name: "slug",
        type: "text",
        required: true,
        admin: {
          readOnly: true,
        }
      },
  ],
};

export default Pages;
