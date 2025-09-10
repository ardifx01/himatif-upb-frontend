import { profileData } from "../../data/dummyData";

const fetchDataProfile = async () => {
  try {
    // Menggunakan dummy data lokal
    console.log("Using dummy profile data");
    return profileData;
  } catch (err) {
    console.error("Error: " + err.message);
    return null;
  }
};

export async function getStaticProps() {
  try {
    const data = await fetchDataProfile();
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
