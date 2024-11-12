import api from "../api";

export async function getStaticProps() {
  try {
    const data = await fetchDatabanner();
    return {
      props: {
        banner: data,
      },
      revalidate: 60,
    };
  } catch (err) {
    console.error("Error in getStaticProps", err);
    return {
      props: {
        banner: [],
      },
      revalidate: 60,
    };
  }
}

const fetchDatabanner = async () => {
  try {
    const response = await fetch(`${api}/banner`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Network Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching banner data: ${error.message}`);
  }
};

export default fetchDatabanner;
