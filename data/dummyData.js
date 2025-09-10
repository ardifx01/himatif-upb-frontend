// Dummy data untuk semua API endpoints

// Banner Data
export const bannerData = [
  {
    id: 1,
    title: "Selamat Datang di HIMATIF",
    imageUrl: "/image/banner.jpg",
    priority: true,
    description: "Himpunan Mahasiswa Teknik Informatika Universitas Pelita Bangsa"
  },
  {
    id: 2,
    title: "Kegiatan HIMATIF 2024",
    imageUrl: "/image/banner1.jpg",
    priority: false,
    description: "Berbagai kegiatan menarik dari HIMATIF"
  },
  {
    id: 3,
    title: "Prestasi Mahasiswa",
    imageUrl: "/image/banner.jpg",
    priority: false,
    description: "Prestasi membanggakan dari mahasiswa Teknik Informatika"
  }
];

// Department Data
export const departmentData = {
  "Minat dan Bakat": {
    id: 1,
    name: "Minat dan Bakat",
    description: "Departemen yang mengembangkan minat dan bakat mahasiswa dalam berbagai bidang teknologi dan kreativitas. Kami menyediakan wadah untuk mengembangkan potensi diri melalui berbagai kegiatan dan kompetisi.",
    proker: "Program Kerja:\n1. Workshop Programming\n2. Kompetisi Hackathon\n3. Pelatihan UI/UX Design\n4. Seminar Teknologi Terkini\n5. Bootcamp Web Development",
    logo: "/image/miba_logo.png",
    vision: "Menjadi departemen yang unggul dalam mengembangkan talenta mahasiswa di bidang teknologi",
    mission: "Menyediakan platform pengembangan diri yang komprehensif untuk mahasiswa"
  },
  "Pengembangan Organisasi": {
    id: 2,
    name: "Pengembangan Organisasi",
    description: "Departemen yang fokus pada pengembangan struktur organisasi dan manajemen HIMATIF. Bertanggung jawab dalam koordinasi antar departemen dan pengembangan sistem organisasi yang efektif.",
    proker: "Program Kerja:\n1. Rapat Koordinasi Bulanan\n2. Evaluasi Kinerja Organisasi\n3. Pelatihan Leadership\n4. Workshop Manajemen Waktu\n5. Program Mentoring",
    logo: "/image/po_logo.png",
    vision: "Menciptakan organisasi yang solid dan berkinerja tinggi",
    mission: "Mengembangkan sistem manajemen organisasi yang efektif dan efisien"
  },
  "Hubungan Internal dan External": {
    id: 3,
    name: "Hubungan Internal dan External",
    description: "Departemen yang mengelola hubungan dengan pihak internal kampus dan eksternal seperti perusahaan, komunitas, dan organisasi lain. Membangun jaringan yang luas untuk kemajuan HIMATIF.",
    proker: "Program Kerja:\n1. Kunjungan Industri\n2. Kerjasama dengan Perusahaan\n3. Networking Event\n4. Alumni Gathering\n5. Partnership Development",
    logo: "/image/hubinek_logo.png",
    vision: "Menjadi jembatan penghubung yang kuat antara HIMATIF dan dunia luar",
    mission: "Membangun relasi strategis untuk kemajuan organisasi dan mahasiswa"
  },
  "Media Komunikasi dan Informasi": {
    id: 4,
    name: "Media Komunikasi dan Informasi",
    description: "Departemen yang mengelola media komunikasi dan informasi HIMATIF. Bertanggung jawab dalam publikasi, dokumentasi, dan penyebaran informasi kepada seluruh anggota dan masyarakat umum.",
    proker: "Program Kerja:\n1. Content Creation\n2. Social Media Management\n3. Dokumentasi Kegiatan\n4. Press Release\n5. Media Partnership",
    logo: "/image/medkom_logo.png",
    vision: "Menjadi pusat informasi yang terpercaya dan informatif",
    mission: "Menyebarluaskan informasi dengan akurat dan menarik"
  },
  "Penelitian dan Pengembangan": {
    id: 5,
    name: "Penelitian dan Pengembangan",
    description: "Departemen yang fokus pada penelitian dan pengembangan inovasi teknologi. Mengadakan riset, seminar, dan pengembangan proyek-proyek teknologi terkini.",
    proker: "Program Kerja:\n1. Research Project\n2. Seminar Teknologi\n3. Innovation Challenge\n4. Paper Publication\n5. Technology Development",
    logo: "/image/litbang_logo.png",
    vision: "Menjadi pusat inovasi dan penelitian teknologi terdepan",
    mission: "Mengembangkan solusi teknologi yang bermanfaat bagi masyarakat"
  }
};

// Gallery Data
export const galleryData = {
  "Himatif": [
    {
      id: 1,
      title: "Kegiatan HIMATIF 2024",
      imageUrl: "/image/banner.jpg",
      description: "Berbagai kegiatan menarik dari HIMATIF tahun 2024",
      date: "2024-01-15",
      category: "Event"
    },
    {
      id: 2,
      title: "Seminar Teknologi",
      imageUrl: "/image/banner1.jpg",
      description: "Seminar tentang perkembangan teknologi terkini",
      date: "2024-02-20",
      category: "Seminar"
    },
    {
      id: 3,
      title: "Workshop Programming",
      imageUrl: "/image/banner.jpg",
      description: "Workshop belajar programming untuk pemula",
      date: "2024-03-10",
      category: "Workshop"
    }
  ],
  "Minat dan Bakat": [
    {
      id: 4,
      title: "Hackathon Competition",
      imageUrl: "/image/banner1.jpg",
      description: "Kompetisi hackathon tahunan HIMATIF",
      date: "2024-01-25",
      category: "Competition"
    },
    {
      id: 5,
      title: "UI/UX Design Workshop",
      imageUrl: "/image/banner.jpg",
      description: "Pelatihan desain UI/UX untuk mahasiswa",
      date: "2024-02-15",
      category: "Workshop"
    }
  ],
  "Pengembangan Organisasi": [
    {
      id: 6,
      title: "Leadership Training",
      imageUrl: "/image/banner1.jpg",
      description: "Pelatihan kepemimpinan untuk pengurus HIMATIF",
      date: "2024-01-30",
      category: "Training"
    },
    {
      id: 7,
      title: "Organizational Meeting",
      imageUrl: "/image/banner.jpg",
      description: "Rapat koordinasi organisasi bulanan",
      date: "2024-02-05",
      category: "Meeting"
    }
  ],
  "Hubungan Internal dan External": [
    {
      id: 8,
      title: "Company Visit",
      imageUrl: "/image/banner1.jpg",
      description: "Kunjungan ke perusahaan teknologi",
      date: "2024-02-10",
      category: "Visit"
    },
    {
      id: 9,
      title: "Networking Event",
      imageUrl: "/image/banner.jpg",
      description: "Event networking dengan alumni dan industri",
      date: "2024-03-05",
      category: "Event"
    }
  ],
  "Media Komunikasi dan Informasi": [
    {
      id: 10,
      title: "Content Creation Session",
      imageUrl: "/image/banner1.jpg",
      description: "Sesi pembuatan konten untuk media sosial",
      date: "2024-02-20",
      category: "Training"
    },
    {
      id: 11,
      title: "Photography Workshop",
      imageUrl: "/image/banner.jpg",
      description: "Workshop fotografi untuk dokumentasi",
      date: "2024-03-15",
      category: "Workshop"
    }
  ],
  "Penelitian dan Pengembangan": [
    {
      id: 12,
      title: "Research Presentation",
      imageUrl: "/image/banner1.jpg",
      description: "Presentasi hasil penelitian mahasiswa",
      date: "2024-02-25",
      category: "Presentation"
    },
    {
      id: 13,
      title: "Innovation Lab",
      imageUrl: "/image/banner.jpg",
      description: "Laboratorium inovasi teknologi",
      date: "2024-03-20",
      category: "Lab"
    }
  ]
};

// News Data
export const newsData = [
  {
    id: 1,
    title: "HIMATIF Mengadakan Seminar Teknologi Terkini",
    content: "Himpunan Mahasiswa Teknik Informatika (HIMATIF) Universitas Pelita Bangsa mengadakan seminar teknologi terkini dengan tema 'Artificial Intelligence dalam Kehidupan Sehari-hari'. Seminar ini menghadirkan pembicara dari industri teknologi terkemuka dan diikuti oleh lebih dari 200 peserta dari berbagai universitas.",
    imageUrl: "/image/banner.jpg",
    uploadDate: "2024-03-15T10:00:00Z",
    author: "Tim Media HIMATIF",
    category: "Seminar",
    tags: ["AI", "Technology", "Seminar"]
  },
  {
    id: 2,
    title: "Prestasi Membanggakan di Kompetisi Hackathon Nasional",
    content: "Tim mahasiswa HIMATIF berhasil meraih juara 2 dalam kompetisi Hackathon Nasional 2024. Tim yang terdiri dari 3 mahasiswa semester 6 ini mengembangkan aplikasi mobile untuk monitoring kesehatan mental dengan menggunakan teknologi AI. Prestasi ini membanggakan dan menunjukkan kualitas mahasiswa Teknik Informatika UPB.",
    imageUrl: "/image/banner1.jpg",
    uploadDate: "2024-03-10T14:30:00Z",
    author: "Departemen Minat dan Bakat",
    category: "Prestasi",
    tags: ["Hackathon", "Mobile App", "AI", "Mental Health"]
  },
  {
    id: 3,
    title: "Workshop Web Development untuk Pemula",
    content: "Departemen Minat dan Bakat HIMATIF mengadakan workshop web development untuk pemula. Workshop yang berlangsung selama 2 hari ini mengajarkan dasar-dasar HTML, CSS, dan JavaScript. Peserta juga diajarkan cara membuat website responsif dan modern. Workshop ini diikuti oleh 50 mahasiswa dari berbagai jurusan.",
    imageUrl: "/image/banner.jpg",
    uploadDate: "2024-03-05T09:15:00Z",
    author: "Departemen Minat dan Bakat",
    category: "Workshop",
    tags: ["Web Development", "HTML", "CSS", "JavaScript"]
  },
  {
    id: 4,
    title: "Kunjungan Industri ke Perusahaan Teknologi",
    content: "Departemen Hubungan Internal dan External HIMATIF mengadakan kunjungan industri ke salah satu perusahaan teknologi terkemuka di Jakarta. Kunjungan ini bertujuan untuk memberikan wawasan kepada mahasiswa tentang dunia kerja di industri teknologi. Mahasiswa dapat melihat langsung bagaimana teknologi dikembangkan dan digunakan dalam skala industri.",
    imageUrl: "/image/banner1.jpg",
    uploadDate: "2024-02-28T16:45:00Z",
    author: "Departemen Hubungan Internal dan External",
    category: "Kunjungan",
    tags: ["Industry Visit", "Technology", "Career"]
  },
  {
    id: 5,
    title: "Peluncuran Website HIMATIF yang Baru",
    content: "HIMATIF meluncurkan website baru dengan desain yang lebih modern dan user-friendly. Website baru ini dilengkapi dengan berbagai fitur seperti galeri foto, berita terkini, dan sistem pendaftaran online untuk berbagai kegiatan. Website ini dikembangkan oleh tim dari Departemen Media Komunikasi dan Informasi.",
    imageUrl: "/image/banner.jpg",
    uploadDate: "2024-02-20T11:20:00Z",
    author: "Departemen Media Komunikasi dan Informasi",
    category: "Pengumuman",
    tags: ["Website", "Launch", "Technology"]
  },
  {
    id: 6,
    title: "Program Mentoring untuk Mahasiswa Baru",
    content: "Departemen Pengembangan Organisasi HIMATIF meluncurkan program mentoring untuk mahasiswa baru. Program ini bertujuan untuk membantu mahasiswa baru beradaptasi dengan lingkungan kampus dan memberikan bimbingan dalam pengembangan karir. Setiap mahasiswa baru akan didampingi oleh senior yang berpengalaman.",
    imageUrl: "/image/banner1.jpg",
    uploadDate: "2024-02-15T13:10:00Z",
    author: "Departemen Pengembangan Organisasi",
    category: "Program",
    tags: ["Mentoring", "New Student", "Development"]
  }
];

// Profile Data
export const profileData = {
  id: 1,
  title: "Tentang HIMATIF",
  body: `
    <div class="profile-content">
      <h2>Himpunan Mahasiswa Teknik Informatika Universitas Pelita Bangsa</h2>
      
      <p>HIMATIF (Himpunan Mahasiswa Teknik Informatika) adalah organisasi mahasiswa yang berada di bawah naungan Universitas Pelita Bangsa. Organisasi ini didirikan dengan tujuan untuk mengembangkan potensi mahasiswa Teknik Informatika dalam berbagai aspek, baik akademik maupun non-akademik.</p>
      
      <h3>Sejarah Singkat</h3>
      <p>HIMATIF didirikan pada tahun 2010 oleh sekelompok mahasiswa Teknik Informatika yang memiliki visi untuk menciptakan wadah yang dapat mengembangkan kemampuan dan potensi mahasiswa di bidang teknologi informasi. Sejak didirikan, HIMATIF telah mengalami perkembangan yang signifikan dan menjadi salah satu organisasi mahasiswa yang aktif di kampus.</p>
      
      <h3>Visi</h3>
      <p>Menjadi himpunan mahasiswa yang unggul dalam mengembangkan potensi mahasiswa Teknik Informatika dan berkontribusi positif bagi kemajuan teknologi informasi di Indonesia.</p>
      
      <h3>Misi</h3>
      <ul>
        <li>Mengembangkan kemampuan akademik dan non-akademik mahasiswa Teknik Informatika</li>
        <li>Menyelenggarakan kegiatan yang mendukung pengembangan teknologi informasi</li>
        <li>Membangun jaringan dengan industri dan komunitas teknologi</li>
        <li>Mengadakan program yang bermanfaat bagi masyarakat</li>
        <li>Menjadi jembatan antara mahasiswa dan dunia industri</li>
      </ul>
      
      <h3>Struktur Organisasi</h3>
      <p>HIMATIF terdiri dari beberapa departemen yang masing-masing memiliki fokus dan tanggung jawab yang berbeda:</p>
      <ul>
        <li><strong>Departemen Minat dan Bakat:</strong> Mengembangkan talenta mahasiswa dalam berbagai bidang teknologi</li>
        <li><strong>Departemen Pengembangan Organisasi:</strong> Mengelola struktur dan manajemen organisasi</li>
        <li><strong>Departemen Hubungan Internal dan External:</strong> Mengelola hubungan dengan pihak internal dan eksternal</li>
        <li><strong>Departemen Media Komunikasi dan Informasi:</strong> Mengelola media komunikasi dan informasi</li>
        <li><strong>Departemen Penelitian dan Pengembangan:</strong> Fokus pada penelitian dan inovasi teknologi</li>
      </ul>
      
      <h3>Kegiatan Utama</h3>
      <p>HIMATIF menyelenggarakan berbagai kegiatan yang meliputi:</p>
      <ul>
        <li>Seminar dan workshop teknologi</li>
        <li>Kompetisi programming dan hackathon</li>
        <li>Kunjungan industri</li>
        <li>Program mentoring</li>
        <li>Kegiatan sosial dan pengabdian masyarakat</li>
        <li>Networking event dengan alumni dan industri</li>
      </ul>
      
      <h3>Pencapaian</h3>
      <p>Sejak didirikan, HIMATIF telah meraih berbagai pencapaian yang membanggakan, termasuk:</p>
      <ul>
        <li>Juara 1 Kompetisi Web Development Nasional 2023</li>
        <li>Juara 2 Hackathon Nasional 2024</li>
        <li>Penghargaan Organisasi Mahasiswa Terbaik di tingkat universitas</li>
        <li>Kerjasama dengan lebih dari 20 perusahaan teknologi</li>
        <li>Program mentoring yang telah membantu 500+ mahasiswa</li>
      </ul>
      
      <h3>Kontak</h3>
      <p>Untuk informasi lebih lanjut tentang HIMATIF, silakan hubungi:</p>
      <ul>
        <li>Email: himatif@pelitabangsa.ac.id</li>
        <li>Instagram: @himatif_upb</li>
        <li>Website: www.himatif-upb.com</li>
        <li>Alamat: Universitas Pelita Bangsa, Bekasi</li>
      </ul>
    </div>
  `,
  lastUpdated: "2024-03-15T10:00:00Z"
};

// History Data
export const historyData = [
  {
    id: 1,
    year: "2010",
    title: "Pendirian HIMATIF",
    description: "HIMATIF didirikan oleh sekelompok mahasiswa Teknik Informatika dengan visi mengembangkan potensi mahasiswa di bidang teknologi informasi.",
    imageUrl: "/image/banner.jpg"
  },
  {
    id: 2,
    year: "2012",
    title: "Pembentukan Struktur Organisasi",
    description: "HIMATIF membentuk struktur organisasi yang terdiri dari 5 departemen untuk mengoptimalkan kinerja organisasi.",
    imageUrl: "/image/banner1.jpg"
  },
  {
    id: 3,
    year: "2015",
    title: "Pertama Kali Meraih Prestasi Nasional",
    description: "Tim HIMATIF berhasil meraih juara 3 dalam kompetisi programming nasional, menjadi prestasi pertama di tingkat nasional.",
    imageUrl: "/image/banner.jpg"
  },
  {
    id: 4,
    year: "2018",
    title: "Kerjasama dengan Industri",
    description: "HIMATIF menjalin kerjasama dengan 5 perusahaan teknologi untuk program magang dan kunjungan industri.",
    imageUrl: "/image/banner1.jpg"
  },
  {
    id: 5,
    year: "2020",
    title: "Adaptasi Digital di Masa Pandemi",
    description: "HIMATIF berhasil beradaptasi dengan mengadakan kegiatan secara online dan tetap produktif di masa pandemi COVID-19.",
    imageUrl: "/image/banner.jpg"
  },
  {
    id: 6,
    year: "2022",
    title: "Ekspansi Program Mentoring",
    description: "Program mentoring HIMATIF diperluas untuk mencakup mahasiswa dari semua angkatan, tidak hanya mahasiswa baru.",
    imageUrl: "/image/banner1.jpg"
  },
  {
    id: 7,
    year: "2023",
    title: "Juara 1 Web Development Nasional",
    description: "Tim HIMATIF berhasil meraih juara 1 dalam kompetisi Web Development Nasional, prestasi tertinggi yang pernah diraih.",
    imageUrl: "/image/banner.jpg"
  },
  {
    id: 8,
    year: "2024",
    title: "Peluncuran Website Baru",
    description: "HIMATIF meluncurkan website baru dengan desain modern dan fitur yang lebih lengkap untuk melayani anggota dan masyarakat.",
    imageUrl: "/image/banner1.jpg"
  }
];

// Staff Data (untuk halaman staff)
export const staffData = [
  {
    id: 1,
    name: "Ahmad Rizki",
    position: "Ketua HIMATIF",
    department: "Pengembangan Organisasi",
    email: "ahmad.rizki@pelitabangsa.ac.id",
    phone: "081234567890",
    imageUrl: "/image/banner.jpg",
    bio: "Mahasiswa semester 7 Teknik Informatika dengan pengalaman 2 tahun di organisasi. Memiliki passion di bidang web development dan leadership.",
    socialMedia: {
      instagram: "@ahmadrizki",
      linkedin: "ahmad-rizki-upb"
    }
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    position: "Wakil Ketua HIMATIF",
    department: "Hubungan Internal dan External",
    email: "siti.nurhaliza@pelitabangsa.ac.id",
    phone: "081234567891",
    imageUrl: "/image/banner1.jpg",
    bio: "Mahasiswa semester 6 Teknik Informatika dengan keahlian di bidang UI/UX design dan public relations.",
    socialMedia: {
      instagram: "@sitinurhaliza",
      linkedin: "siti-nurhaliza-upb"
    }
  },
  {
    id: 3,
    name: "Budi Santoso",
    position: "Sekretaris Umum",
    department: "Media Komunikasi dan Informasi",
    email: "budi.santoso@pelitabangsa.ac.id",
    phone: "081234567892",
    imageUrl: "/image/banner.jpg",
    bio: "Mahasiswa semester 5 Teknik Informatika dengan keahlian di bidang content creation dan digital marketing.",
    socialMedia: {
      instagram: "@budisantoso",
      linkedin: "budi-santoso-upb"
    }
  },
  {
    id: 4,
    name: "Dewi Kartika",
    position: "Bendahara Umum",
    department: "Penelitian dan Pengembangan",
    email: "dewi.kartika@pelitabangsa.ac.id",
    phone: "081234567893",
    imageUrl: "/image/banner1.jpg",
    bio: "Mahasiswa semester 6 Teknik Informatika dengan keahlian di bidang data science dan financial management.",
    socialMedia: {
      instagram: "@dewikartika",
      linkedin: "dewi-kartika-upb"
    }
  },
  {
    id: 5,
    name: "Rizki Pratama",
    position: "Ketua Departemen Minat dan Bakat",
    department: "Minat dan Bakat",
    email: "rizki.pratama@pelitabangsa.ac.id",
    phone: "081234567894",
    imageUrl: "/image/banner.jpg",
    bio: "Mahasiswa semester 7 Teknik Informatika dengan keahlian di bidang mobile development dan competitive programming.",
    socialMedia: {
      instagram: "@rizkipratama",
      linkedin: "rizki-pratama-upb"
    }
  }
];
