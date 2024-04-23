import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Categories from './collections/Categories'
import Users from './collections/Users'
import Media from './collections/Media';
import Pages from './collections/Pages'
import Blocks from './collections/Blocks'
import Products from './collections/Products'

import Settings from './globals/Settings';
import Home from './globals/Home';
import AboutUs from './globals/AboutUs'

import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Categories, Media, Pages, Products, Blocks],
  globals: [
    Home,
    AboutUs,
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
          adapter: s3Adapter({
            bucket: process.env.S3_BUCKET_NAME,
            config: {
              // endpoint: "https://c-max-bucket.s3.ap-east-1.amazonaws.com",
              credentials: {
                accessKeyId: "AKIA4HWDFA76EGIL3MMU",
                secretAccessKey: "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",
              },
              region: "ap-east-1",
            },
          }),
          // disablePayloadAccessControl: true,
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
