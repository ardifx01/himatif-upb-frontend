import { departmentData } from "../../data/dummyData";

const fetchDataDepartement = async (departement) => {
  try {
    // Menggunakan dummy data lokal
    console.log(`Using dummy department data for: ${departement}`);
    const data = departmentData[departement];
    if (!data) {
      console.warn(`No dummy data found for department: ${departement}`);
      return {
        id: 0,
        name: departement,
        description: "Data departemen tidak tersedia",
        proker: "Program kerja tidak tersedia",
        logo: "/image/logo.png",
        vision: "Visi tidak tersedia",
        mission: "Misi tidak tersedia",
      };
    }
    return data;
  } catch (error) {
    console.error(`Error fetching departement data: ${error.message}`);
    return null;
  }
};

export default fetchDataDepartement;
