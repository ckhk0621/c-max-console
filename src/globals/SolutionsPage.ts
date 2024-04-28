import { GlobalConfig } from "payload/types";

const SolutionsPage: GlobalConfig = {
  slug: "solutionsPage",
  admin: {
    group: "Pages",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "content",
          label: "CONTENT",
          fields: [
            {
              name: "title",
              type: "text",
              localized: true,
            },
            {
              name: "content",
              type: "richText",
              localized: true,
            },
            {
              name: "file",
              type: "relationship",
              relationTo: "media",
            }
          ],
        },
        {
          name: "seo",
          label: "SEO",
          fields: [
            {
              name: "title",
              type: "text",
              localized: true,
            },
          ],
        },
        {
          name: "others",
          label: "Others",
          fields: [
            {
              name: "displayNewsletter",
              type: "checkbox",
              defaultValue: false,
            },
          ],
        },
      ],
    },
  ],
};

export default SolutionsPage;
