import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:4000/news");
    return response.data;
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
