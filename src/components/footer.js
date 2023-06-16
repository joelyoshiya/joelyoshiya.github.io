import * as React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between p-5 md:flex-row">
      <div className="my-2 flex flex-col items-center justify-center text-sm text-gray-500 dark:text-gray-400 md:flex-row">
        <Link
          to="https://github.com/joelyoshiya"
          className="my-1 md:my-0 md:mr-5 hover:text-emerald-300"
        >
          Github
        </Link>
        <Link
          to="https://www.linkedin.com/in/joel-yoshiya-foster/"
          className="my-1 md:my-0 md:mr-5 hover:text-blue-500"
        >
          LinkedIn
        </Link>
        <Link
          to="mailto:joel.foster@gmail.com"
          className="my-1 md:my-0 md:mr-5 hover:text-orange-500"
        >
          Email
        </Link>
        <Link
          to="https://drive.google.com/file/d/1n54uFZOBW6t7TRqGt0Tbqtcl7SkU7FqX/view?usp=sharing"
          className="my-1 md:my-0 md:mr-5 hover:text-green-500"
        >
          Resume
        </Link>
        <Link
          to="https://open.spotify.com/user/1229025912?si=2f5006eb6836485f"
          className="my-1 md:my-0 md:mr-5 text hover:text-green-500"
        >
          Spotify
        </Link>
        <Link
          to="https://letterboxd.com/Mitsugo/"
          className="my-1 md:my-0 md:mr-5 hover:text-blue-400"
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
