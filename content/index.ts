import type { SanityImageSource } from "@sanity/asset-utils";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: process.env.NODE_ENV === "development" ? false : true, // `false` if you want to ensure fresh data
};

const client = sanityClient(config);

const builder = imageUrlBuilder(client);

function imgUrl(source: SanityImageSource) {
  return builder.image(source).auto("format");
}

export { client, config, imgUrl };
