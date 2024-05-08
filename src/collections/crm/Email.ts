import type { CollectionConfig } from "payload/types";
import { admins } from "../access/admins";
import adminsAndUser from "../access/adminsAndUser";
import { anyone } from "../access/anyone";
import { phoneRegex, emailRegex, urlRegex } from "../../utils/regex";
const News: CollectionConfig = {
  slug: "email",
  access: {
    read: () => true,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
  },
  admin: {
    useAsTitle: "fullName",
    group: "CRM",
  },
  labels: {
    singular: "Email",
    plural: "Email",
  },
  fields: [
    {
      name: "fullName",
      type: "text",
      required: true
    },
    {
      name: "countryCode",
      type: "select",
      options: [
        {
          label: "852",
          value: "852",
        },
        {
          label: "853",
          value: "853",
        },
      ],
    },
    {
      name: "phone",
      type: "text",
      // validate: async (val) => {
      //   if (!!val && !val.match(phoneRegex)) {
      //     return "Phone format not correct";
      //   }
      // },
    },
    {
      name: "email",
      type: "text",
      validate: async (val) => {
        if (!!val && !val.match(emailRegex)) {
          return "Email format not correct";
        }
      },
      required: true,
    },
    {
      name: "message",
      type: "textarea"
    },
  ],
};

export default News;
