import api from "@/config/api";

const fetchData = async () => {
  try {
    const response = await fetch(`${api}/news`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
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
