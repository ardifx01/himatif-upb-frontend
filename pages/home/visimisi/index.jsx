import React from "react";
import RetroGrid from "@/components/magicui/retro-grid";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Visimisi() {
  return (
    <div className="visi-misi flex justify-center items-center gap-10 max-md:flex-col m-10">
      <div className="relative flex h-[600px] max-md:w-full max-md:h-fit w-1/2 flex-col items-center justify-start p-10 overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <span className="text-0 text-2xl">Visi</span>
        <p className="font-poppins text-0 max-md:text-sm">
          Membentuk Mahasiswa prodi infomatika Fakultas Teknik Universitas
          Pelita Bangsa Cikarang. yang mampu berfikir secara kritis, solutif,
          kreatif, inovatif dan mampu mengekspresikan diri serta bekerjasama
          untuk mengembangkan potensi khususnya di bidang informatika sesui
          dengan Tri Dharma Perguruan Tinggi.
        </p>
        <RetroGrid />
      </div>
      <div className="relative flex h-[600px] max-md:w-full max-md:h-fit w-1/2 flex-col items-center justify-start p-10 overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <p className="text-0 text-2xl">Misi</p>
        <div className="font-poppins text-0 max-md:text-sm">
          <span>
            • Menghimpun Mahasiswa prodi infomatika Fakultas Teknik Universitas
            Pelita Bangsa.
          </span>
          <br />
          <br />
          <span>
            • Menjadikan HIMATIF-Univ. Pelita Bangsa sebagai media komunikasi
            dan informasi bagi mahasiswa program studi Teknik Informatika.
          </span>
          <br />
          <br />
          <span>
            • Memperluas wawasan mahasiswa terhadap ilmu teknik informatika
          </span>
          <br />
          <br />
          <span>
            • Membangun hubungan yang baik dengan civitas akademika program
            prodi infomatika Fakultas Teknik Universitas Pelita Bangsa Cikarang.
          </span>
          <br />
          <br />
          <span>
            • Menanamkan kesadaran anggota himpunan untuk mengabdi kepada
            masyarakat Melakukan kegiatan yang berorientasi terhadap peningkatan
            kulaitas sumber daya manusia bagi mahasiswa program studi Teknik
            Informatika Universitas Pelita Bangsa.
          </span>
        </div>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
    </div>
  );
}
