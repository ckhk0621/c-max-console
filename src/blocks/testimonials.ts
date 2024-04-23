import { Block } from "payload/types";

const TestimonialsBlock: Block = {
  slug: "testimonials",
  fields: [
    {
      name: "client",
      type: "text",
    },
    {
      name: "content",
      type: "richText"
    },
  ],
};

export default TestimonialsBlock;
