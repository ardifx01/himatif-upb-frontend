import React from "react";
import BentoNews from "./bentoNews";

export default function News() {
  return (
    <div className="flex flex-col mt-10 ">
      <div className="flex w-full justify-center pb-20 border-b-2 items-center">
        <h1 className="text-4xl text-0 font-manguiera">HIMATIF News</h1>
      </div>
      <BentoNews />
    </div>
  );
}
