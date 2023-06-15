import * as React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between p-5 md:flex-row">
      <div className="my-2 flex flex-col items-center justify-center text-sm text-gray-500 dark:text-gray-400 md:flex-row">
        <Link
          to="https://github.com/joelyoshiya"
          className="my-1 md:my-0 md:mr-5"
        >
          Github
        </Link>
        <Link
          to="https://www.linkedin.com/in/joel-yoshiya-foster/"
          className="my-1 md:my-0 md:mr-5"
        >
          LinkedIn
        </Link>
        <Link
          to="mailto:joel.foster@gmail.com"
          className="my-1 md:my-0 md:mr-5"
        >
          Email
        </Link>
        <Link
          to="https://drive.google/path-to-my-resume"
          className="my-1 md:my-0 md:mr-5"
        >
          Resume
        </Link>
        <Link
          to="https://drive.google.com/file/d/1n54uFZOBW6t7TRqGt0Tbqtcl7SkU7FqX/view?usp=sharing"
          className="my-1 md:my-0 md:mr-5"
        >
          Spotify
        </Link>
        <Link
          to="https://letterboxd.com/Mitsugo/"
          className="my-1 md:my-0 md:mr-5"
        >
          Letterboxd
        </Link>
      </div>
      <div className="my-2 flex flex-col items-center justify-center md:flex-row">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          made by Joel Yoshiya Foster
        </p>
      </div>
    </footer>
  );
};

export default Footer;
