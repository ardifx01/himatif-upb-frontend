import React from "react";
import ActionSection from "../action";
// import Map from "@/components/map";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
});

export default function Location() {
  return (
    <div className=" py-20 px-10 flex flex-col justify-center items-center gap-10 w-full">
      <h1 className=" font-manguiera text-3xl">Our Location</h1>
      <div className="flex h-screen w-full gap-10">
        <ActionSection className="w-full" />
        <Map className="w-full" />
      </div>
    </div>
  );
  ß;
}
