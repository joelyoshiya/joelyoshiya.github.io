import * as React from "react";
import { Link } from "gatsby";
import { CgDarkMode } from "react-icons/cg";

// this func will toggle dark mode by changing the classname on the body element
const toggleDarkMode = () => {
  document.body.classList.toggle("dark"); // TODO: use system preferences to set dark mode in the future
};

const Navbar = ({ siteTitle }) => {
  return (
    <nav>
      <ul className="flex flex-col flex-wrap rounded-lg border border-gray-100 p-4 font-mono font-medium dark:border-gray-700 md:flex-row md:flex-nowrap md:justify-between md:space-x-8 md:border-0 md:p-4">
        <li>
          <Link
            className="block rounded py-2 pl-3 pr-4 text-gray-900 shadow-sm shadow-emerald-200 hover:bg-gray-100 dark:text-emerald-50 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-emerald-500 md:dark:hover:bg-transparent md:dark:hover:text-emerald-400"
            to="/"
          >
            {siteTitle}
          </Link>
        </li>
        <div className="inline-table md:flex md:flex-row md:space-x-5">
          <li>
            <Link
              className="block rounded py-2 pl-3 pr-4 text-gray-900 shadow-sm shadow-emerald-200 hover:bg-gray-100 dark:text-emerald-50 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-emerald-500 md:dark:hover:bg-transparent md:dark:hover:text-emerald-400"
              to="/work"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="block rounded py-2 pl-3 pr-4 text-gray-900 shadow-sm shadow-emerald-200 hover:bg-gray-100 dark:text-emerald-50 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-emerald-500 md:dark:hover:bg-transparent md:dark:hover:text-emerald-400"
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="block rounded py-2 pl-3 pr-4 text-gray-900 shadow-sm shadow-emerald-200 hover:bg-gray-100 dark:text-emerald-50 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-emerald-500 md:dark:hover:bg-transparent md:dark:hover:text-emerald-400"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="block rounded py-2 pl-3 pr-4 text-gray-900 shadow-sm shadow-emerald-200 hover:bg-gray-100 dark:text-emerald-50 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-emerald-500 md:dark:hover:bg-transparent md:dark:hover:text-emerald-400"
              to="/bookshelf"
            >
              Bookshelf
            </Link>
          </li>
          <li>
            <Link
              className="block rounded py-2 pl-3 pr-4 text-gray-900 shadow-sm shadow-emerald-200 hover:bg-gray-100 dark:text-emerald-50 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-emerald-500 md:dark:hover:bg-transparent md:dark:hover:text-emerald-400"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="block rounded py-2 pl-3 pr-4 text-gray-900 shadow-sm shadow-emerald-200 hover:bg-gray-100 dark:text-emerald-50 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-emerald-500 md:dark:hover:bg-transparent md:dark:hover:text-emerald-400"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <button
              className="block rounded py-2 pl-3 pr-4 text-gray-900 shadow-sm shadow-emerald-200 hover:bg-gray-100 dark:text-emerald-50 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-emerald-500 md:dark:hover:bg-transparent md:dark:hover:text-emerald-400"
              onClick={toggleDarkMode}
            >
              <CgDarkMode size="1.5em" />
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
