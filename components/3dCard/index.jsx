"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const handleClick = (link) => {
  if (link) {
    window.open(link, "_blank");
  }
};

export default function ThreeDCard({ name, description, image, link }) {
  return (
    <CardContainer className="inter-var w ">
      <CardBody className="bg-gray-50 relative group/card hover:shadow-xl  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-[30rem] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl h-20 font-bold text-neutral-600 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={image}
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div
          onClick={() => handleClick(link)}
          className="flex justify-between items-center mt-20"
        >
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Read More
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
