import React from 'react';

const links = [
  { title: "Portfolio", url: "https://your-portfolio.com" },
  { title: "GitHub", url: "https://github.com/your-username" },
  { title: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
  { title: "Twitter", url: "https://twitter.com/your-handle" },
];

const Linktree = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Profile Section */}
      <div className="text-center mb-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-500"
        />
        <h1 className="text-2xl font-bold text-gray-800 mt-4">Your Name</h1>
        <p className="text-gray-600">Web Developer | Open Source Enthusiast</p>
      </div>

      {/* Links Section */}
      <div className="w-full max-w-sm">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 mb-4 text-center text-white font-medium bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-lg transition"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Linktree;
