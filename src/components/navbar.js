import * as React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";

// this func will toggle dark mode by changing the classname on the body element
const toggleDarkMode = () => {
  document.body.classList.toggle("dark"); // TODO: use system preferences to set dark mode in the future
};

const Navbar = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <ul className="flex flex-col flex-wrap rounded-lg border border-gray-100 p-4 font-mono font-medium dark:border-gray-700 md:flex-row md:flex-nowrap md:justify-between md:space-x-8 md:border-0 md:p-4 md:text-lg lg:text-xl">
        <li>
          <Link
            className="block rounded py-2 pl-3 pr-4 text-gray-900 shadow-sm shadow-emerald-200 hover:bg-gray-100 dark:text-emerald-50 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-emerald-500 md:dark:hover:bg-transparent md:dark:hover:text-emerald-400"
            to="/"
          >
            {siteTitle}
          </Link>
        </li>
        <div className="hidden items-center md:flex md:flex-row md:space-x-5">
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
        {/* mobile menu button */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</button>
        </div>

        {/* mobile menu */}
        {isMenuOpen && (
          <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center space-y-5 bg-white dark:bg-black">
            <button onClick={() => setIsMenuOpen(false)}>Close</button>
            <Link to="/work" className="p-2">
              Work
            </Link>
            <Link to="/projects" className="p-2">
              Projects
            </Link>
            <Link to="/blog" className="p-2">
              Blog
            </Link>
            <Link to="/bookshelf" className="p-2">
              Bookshelf
            </Link>
            <Link to="/contact" className="p-2">
              Contact
            </Link>
            <Link to="/about" className="p-2">
              About
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
