import { React, useEffect, useState } from "react";
import fetchData from "./fetchData";
import { HiSpeakerphone } from "react-icons/hi";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default function Index() {
  const [news, setNews] = useState();

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchData();
      setNews(data);
    };
    getNews();
  }, []);

  return (
    <div className="flex flex-col justify-center gap-14 items-center">
      <div>
        <h1 className="text-4xl text-0 font-manguiera">News</h1>
      </div>
      <div className="cursor-pointer flex-col gap-10 border-y-2 w-full p-5 flex justify-center items-center">
        {news &&
          news
            .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate))
            .slice(0, 4)
            .map((item, index) => (
              <div
                className={`shadow-md w-11/12 flex ${
                  item.isMaxMd
                    ? "flex-col gap-4"
                    : "justify-center max-md:flex-col gap-20 max-md:gap-4"
                } rounded-setup items-center p-5`}
                key={index}
              >
                <FollowerPointerCard />
                <div className="p-2 bg-4 rounded-full">
                  <HiSpeakerphone fill="#0c2b4b" size={30} />
                </div>
                <span className="max-md:hidden">|</span>
                <div>
                  <h1>
                    {new Date(item.uploadDate).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h1>
                </div>

                <span className="max-md:hidden">|</span>
                <div className="w-72 text-wrap ">
                  <h1 className="flex text-wrap">{item.title}</h1>
                </div>

                <button>{"See More >>"}</button>
              </div>
            ))}
        <button className="font-manguiera text-lg text-0">More</button>
      </div>
    </div>
  );
}
