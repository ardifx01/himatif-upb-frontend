const postData = async (data) => {
  try {
    // Simulasi pengiriman email dengan dummy response
    console.log("Simulating email send with data:", data);

    // Simulasi delay seperti pengiriman email real
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const result = {
      success: true,
      message: "Email berhasil dikirim (dummy response)",
      data: data,
      timestamp: new Date().toISOString(),
    };

    console.log("Dummy email response:", result);
    return result;
  } catch (error) {
    console.error("There was a problem with the email operation:", error);
    throw error; // Menyebarkan error untuk ditangani oleh caller
  }
};

export default postData;
