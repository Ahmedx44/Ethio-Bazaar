import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* (Repeat the above structure for other sections) */}
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              {/* Facebook icon and link */}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              {/* Twitter icon and link */}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              {/* Discord icon and link */}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              {/* GitHub icon and link */}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              {/* Dribbble icon and link */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
