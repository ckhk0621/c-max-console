import { GlobalConfig } from "payload/types";
import BannerBlock from "../blocks/banner";
import ParagraphBlock from "../blocks/paragraph";
import ListImagesBlock from "../blocks/listImages";
import ListContentBlock from "../blocks/listContent";

const AboutUs: GlobalConfig = {
  slug: "AboutUs",
  admin: {
    group: "Pages",
  },
  access: {
    read: () => true,
  },
  label: "About Us Page",
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
                BannerBlock,
                ParagraphBlock,
                ListImagesBlock,
                ListContentBlock
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

export default AboutUs;
