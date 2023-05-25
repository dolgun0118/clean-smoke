import React from "react";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="main-page relative box-border flex flex-col mx-auto max-w-[1200px] h-full items-center ">
      <div
        className="global-navi-bar absolute z-30 h-14 w-full bg-slate-600 text-fuchsia-500"
        role="global-navi-bar"
      >
        GNB
      </div>
      <div className="main-contents absolute z-0 h-[calc(100%-3.5rem)] mt-14 w-full bg-red-300">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
