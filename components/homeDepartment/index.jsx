import Card from "@/components/3dCard";
import image from "@/public/image/logo.png";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";

const departments = [
  {
    name: "Pengembangan Organisasi (PO)",
    description:
      "Departemen yang berfokus pada pengembangan dan peningkatan kualitas organisasi",
  },
  {
    name: "Komunikasi dan Informasi (MEDKOMINFO)",
    description:
      "Departemen yang mengurus dan mengelola informasi serta komunikasi internal dan eksternal",
  },
  {
    name: "Minat dan Bakat (MIBA)",
    description:
      "Departemen yang menyalurkan dan mengembangkan minat serta bakat para mahasiswa",
  },
  {
    name: "Penelitian dan Pengembangan (LITBANG)",
    description:
      "Departemen yang menangani dan mengkoordinasikan kegiatan penelitian dan pengembangan",
    link: "https://google.com",
  },
  {
    name: "Hubungan Eksternal dan Internal (HUBEKS & HUBIN)",
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
      <h1 className="text-4xl font-manguiera">Department</h1>
      <div className="flex max-md:flex-col md:gap-10 max-md:gap-0 max-md:p-10 flex-wrap items-center justify-center">
        {departments.map((department, index) => (
          <Card
            key={index}
            name={department.name}
            description={department.description}
            image={image}
            link={department.link}
          />
        ))}
      </div>
    </div>
  );
}
