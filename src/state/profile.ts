import { persistentMap } from "@nanostores/persistent";

interface Profile {
  name?: string;
}

const profile = persistentMap<Profile>("profile:", {});

export { profile };
