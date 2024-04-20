import { GlobalConfig } from "payload/types";
import BannerBlock from "../blocks/banner";
import IntroductionBlock from "../blocks/introduction";
import ListContentBlock from "../blocks/listContent";
import PromotionBlock from "../blocks/promotion";

const Setting: GlobalConfig = {
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
                PromotionBlock
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
      ],
    },
  ],
};

export default Setting;
