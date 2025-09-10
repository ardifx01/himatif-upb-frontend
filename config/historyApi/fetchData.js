import { historyData } from "../../data/dummyData";

const fetchDataHistory = async () => {
  try {
    // Menggunakan dummy data lokal
    console.log("Using dummy history data");
    return historyData;
  } catch (err) {
    console.error("Error: " + err.message);
    return [];
  }
};

export async function getStaticProps() {
  try {
    const data = await fetchDataHistory();
    return {
      props: {
        profile: data,
      },
      revalidate: 60,
    };
  } catch (err) {
    console.error("Error in getStaticProps", err);
    return {
      props: {
        profile: [],
      },
      revalidate: 60,
    };
  }
}

export default fetchDataHistory;
