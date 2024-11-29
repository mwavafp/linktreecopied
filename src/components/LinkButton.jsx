import React from "react";

const LinkButton = ({ text, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full py-3 px-6 text-center text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition-all"
    >
      {text}
    </a>
  );
};

export default LinkButton;
