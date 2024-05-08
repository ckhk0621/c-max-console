import type { CollectionConfig } from "payload/types";
import { admins } from "./access/admins";
import adminsAndUser from "./access/adminsAndUser";
import { anyone } from "./access/anyone";
import { Config } from "payload/config";

const Calendar: CollectionConfig = {
  slug: "calendar",
  access: {
    read: () => true,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
  },
  admin: {
    useAsTitle: "title",
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
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: "endDateTime",
      type: "date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: 'dayAndTime',
        },
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
      name: "review",
      type: "select",
      defaultValue: "pending",
      options: [
        {
          label: "Approved",
          value: "approved",
        },
        {
          label: "Pending",
          value: "pending",
        },
        {
          label: "Rejected",
          value: "rejected",
        },
      ],
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
    },
  ],
};

export const calendarCustomGraphQL: Config["graphQL"] = {
  queries: (GraphQL, payload) => {
    return {
      GetCalendar: {
        ...payload.Query.fields.Calendars,
        resolve: async (parent, input, context, info) => {
          return payload.Query.fields.Calendars.resolve(
            parent,
            input,
            context,
            info
          )
        }
      },
      MeCalendar: {
        ...payload.Query.fields.Calendars,
        resolve: async (parent, input, context, info) => {
          return payload.Query.fields.Calendars.resolve(
            parent,
            input,
            context,
            info
          )
        }
      }
    }
  },
  mutations: (GraphQL, payload) => {
    return {
      // AddBannerView: {
      //   type: GraphQL.GraphQLBoolean,
      //   args: {
      //     id: { type: GraphQL.GraphQLString },
      //     type: { type: GraphQL.GraphQLString },
      //   },
      //   resolve: async (parent, { type, id }, context) => {
      //     const ensureArray = (dataString: string): any[] => {
      //       if (Array.isArray(dataString)) {
      //         return dataString;
      //       }
      //       return dataString?.split(",");
      //     };

      //     const result = await payload.find({
      //       collection: "banners", // required
      //       pagination: false, // If you want to disable pagination count, etc.
      //       where: {
      //         id: {
      //           in: ensureArray(id),
      //         },
      //       },
      //       overrideAccess: true,
      //     });

      //     const banners = result?.docs;

      //     // Prepare bulk update data
      //     const updates = banners
      //       .map((banner) => {
      //         if (!banner) return null; 

      //         let clickTotal = banner?.homePageClick +
      //         banner?.latestEventClick +
      //         banner?.editorChoiceClick +
      //         banner?.eventListClick +
      //         banner?.topTenClick

      //         if(type.includes("Click")){
      //           clickTotal += 1
      //         }

      //         let totalImpression = banner?.homePageImpression +
      //         banner?.latestEventImpression +
      //         banner?.editorChoiceImpression +
      //         banner?.eventListImpression +
      //         banner?.topTenImpression

      //         if(type.includes("Impression")){
      //           totalImpression += 1
      //         }


      //         return {
      //           id: banner?.id,
      //           data: {
      //             [type]: banner[type] ? banner[type] + 1 : 1,
      //             clickTotal: clickTotal,
      //             totalImpression: totalImpression
      //           },
      //         };
      //       })
      //       .filter(Boolean); // Filter out any null values

      //     if (!type) return false;

      //     // Execute all updates
      //     const res = await Promise.all(
      //       updates.map((update) =>
      //         payload.update({
      //           collection: "banners",
      //           where: {
      //             id: {
      //               in: update?.id,
      //             },
      //           },
      //           data: update?.data,
      //           overrideAccess: true,
      //         })
      //       )
      //     );

      //     return true;
      //   },
      // },
    };
  },
};

export default Calendar;
