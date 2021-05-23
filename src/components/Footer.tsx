interface Props {}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="relative bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="md:flex items-center justify-center md:flex-1 lg:w-0">
              <p className="mt-3 text-base text-black font-medium sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                ©Copyright 2021 by{" "}
                <a
                  href="https://www.linkedin.com/in/adolfredoconeo/?locale=en_US"
                  target="_blank"
                  rel="noreferrer"
                  className="font-black"
                >
                  <span className="text-yellow-400">&#123; </span>adolConeo
                  <span className="text-yellow-400"> &#125;</span>
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
