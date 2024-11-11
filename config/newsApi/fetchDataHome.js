import api from "@/config/api";

const fetchData = async () => {
  try {
    const response = await fetch(`${api}/news`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
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
