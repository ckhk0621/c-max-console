import type { CollectionConfig } from "payload/types";
import { admins } from "./access/admins";
import adminsAndUser from "./access/adminsAndUser";
import { anyone } from "./access/anyone";

const Calendar: CollectionConfig = {
  slug: "calendar",
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
      required: true,
      localized: true,
    },
    {
      name: "staff",
      type: "relationship",
      relationTo: "users",
      filterOptions: {
        roles: {
          in: ["staff", "admin"],
        },
      },
      required: true,
    },
    {
      name: "startDateTime",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "endDateTime",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          label: "Public",
          value: "public",
        },
        {
          label: "Private",
          value: "private",
        },
      ],
    },
    {
      name: "description",
      type: "richText",
      localized: true,
    },
  ],
};

export default Calendar;
