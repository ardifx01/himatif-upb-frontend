"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import fetchDataGalery from "@/config/galeryApi/fetchData";
import { useState, useEffect } from "react";

export function AppleCardsCarouselDemo({ dep }) {
  const [galery, setGalery] = useState([]);

  useEffect(() => {
    const fetchGalery = async () => {
      try {
        const data = await fetchDataGalery(dep);
        setGalery(data);
      } catch (error) {
        console.error("Error fetching Galery data:", error);
      }
    };
    fetchGalery();
  }, [dep]);

  const cards = galery.map((card, index) => (
    <Card key={card.id} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Himatif Galery
      </h2>
      <p className="max-w-7xl pl-4 mx-auto text-sm md:text-md  text-neutral-800 dark:text-neutral-200 font-sans">
        {dep}
      </p>
      <Carousel initialScroll={1} items={cards} />
    </div>
  );
}

export default function GaleryPage() {
  return (
    <>
      <AppleCardsCarouselDemo dep={"Pengembangan Organisasi"} />
      <AppleCardsCarouselDemo dep={"Hubungan Internal dan External"} />
      <AppleCardsCarouselDemo dep={"Penelitian dan Pengembangan"} />
      <AppleCardsCarouselDemo dep={"Media Komunikasi dan Informasi"} />
      <AppleCardsCarouselDemo dep={"Minat dan Bakat"} />
    </>
  );
}
