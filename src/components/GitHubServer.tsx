interface Props {}

const GitHubServer = (props: Props) => {
  return (
    <a
      href="https://github.com/adolfredo-coneo/Tasks-app-server"
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
            d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
            stroke="#FB923C"
            strokeWidth="2"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
            stroke="#FDBA74"
            strokeWidth="2"
          ></path>
        </svg>
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-900">
          GitHub Server Repository
        </p>
      </div>
    </a>
  );
};

export default GitHubServer;
