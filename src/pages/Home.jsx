import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My LinkTree</h1>
      <Link
        to="/links"
        className="text-blue-500 underline text-lg hover:text-blue-700"
      >
        View My Links
      </Link>
    </div>
  );
};

export default Home;
