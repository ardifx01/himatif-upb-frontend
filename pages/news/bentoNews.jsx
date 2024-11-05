import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconTableColumn } from "@tabler/icons-react";
import api from "@/config/api";
import { useEffect, useState } from "react";
import fetchData from "./fetchDataNews";
import Image from "next/image";

function BentoNews() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetchData();
        setItems(
          response.sort(
            (a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)
          )
        );
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNewsData();
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Cari berita..."
        className="mb-4 w-full p-2 border-2 my-10 border-gray-300 rounded-setup"
      />
      <BentoGrid>
        {filteredItems.map((item, i) => (
          <BentoGridItem
            key={i}
            id={item.id}
            title={item.title}
            description={new Date(item.uploadDate).toLocaleString()}
            header={<Skeleton imagesrc={item.imageUrl} />}
            icon={<IconTableColumn className="h-4 w-4 text-neutral-500" />}
            className={
              i === 3 || i === 6
                ? "md:col-span-2 cursor-pointer"
                : "cursor-pointer"
            }
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = ({ imagesrc }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem]  rounded-xl bg-gradient-to-br justify-center from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      className="w-full h-auto shadow-2xl hover:shadow-sm transition-all ease-in-out"
      src={`${api}${imagesrc}`}
      width={100}
      height={100}
      alt="logo"
    />
  </div>
);

export default BentoNews;
