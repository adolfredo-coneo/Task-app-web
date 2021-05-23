import GitHubClient from "./GitHubClient";
import GitHubServer from "./GitHubServer";

interface Props {}

const Header = (props: Props) => {
  return (
    <>
      <div className="lg:text-center mt-10">
        <h2 className="text-4xl text-green-600 font-extrabold tracking-wide uppercase">
          Tasks WebApp
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl leading-8 font-extrabold tracking-tight text-gray-900 ">
          Created by: Adolfredo Coneo
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Using task-app-api hosted on Heroku. With the Get, Post and Put
          endpoints
        </p>
      </div>
      <div className="flex justify-center gap-x-10 mt-4">
        <GitHubServer />
        <GitHubClient />
      </div>
    </>
  );
};

export default Header;
