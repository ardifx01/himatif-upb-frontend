import { galleryData } from "../../data/dummyData";

const fetchDataGalery = async (departement) => {
  try {
    // Menggunakan dummy data lokal
    console.log(`Using dummy gallery data for: ${departement}`);
    const data = galleryData[departement];
    if (!data) {
      console.warn(`No dummy data found for gallery: ${departement}`);
      return [];
    }
    return data;
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
    return [];
  }
};

export default fetchDataGalery;
