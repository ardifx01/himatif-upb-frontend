/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import fetchData from "@/pages/news/njay";
import { useState, useEffect } from "react";
import SparklesText from "@/components/magicui/sparkles-text";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

const News = () => {
  const [news, setNews] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchData();
      setNews(data);
    };
    getNews();
  }, []);

  const foundNews = news.find((item) => item.id === parseInt(id));

  if (!foundNews) {
    return (
      <div className="flex flex-col gap-10 justify-center items-center">
        <SparklesText
          className="max-md:text-l text-2xl text-0 pt-10"
          sparklesCount={5}
          text="Berita Tidak Ditemukan"
        />
        <AnimatedShinyText
          shimmerWidth={200}
          className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 cursor-pointer "
        >
          <span
            onClick={() => {
              window.location.href = "/";
            }}
          >
            ✨Back to Home
          </span>
        </AnimatedShinyText>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div key={id} className="flex flex-col justify-between  p-20 text-0">
        <div className="flex justify-between w-full">
          <h1 className="font-semibold text-2xl">Himatif News</h1>
          <p>
            {new Date(foundNews.uploadDate).toLocaleString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              timeZoneName: "short",
            })}
          </p>
        </div>
        <div className="flex max-md:flex-col items-center py-20 text-wrap">
          <SparklesText
            className="max-md:text-l text-4xl text-0 pt-10"
            sparklesCount={5}
            text={foundNews.title}
          />
          <img
            className=" shadow-md"
            src={`http://localhost:4000${foundNews.imageUrl}`}
            alt={foundNews.title}
            width={1000}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: foundNews.body }} />
      </div>

      <AnimatedShinyText
        shimmerWidth={200}
        className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 cursor-pointer "
      >
        <span
          onClick={() => {
            window.location.href = "/";
          }}
        >
          ✨Back to Home
        </span>
      </AnimatedShinyText>
    </div>
  );
};

export default News;
