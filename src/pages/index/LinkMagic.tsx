import { useRef, useState, useEffect } from "react";
import { Text } from "@/components";
import { profile } from "@/state/profile";
import { useStore } from "@nanostores/react";
import clsx from "clsx";

function titlecase(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const LinkMagic = () => {
  const $profile = useStore(profile);
  console.log("profile: ", $profile);

  const visitorText = $profile.name
    ? `${titlecase($profile.name)}'s`
    : "your visitor's";

  return (
    <div className="mx-auto my-8 grid max-w-screen-md">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <img src="/images/wand.png" className="h-24 w-24" />
          <Text display size="lg" lineHeight="snug" gradient="primary">
            Link Magic
          </Text>
        </div>
        <div className="mt-4">
          <AddressBar
            content={
              <div className="p-6">
                <Text display size="sm" color="gray-800">
                  A website with{" "}
                  <span className="text-purple-900">{visitorText}</span> name on
                  it. Introducing Link Magic, a B+O innovation that’s
                  personalization done to the extreme, enabling your site to
                  adapt its text, images, videos, reviews, theme – basically
                  every detail, to leave a lasting impression on visitors.
                </Text>
              </div>
            }
          />
        </div>
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

const AddressBar = ({ content }: any) => {
  const nameInput = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocus] = useState(false);

  const handleChange = (event: any) => {
    console.log(event.target.value);
    const name = event.target.value;
    profile.setKey("name", name);
  };

  const focusInput = () => {
    nameInput.current.focus();
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };

  const clickEdit = () => {
    setFocus(true);
    setHovered(false);
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 p-4 shadow-xl">
      <style>
        {`
               @-webkit-keyframes borderpulse {
                0% {
                }
                70% {
                  box-shadow: 0 0 0 5px #5a99d47a;
                }
                100% {
                  box-shadow: 0 0 0 0 #5a99d473;
                }
              }
          `}
      </style>
      <div className="mb-4 flex gap-2">
        <div className="h-3.5 w-3.5 rounded-full bg-slate-300"></div>
        <div className="h-3.5 w-3.5 rounded-full bg-slate-300"></div>
        <div className="h-3.5 w-3.5 rounded-full bg-slate-300"></div>
      </div>

      <div
        className={clsx(
          "z-10 flex max-w-full cursor-text rounded-full border-4 bg-slate-100 py-2 px-4 text-lg text-gray-800 transition-colors hover:bg-slate-200",
          focused && "border-blue-400"
        )}
        style={{ animation: focused ? "" : "borderpulse 2s infinite" }}
        onClick={focusInput}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mt-[2px] h-5 w-5 text-green-500"
        >
          <path
            fillRule="evenodd"
            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
            clipRule="evenodd"
          />
        </svg>

        <div className="ml-2 font-system text-xl">
          <span className="text-gray-500">boringordinary.com</span>?name=
        </div>
        <input
          autoFocus
          ref={nameInput}
          type="text"
          className="bg-transparent font-system text-xl placeholder-gray-900 focus:outline-none"
          onChange={handleChange}
          onBlur={onBlur}
        />
      </div>

      <div>
        {hovered && (
          <div
            className="align-center absolute top-0 left-0 flex h-full w-full justify-center bg-black bg-opacity-80"
            onClick={clickEdit}
          >
            <Text display size="lg" color="white">
              Click to Edit
            </Text>
          </div>
        )}
        {content}
      </div>
    </div>
  );
};

export { LinkMagic };
