import type { Item } from "./";

interface Props {
  items: Item[];
}

const MegaMenu = ({ items }: Props) => {
  return (
    <div className="absolute top-10 z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
          <a
            href="#"
            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
          >
            {/* Heroicon name: outline/chart-bar */}
            <svg
              className="h-6 w-6 flex-shrink-0 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Analytics</p>
              <p className="mt-1 text-sm text-gray-500">
                Get a better understanding of where your traffic is coming from.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
          >
            {/* Heroicon name: outline/cursor-arrow-rays */}
            <svg
              className="h-6 w-6 flex-shrink-0 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Engagement</p>
              <p className="mt-1 text-sm text-gray-500">
                Speak directly to your customers in a more meaningful way.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
          >
            {/* Heroicon name: outline/shield-check */}
            <svg
              className="h-6 w-6 flex-shrink-0 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Security</p>
              <p className="mt-1 text-sm text-gray-500">
                Your customers' data will be safe and secure.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
          >
            {/* Heroicon name: outline/squares-2x2 */}
            <svg
              className="h-6 w-6 flex-shrink-0 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">
                Integrations
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Connect with third-party tools that you're already using.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
          >
            {/* Heroicon name: outline/arrow-path */}
            <svg
              className="h-6 w-6 flex-shrink-0 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Automations</p>
              <p className="mt-1 text-sm text-gray-500">
                Build strategic funnels that will drive your customers to
                convert
              </p>
            </div>
          </a>
        </div>
        <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
          <div className="flow-root">
            <a
              href="#"
              className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              {/* Heroicon name: outline/play */}
              <svg
                className="h-6 w-6 flex-shrink-0 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
              <span className="ml-3">Why we specialize in industries</span>
            </a>
          </div>
          <div className="flow-root"></div>
        </div>
      </div>
    </div>
  );
};

export { MegaMenu };
