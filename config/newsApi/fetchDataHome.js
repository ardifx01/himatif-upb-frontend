import { newsData } from "../../data/dummyData";

const fetchData = async () => {
  try {
    // Menggunakan dummy data lokal
    console.log("Using dummy news data");
    return newsData;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Tidak menghentikan proses jika gagal fetch
    return [];
  }
};

export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: {
      news: data,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default fetchData;
