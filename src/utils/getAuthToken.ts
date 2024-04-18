import { MindbodyPublicClient } from "../utils/mindbodyClient";

export const GET_AUTH_TOKEN = () => MindbodyPublicClient.post(`usertoken/issue`, {
  username: process.env.MINDBODY_STAFF_USERNAME,
  password: process.env.MINDBODY_STAFF_PASSWORD,
})
  .then((res) => {
    const { data } = res;
    return data;
  })
  .catch((err) => {
    // console.log("err", err?.response);
  });
