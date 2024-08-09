import Card from "@/components/ui/3dCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const departments = [
  {
    name: "Pengembangan Organisasi (PO)",
    image: require("@/public/image/po_logo.png"),
    description:
      "Departemen yang berfokus pada pengembangan dan peningkatan kualitas organisasi",
  },
  {
    name: "Komunikasi dan Informasi (MEDKOMINFO)",
    image: require("@/public/image/medkom_logo.png"),
    description:
      "Departemen yang mengurus dan mengelola informasi serta komunikasi internal dan eksternal",
  },
  {
    name: "Minat dan Bakat (MIBA)",
    image: require("@/public/image/miba_logo.png"),
    description:
      "Departemen yang menyalurkan dan mengembangkan minat serta bakat para mahasiswa",
  },
  {
    name: "Penelitian dan Pengembangan (LITBANG)",
    image: require("@/public/image/litbang_logo.png"),
    description:
      "Departemen yang menangani dan mengkoordinasikan kegiatan penelitian dan pengembangan",
    link: "/department/litbang",
  },
  {
    name: "Hubungan Eksternal dan Internal (HUBEKS & HUBIN)",
    image: require("@/public/image/hubinek_logo.png"),
    description:
      "Departemen yang menjalin dan mengembangkan hubungan baik dengan pihak internal maupun eksternal",
  },
];

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="flex mt-24 flex-col justify-center items-center">
      <h1 className="text-4xl text-0 font-manguiera">Department</h1>
      <div className="flex max-md:flex-col md:gap-10 max-md:gap-0 max-md:p-10 flex-wrap items-center justify-center">
        {departments.map((department, index) => (
          <Card
            key={index}
            name={department.name}
            description={department.description}
            image={department.image}
            link={department.link}
          />
        ))}
      </div>
    </div>
  );
}
