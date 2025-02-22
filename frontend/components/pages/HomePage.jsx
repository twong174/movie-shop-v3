import React from "react";
import Header from "../widgets/Header";
import MainSection from "../widgets/MainSection";

const HomePage = () => {
  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr] gap-2 p-2">
      <div className="h-full">
        <Header />
      </div>
      <div className="h-full ">
        <MainSection />
      </div>
    </div>
  );
};

export default HomePage;
