import React from "react";
import Sidebar from "../components/shared/Sidebar";
import Header from "../components/shared/Hearder"; // ya Header agar file rename kar do
import Main from "../components/shared/Main";

const Layouts = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default Layouts;
