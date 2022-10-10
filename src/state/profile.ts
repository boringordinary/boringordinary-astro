import { map } from "nanostores";

interface Profile {
  name?: string;
}

const profile = map<Profile>({});

export { profile };
