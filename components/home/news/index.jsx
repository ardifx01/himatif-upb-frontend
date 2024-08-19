import { React, useEffect, useState } from "react";
import fetchData from "@/components/home/news/fetchDataHome";
import { HiSpeakerphone } from "react-icons/hi";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

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

  const handleMoreClick = (id) => {
    window.location.href = `/news/${id}`;
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
                } rounded-setup items-center p-3 border-x-2 border-y-2 max-md:rounded-3xl hover:scale-105 transition-all duration-500 ease-in-out border-[#fff]`}
                key={item.id}
                onClick={() => handleMoreClick(item.id)}
              >
                <div
                  className="p-2 bg-0 rounded-full max-md:p-1"
                  style={{
                    backgroundColor: `#${Math.floor(
                      Math.random() * 16777215
                    ).toString(16)}`,
                  }}
                >
                  <HiSpeakerphone
                    fill="#fff"
                    size={50}
                    className="max-md:size-10"
                  />
                </div>
                <span className="max-md:hidden">|</span>
                <div>
                  <h1 className="max-md:text-sm">
                    {new Date(item.uploadDate).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h1>
                </div>

                <span className="max-md:hidden">|</span>
                <div className="w-72 text-wrap max-md:w-36">
                  <h1 className="flex text-wrap text-1xl max-md:text-sm">
                    {item.title.substring(0, 50) + "..."}
                  </h1>
                </div>

                <button className="pr-10 max-md:hidden hover:text-1 hover:scale-105 transition-all ease-in-out max-md:pr-5 max-md:text-xs">
                  {"See Detail  "}
                </button>
              </div>
            ))}
        <AnimatedShinyText
          shimmerWidth={200}
          className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-2xl max-md:text-sm hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 cursor-pointer "
        >
          <span onClick={handleClick}>✨See More News</span>
        </AnimatedShinyText>
      </div>
    </div>
  );
}
