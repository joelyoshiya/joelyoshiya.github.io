import * as React from "react";
import { AiOutlineLink } from "react-icons/ai";

const ExtLink = ({ link, linkText }) => {
  return (
    <a
      href={link}
      className="inline-block rounded-lg bg-emerald-400 px-4 py-2 text-white opacity-70 shadow-lg hover:bg-emerald-700 hover:opacity-90"
    >
      {linkText}
      <AiOutlineLink size="1em" className="ml-2 inline-block" />
    </a>
  );
};

export default ExtLink;
