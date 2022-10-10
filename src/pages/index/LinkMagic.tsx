import { useRef } from "react";
import { Text } from "@/components";
import { profile } from "@/state/profile";
import { useStore } from "@nanostores/react";

function titlecase(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const LinkMagic = () => {
  const $profile = useStore(profile);
  console.log("profile: ", $profile);

  const visitorText = $profile.name
    ? `${titlecase($profile.name)}'s`
    : "you visitor's";

  return (
    <div className="mx-auto my-8 grid max-w-screen-md">
      <div className="flex flex-col gap-2">
        <img src="/images/wand.png" className="h-36 w-36" />
        <Text display size="lg" lineHeight="snug">
          Link Magic
        </Text>
        <AddressBar
          content={
            <div className="my-8">
              <Text display size="sm" color="gray-800">
                A website with{" "}
                <span className="text-purple-900">{visitorText}</span> name on
                it. Introducing Link Magic, a B+O innovation that’s
                personalization done to the extreme, enabling your site to adapt
                its text, images, videos, reviews, theme – basically every
                detail, to leave a lasting impression on visitors.
              </Text>
            </div>
          }
        />
      </div>
      <div>
        <video
          src="https://www.sanity.io/dad34dae-73ae-4c4d-9b02-b1872b805480"
          autoPlay
          playsInline
          muted
          loop
        />
      </div>
    </div>
  );
};

const AddressBar = ({ content }) => {
  const input = useRef<HTMLInputElement>(null);

  const handleChange = (event: any) => {
    console.log(event.target.value);
    const name = event.target.value;
    profile.setKey("name", name);
  };

  const focusInput = () => {
    input?.current.focus();
  };

  return (
    <div className="relative rounded-xl border border-gray-200 p-8 shadow-xl">
      <div className="mb-4 flex gap-2">
        <div className="h-3.5 w-3.5 rounded-full bg-slate-300"></div>
        <div className="h-3.5 w-3.5 rounded-full bg-slate-300"></div>
        <div className="h-3.5 w-3.5 rounded-full bg-slate-300"></div>
      </div>
      <div
        className="flex max-w-full cursor-text rounded-full bg-slate-100 py-2 px-4 text-lg text-gray-800 transition-colors hover:bg-slate-200"
        onClick={focusInput}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>

        <div className="ml-2">boringordinary.com?name=</div>
        <input
          ref={input}
          type="text"
          className="bg-transparent placeholder-gray-900 focus:outline-none"
          onChange={handleChange}
        />
      </div>

      {content}
    </div>
  );
};

export { LinkMagic };
