import { bannerData } from "../../data/dummyData";

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
    // Menggunakan dummy data lokal
    console.log("Using dummy banner data");
    return bannerData;
  } catch (error) {
    console.error(`Error fetching banner data: ${error.message}`);
    return [];
  }
};

export default fetchDatabanner;
