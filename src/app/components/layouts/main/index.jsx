import React from "react";

const Main = ({ children }) => {
  return (
    <main  style={{ width: `calc(100% - 240px)` }} className="bg-[#f9f9f9] p-[24px] h-full fixed left-[240px] top-[54px] overflow-scroll">
      {children}
    </main>
  );
};

export default Main;
