import * as React from "react";
import { AiOutlineLink } from "react-icons/ai";

const ExtLink = ({ link, linkText }) => {
  return (
    <a
      href={link}
      className="inline-block rounded-lg bg-emerald-400 dark:bg-emerald-500 px-2 py-1 text-white opacity-70 shadow-lg hover:bg-emerald-700 dark:hover:bg-emerald-800 hover:opacity-90 dark:text-white dark:opacity-100 border border-transparent hover:border-white dark:hover:border-white"
    >
      {linkText}
      <AiOutlineLink size="1em" className="ml-2 inline-block" />
    </a>
  );
};

export default ExtLink;
