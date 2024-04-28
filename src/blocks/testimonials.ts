import { Block } from "payload/types";

const TestimonialsBlock: Block = {
  slug: "testimonials",
  fields: [
    {
      name: "subTitle",
      type: "text",
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "list",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "content",
          type: "richText"
        }
      ]
    }
  ],
};

export default TestimonialsBlock;
