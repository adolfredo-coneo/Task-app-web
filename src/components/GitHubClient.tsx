interface Props {}

const GitHubClient = (props: Props) => {
  return (
    <a
      href="https://github.com/adolfredo-coneo/Task-app-web"
      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#FFEDD5"></rect>
          <path
            d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
            stroke="#FB923C"
            strokeWidth="2"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
            stroke="#FDBA74"
            strokeWidth="2"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
            stroke="#FDBA74"
            strokeWidth="2"
          ></path>
        </svg>
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-900">
          GitHub Client Repository
        </p>
      </div>
    </a>
  );
};

export default GitHubClient;
