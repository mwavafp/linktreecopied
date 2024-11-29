import React from "react";
import LinkButton from "../components/LinkButton";


const Links = () => {
  const links = [
    { text: "My Website", url: "https://example.com" },
    { text: "GitHub", url: "https://github.com" },
    { text: "LinkedIn", url: "https://linkedin.com" },
    { text: "Twitter", url: "https://twitter.com" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full w-32 h-32 mb-6"
      />
      <h2 className="text-2xl font-bold mb-4">My Links</h2>
      <div className="space-y-4 w-80">
        {links.map((link, index) => (
          <LinkButton key={index} text={link.text} url={link.url} />
        ))}
      </div>
    </div>
  );
};

export default Links;
