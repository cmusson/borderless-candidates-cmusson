import React from "react";

const Header = () => {
  return (
    <header className="bg-white border border-gray-200 rounded py-2 px-4">
      <h1 className="font-bold">Direct candidates</h1>
      <p className="text-xs pb-2 text-gray-600">
        These candidates have applies to you directly
      </p>
    </header>
  );
};

export default Header;
