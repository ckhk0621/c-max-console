import type { CollectionConfig } from "payload/types";
import { admins } from "../access/admins";
import adminsAndUser from "../access/adminsAndUser";
import { anyone } from "../access/anyone";
import { Config } from "payload/config";

const NewsLetter: CollectionConfig = {
  slug: "newsletter",
  access: {
    read: () => true,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
  },
  admin: {
    useAsTitle: "email",
    group: "CRM",
  },
  fields: [
    {
      name: "email",
      type: "text",
    },
  ],
};

export const newsletterCustomGraphQL: Config["graphQL"] = {
  queries: (GraphQL, payload) => {
    return {};
  },
  mutations: (GraphQL, payload) => {
    return {
      Subscription: {
        type: GraphQL.GraphQLString,
        args: {
          email: {
            type: GraphQL.GraphQLString,
          },
        },
        resolve: async (parent, { email }, context) => {
          const result = await payload.find({
            collection: "newsletter",
            where: {
              email: {
                equals: email,
              },
            },
          });

          if (result.docs.length > 0) {
            return "Already subscribed";
          }

          await payload.create({
            collection: "newsletter",
            data: {
              email,
            },
          })

          return "Subscribed";
        },
      },
    };
  },
};

export default NewsLetter;
