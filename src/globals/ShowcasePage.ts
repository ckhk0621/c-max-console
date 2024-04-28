import { GlobalConfig } from "payload/types";
import ParagraphBlock from "../blocks/paragraph";
import ListImagesBlock from "../blocks/listImages";
import TestimonialsBlock from "../blocks/testimonials";
import ListSupportBlock from "../blocks/listSupport";

const ShowcasePage: GlobalConfig = {
  slug: "ShowcasePage",
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
              name: "layout",
              type: "blocks",
              blocks: [
                ParagraphBlock,
                ListImagesBlock,
                TestimonialsBlock,
                ListSupportBlock
              ],
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

export default ShowcasePage;
