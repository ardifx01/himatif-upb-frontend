import React from "react";
import EmailForm from "./emailForm/page";

export default function Conatct() {
  return (
    <div className="flex flex-col p-10 justify-center items-center w-full">
      <h1 className=" font-manguiera text-xl ">Contact Us</h1>
      <div className="flex p-10 justify-between w-full ">
        <EmailForm />
        <div className="flex w-6/12"> cjjdjdj</div>
      </div>
    </div>
  );
}
