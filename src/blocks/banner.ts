import { Block, CollectionConfig } from "payload/types";

const BannerBlock: Block = {
  slug: "banner", // required
  //   imageURL: 'https://google.com/path/to/image.jpg',
  //   imageAltText: 'A nice thumbnail image to show what this block looks like',
  //   interfaceName: 'QuoteBlock', // optional
  fields: [
    // required
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "title",
      type: "text",
    },
  ],
};

export default BannerBlock;
