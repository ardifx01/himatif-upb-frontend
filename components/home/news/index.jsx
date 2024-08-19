import { React, useEffect, useState } from "react";
import fetchData from "./fetchData";
import { HiSpeakerphone } from "react-icons/hi";

export default function Index() {
  const [news, setNews] = useState();

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchData();
      setNews(data);
    };
    getNews();
  }, []);

  const handleClick = () => {
    window.location.href = "/news";
  };

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
                    : "justify-between gap-20 max-md:gap-4"
                } rounded-setup items-center p-3 border-x-2 border-y-2 border-[#fff]`}
                key={item.id}
              >
                <div
                  className="p-2 bg-0 rounded-full"
                  style={{
                    backgroundColor: `#${Math.floor(
                      Math.random() * 16777215
                    ).toString(16)}`,
                  }}
                >
                  <HiSpeakerphone fill="#fff" size={50} />
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
                  <h1 className="flex text-wrap  text-1xl">
                    {item.title.substring(0, 50) + "..."}
                  </h1>
                </div>

                <button className="pr-10">{"See More  "}</button>
              </div>
            ))}
        <button
          onClick={handleClick}
          className="font-manguiera hover:bg-1 py-2 px-3 rounded-setup hover:text-white text-lg text-0"
        >
          More
        </button>
      </div>
    </div>
  );
}
