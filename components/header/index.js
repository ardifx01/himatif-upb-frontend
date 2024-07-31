"use client";
import React from "react";
import SparklesText from "../magicui/sparkles-text";
import BoxReveal from "@/components/magicui/box-reveal";
import Visimisi from "../visimisi";

export default function Header() {
  return (
    <div className="flex justify-center items-center flex-col md:mx-20 text-center font-manguiera">
      <div>
        <BoxReveal>
          <SparklesText
            className="max-md:text-xl py-10"
            sparklesCount={50}
            text="HIMPUNANA MAHASISWA TEKNIK INFORMATIKA Universitas Pelita Bangsa"
          />
        </BoxReveal>
      </div>
      <BoxReveal>
        <p className="text-lg max-md:text-sm font-poppins font-medium">
          <span className="text-2">HIMATIF- Universitas Pelita Bangsa</span>{" "}
          adalah sebuah organisasi yang berfokus pada pengembangan keterampilan
          dan pengetahuan mahasiswa di bidang teknologi informasi. Kami
          berkomitmen untuk menciptakan lingkungan yang mendukung{" "}
          <span className="text-5">pertumbuhan akademik dan profesional.</span>
        </p>
      </BoxReveal>
      <Visimisi />
    </div>
  );
}
