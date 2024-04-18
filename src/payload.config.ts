import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Categories from './collections/Categories'
import Users from './collections/Users'

import Settings from './globals/Settings';
import Media from './collections/Media';

import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Categories, Media],
  globals: [
    Settings,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
    declare: false
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    ...[].reduce((_, { mutations, queries }) => {
      return {
        mutations: (graphQL, payload) => {
          return {
            ...(_?.mutations?.(graphQL, payload) ?? {}),
            ...mutations(graphQL, payload),
          };
        },
        queries: (graphQL, payload) => {
          return {
            ...(_?.queries?.(graphQL, payload) ?? {}),
            ...queries(graphQL, payload),
          };
        },
      };
    }, {}),
  },
  plugins: [payloadCloud(),
    cloudStorage({
      collections: {
        media: {
          // adapter: s3Adapter({
          //   bucket: "timable-uat-public-test",
          //   config: {
          //     credentials: {
          //       accessKeyId: "AKIA6FFQ5YWWQG746OEF",
          //       secretAccessKey: "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",
          //     },
          //     region: "ap-southeast-1",
          //   },
          // }),
          adapter: s3Adapter({
            bucket: "c-max-bucket",
            config: {
              credentials: {
                accessKeyId: "AKIA4HWDFA76EGIL3MMU",
                secretAccessKey: "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",
              },
              region: "ap-east-1",
            },
          }),
          disablePayloadAccessControl: true,
        },
      },
    })
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  cors: [process.env.PAYLOAD_PUBLIC_SITE_URL],
  cookiePrefix: 'c-max',
  ...(process.env.CSRF_URL ? { csrf: [process.env.CSRF_URL] } : {}),
  localization: {
    locales: ['en', 'cn', 'zh', 'jp'],
    defaultLocale: 'en',
    fallback: true,
  },
  
})
