import type { CollectionConfig } from "payload/types";
import { admins } from "./access/admins";
import adminsAndUser from "./access/adminsAndUser";
import { anyone } from "./access/anyone";
import { phoneRegex, emailRegex, urlRegex } from "../utils/regex";

const Teams: CollectionConfig = {
  slug: "teams",
  access: {
    read: () => true,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "name",
      type: "text",
      localized: true,
    },
    {
      label: "email",
      name: "email",
      type: "text",
      validate: async (val) => {
        if (!!val && !val.match(emailRegex)) {
          return "Email format not correct";
        }
      },
    },
    {
      label: "phone",
      name: "phone",
      type: "text",
      validate: async (val) => {
        if (!!val && !val.match(phoneRegex)) {
          return "Phone format not correct";
        }
      },
    },
    {
      name: "slug",
      type: "text",
      admin: {
        position: "sidebar",
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            const value = siblingData.title
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/[^\w-]+/g, "");
            return value;
          },
        ],
      },
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "description",
      type: "richText",
      localized: true,
    },
  ],
};

export default Teams;
