import api from "@/config/api";

const fetchDataProfile = async () => {
  try {
    const response = await fetch(`${api}/profile/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network Error: " + response.message);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error: " + err.message);
  }
};

export async function getStaticProps() {
  try {
    const data = await fetchData();
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

export default fetchDataProfile;
