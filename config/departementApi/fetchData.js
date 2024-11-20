import api from "@/config/api";

const fetchDataDepartement = async (departement) => {
  try {
    const response = await fetch(`${api}/departement/${departement}`, {
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
    console.error(`Error fetching departement data: ${error.message}`);
  }
};

export default fetchDataDepartement;
