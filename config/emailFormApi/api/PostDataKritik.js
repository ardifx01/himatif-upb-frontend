const postData = async (data) => {
  try {
    // Simulasi pengiriman kritik saran dengan dummy response
    console.log("Simulating kritik saran send with data:", data);

    // Simulasi delay seperti pengiriman real
    await new Promise((resolve) => setTimeout(resolve, 800));

    const result = {
      success: true,
      message: "Kritik dan saran berhasil dikirim (dummy response)",
      data: data,
      timestamp: new Date().toISOString(),
    };

    console.log("Dummy kritik saran response:", result);
    return result;
  } catch (error) {
    console.error(
      "There was a problem with the kritik saran operation:",
      error
    );
    throw error;
  }
};

export default postData;
