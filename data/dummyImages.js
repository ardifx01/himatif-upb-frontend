// Dummy images data untuk galeri dan berita
// Menggunakan gambar yang sudah ada di folder public/image

export const dummyImages = {
  // Gambar untuk galeri
  gallery: [
    "/image/banner.jpg",
    "/image/banner1.jpg",
    "/image/logo.png",
    "/image/logo.jpeg",
  ],

  // Gambar untuk berita
  news: ["/image/banner.jpg", "/image/banner1.jpg"],

  // Gambar untuk staff
  staff: ["/image/banner.jpg", "/image/banner1.jpg"],

  // Gambar untuk departemen
  departments: {
    "Minat dan Bakat": "/image/miba_logo.png",
    "Pengembangan Organisasi": "/image/po_logo.png",
    "Hubungan Internal dan External": "/image/hubinek_logo.png",
    "Media Komunikasi dan Informasi": "/image/medkom_logo.png",
    "Penelitian dan Pengembangan": "/image/litbang_logo.png",
  },
};

// Fungsi untuk mendapatkan gambar random
export const getRandomImage = (category = "gallery") => {
  const images = dummyImages[category];
  if (Array.isArray(images)) {
    return images[Math.floor(Math.random() * images.length)];
  }
  return "/image/banner.jpg"; // fallback image
};

// Fungsi untuk mendapatkan gambar berdasarkan ID
export const getImageById = (id, category = "gallery") => {
  const images = dummyImages[category];
  if (Array.isArray(images)) {
    return images[id % images.length];
  }
  return "/image/banner.jpg"; // fallback image
};
