import { GlobalConfig } from "payload/types";
import BannerBlock from "../blocks/banner";
import IntroductionBlock from "../blocks/introduction";
import ListContentBlock from "../blocks/listContent";
import PromotionBlock from "../blocks/promotion";
import TwoColumnContentBlock from "../blocks/twoColumnContent";
import TestimonialsBlock from "../blocks/testimonials";
import HorizontalListImagesBlock from "../blocks/horizontalListImages";

const Home: GlobalConfig = {
  slug: "home",
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
                BannerBlock,
                IntroductionBlock,
                ListContentBlock,
                PromotionBlock,
                TwoColumnContentBlock,
                TestimonialsBlock,
                HorizontalListImagesBlock
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

export default Home;
