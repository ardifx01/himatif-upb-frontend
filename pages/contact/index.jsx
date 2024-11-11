import React from "react";
import EmailForm from "./emailForm/page";
import Head from "next/head";

export default function Conatct() {
  return (
    <div className="flex flex-col p-10 justify-center items-center w-full">
      <Head>
        <title>Contact Us - Himatif Website</title>
      </Head>
      <h1 className=" font-manguiera text-xl ">Contact Us</h1>
      <div className="flex p-10 justify-between w-full ">
        <EmailForm />
        <div className="flex w-6/12"> cjjdjdj</div>
      </div>
    </div>
  );
}
