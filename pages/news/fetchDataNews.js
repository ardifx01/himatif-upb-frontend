import { newsData } from "../../data/dummyData";

const fetchData = async () => {
  try {
    // Menggunakan dummy data lokal
    console.log("Using dummy news data");
    return newsData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export async function getServerSideProps() {
  try {
    const data = await fetchData();
    return {
      props: {
        news: data,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      props: {
        news: [],
      },
    };
  }
}

export default fetchData;
