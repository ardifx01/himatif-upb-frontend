"use client";
import React, { useEffect, useState } from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import fetchDataDepartement from "@/config/departementApi/fetchData";
import fetchDataGalery from "@/config/galeryApi/fetchData";
import api from "@/config/api";

export default function Department() {
  const [department, setDepartment] = useState(null);
  const [galery, setGalery] = useState(null);

  useEffect(() => {
    const dep = "Hubungan Internal dan External";
    const fetchDepartment = async () => {
      try {
        const data = await fetchDataDepartement(dep);
        setDepartment(data);
        console.log(`Data Departemen: ${JSON.stringify(data)}`);
      } catch (error) {
        console.error("Error fetching department data:", error);
      }
    };

    const fetchGalery = async () => {
      try {
        const data = await fetchDataGalery(dep);
        setGalery(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching Galery data:", error);
      }
    };

    fetchGalery();
    fetchDepartment();
  }, []);

  return (
    <HeroParallax
      products={
        galery
          ? galery.map((gal) => ({
              title: gal.title,
              link: `/galery/${gal.id}`,
              thumbnail: gal.imageUrl,
            }))
          : []
      }
      title={department ? department.name : "Data Kosong"}
      description={department ? department.description : "Data Kosong"}
      proker={department ? department.proker : "Data Kosong"}
    />
  );
}

export const title = "Data Kosong";
export const description = "Data Kosong";
export const proker = "Data Kosong";
