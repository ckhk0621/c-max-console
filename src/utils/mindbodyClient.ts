const axios = require('axios');
const NODE_ENV = process.env;

export const MindbodyClient = axios.create({
  baseURL: process.env.MINDBODY_BASE_URL,
  headers: {
    'content-type': 'application/json',
    'API-Key': process.env.MINDBODY_API,
    'SiteId': process.env.MINDBODY_SITE_ID,
    // 'Authorization': process.env.MINDBODY_ADMIN_AUTH_TOKEN
  },
});

export const MindbodyPublicClient = axios.create({
  baseURL: process.env.MINDBODY_BASE_URL,
  headers: {
    'content-type': 'application/json',
    'API-Key': process.env.MINDBODY_API,
    'SiteId': process.env.MINDBODY_SITE_ID
  },
});


export const MindbodyConsumerClient = axios.create({
  baseURL: process.env.MINDBODY_CONSUMER_BASE_URL,
  headers: {
    'content-type': 'application/json',
    'API-Key': process.env.MINDBODY_API,
    'SiteId': process.env.MINDBODY_SITE_ID
  },
});