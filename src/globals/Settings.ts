import { GlobalConfig } from "payload/types";
import { phoneRegex, emailRegex, urlRegex } from "../utils/regex";

const Setting: GlobalConfig = {
  slug: "settings",
  label: "Settings",
  admin: {
    group: "Setting",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "website",
          label: "Website",
          fields: [
            {
              label: "name",
              name: "name",
              type: "text",
              localized: true,
            },
            {
              name: "logo",
              label: "logo",
              type: "upload",
              relationTo: "media",
            },
            // {
            //   name: "logoMobile",
            //   label: "logoMobile",
            //   type: "upload",
            //   relationTo: "media",
            // },
          ],
        },
        {
          name: "socials",
          label: "Socials",
          fields: [
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
              label: "instagram",
              name: "instagram",
              type: "text",
              validate: async (val) => {
                if (!!val && !val.match(urlRegex)) {
                  return "URL format not correct";
                }
              },
            },
            {
              label: "facebook",
              name: "facebook",
              type: "text",
              validate: async (val) => {
                if (!!val && !val.match(urlRegex)) {
                  return "URL format not correct";
                }
              },
            },
            {
              label: "youtube",
              name: "youtube",
              type: "text",
              validate: async (val) => {
                if (!!val && !val.match(urlRegex)) {
                  return "URL format not correct";
                }
              },
            },
            {
              label: "twitter",
              name: "twitter",
              type: "text",
              validate: async (val) => {
                if (!!val && !val.match(urlRegex)) {
                  return "URL format not correct";
                }
              },
            },
          ],
        },
        {
          name: "menu",
          label: "Menu", // required
          fields: [
            {
              name: "nestedNavigation",
              type: "array",
              fields: [
                {
                  name: "level1Name",
                  label: "level 1",
                  type: "text",
                  localized: true,
                },
                {
                  label: "permalink",
                  name: "permalink",
                  type: "text",
                  unique: true,
                },
                {
                  label: "external",
                  name: "external",
                  type: "checkbox",
                  defaultValue: false,
                },
                // genField({
                //   label: lang["disablePermalink"],
                //   name: "disablePermalink",
                //   type: "checkbox",
                //   defaultValue: false,
                // }),
                // {
                //   name: "level2navigation",
                //   label: "level 2 navigation",
                //   type: "array",
                //   fields: [
                //     {
                //       type: "row",
                //       fields: [
                //         genField({
                //           label: lang["level 3 ?"],
                //           name: "level3",
                //           type: "checkbox",
                //           defaultValue: false,
                //         }),
                //         genField({
                //           label: lang["external Link"],
                //           name: "externalLink",
                //           type: "checkbox",
                //           defaultValue: false,
                //         }),
                //       ],
                //     },
                //     {
                //       label: lang["External Link Content"],
                //       name: "externalLinkContent",
                //       type: "text",
                //       admin: {
                //         placeholder: "https://",
                //         description:
                //           "Please enter the link here, this will override the permalink",
                //         condition: (_, siblingData) =>
                //           siblingData?.externalLink === true,
                //       },
                //       hooks: {
                //         beforeChange: [
                //           ({ value, siblingData }) => {
                //             if (!siblingData?.externalLink) {
                //               return null;
                //             }
                //             return value;
                //           },
                //         ],
                //       },
                //     },
                //     {
                //       label: lang["External Link Text"],
                //       name: "externalLinkText",
                //       type: "text",
                //       admin: {
                //         condition: (_, siblingData) =>
                //           siblingData?.externalLink === true,
                //       },
                //       hooks: {
                //         beforeChange: [
                //           ({ value, siblingData }) => {
                //             if (!siblingData?.externalLink) {
                //               return null;
                //             }
                //             return value;
                //           },
                //         ],
                //       },
                //     },
                //     genField({
                //       label: lang["level 2 Name"],
                //       name: "level2Name",
                //       type: "text",
                //       admin: {
                //         condition: (_, siblingData) =>
                //           siblingData?.level3 === true,
                //       },
                //     }),
                //     genField({
                //       label: lang["level 2 Subline"],
                //       name: "level2Subline",
                //       type: "text",
                //       admin: {
                //         condition: (_, siblingData) =>
                //           siblingData?.level3 === true,
                //       },
                //     }),
                //     genField({
                //       label: lang["sublinks"],
                //       name: "sublinks",
                //       type: "relationship",
                //       relationTo: [
                //         "classes",
                //         "therapy",
                //         "posts",
                //         "pages",
                //         "tutors",
                //       ],
                //       admin: {
                //         condition: (_, siblingData) =>
                //           siblingData?.level3 === false,
                //       },
                //     }),
                //     genField({
                //       label: lang["level 3 links"],
                //       name: "level3links",
                //       type: "relationship",
                //       relationTo: [
                //         "classes",
                //         "therapy",
                //         "posts",
                //         "pages",
                //         "tutors",
                //       ],
                //       hasMany: true,
                //       admin: {
                //         condition: (_, siblingData) =>
                //           siblingData?.level3 === true,
                //       },
                //     }),
                //   ],
                // },
              ],
            },
          ],
        },
        {
          name: "others",
          label: "Others", // required
          fields: [
            {
              label: "name",
              name: "name",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};

export default Setting;
