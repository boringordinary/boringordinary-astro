import {
  storyblokInit,
  apiPlugin,
  storyblokEditable,
  loadStoryblokBridge,
  SbInitResult,
  StoryblokClient,
} from "@storyblok/js";

const dev = import.meta.env.DEV;
const storyblokToken = import.meta.env.STORYBLOK_TOKEN;

const sbClient = storyblokInit({
  accessToken: storyblokToken,
  apiOptions: {
    cache: { type: "memory" },
  },
  use: [apiPlugin],
}) as SbInitResult;

const { storyblokApi } = sbClient as { storyblokApi: StoryblokClient };

export async function getLinks() {
  const { data } = await storyblokApi.get("cdn/links", {
    version: "draft",
  });

  const links = data ? data.links : null;

  return links;
}

export async function getStory(slug: string) {
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
  });

  const story = data ? data.story : null;

  return story;
}

export async function getEditableAttributes(blok: any) {
  if (!blok || !dev) return false;

  return storyblokEditable(blok);
}

export async function activateStoryblokBridge() {
  if (!dev) return false;

  return loadStoryblokBridge().then(() => {
    const { StoryblokBridge, location } = window;
    const storyblokInstance = new StoryblokBridge();

    storyblokInstance.on(["published", "change"], () => {
      location.reload();
    });
  });
}
