import api from "@/config/api";

const fetchDataGalery = async (departement) => {
  try {
    const response = await fetch(`${api}/galery/${departement}`, {
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
    console.error(`Error fetching data: ${error.message}`);
  }
};

export default fetchDataGalery;
