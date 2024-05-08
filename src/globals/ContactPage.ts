import { GlobalConfig } from "payload/types";

const ContactPage: GlobalConfig = {
  slug: "contactPage",
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
              name: "contentTitle",
              type: "text",
              localized: true,
            },
            {
              name: "content",
              type: "richText",
              localized: true,
            },
            {
              name: "address",
              type: "array",
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
              ]
            },
            {
              name: "additionalInfo",
              type: "richText",
              localized: true,
            },
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

export default ContactPage;
