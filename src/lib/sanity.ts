import sanityClient from '@sanity/client'

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  token: process.env.SANITY_TOKEN,
  useCdn: process.env.NODE_ENV === "development" ? false : true, // `false` if you want to ensure fresh data
};

const client = sanityClient(config);

export {client}