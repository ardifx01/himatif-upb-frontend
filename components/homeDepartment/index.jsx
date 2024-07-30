import React from "react";
import Card from "@/components/homeDepartment/card";
import image from "@/public/image/logo.png";

export default function index() {
  return (
    <section>
      <h1>Department</h1>
      <div className="flex gap-x-20 items-center justify-center flex-wrap">
        <Card
          name={"Hubin Hubek"}
          description={"loremskfnjsabf sdifbsdkjfb fkasjf"}
          image={image}
        />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
