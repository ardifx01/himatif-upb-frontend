-- --------------------------------------------------------
-- Host:                         localhost
-- Versi server:                 8.0.30 - MySQL Community Server - GPL
-- OS Server:                    Win64
-- HeidiSQL Versi:               12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- membuang struktur untuk table db_himatif.banner
DROP TABLE IF EXISTS `banner`;
CREATE TABLE IF NOT EXISTS `banner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `uploadDate` datetime DEFAULT NULL,
  `priority` tinyint(1) NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `banner_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `banner_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `banner_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Membuang data untuk tabel db_himatif.banner: ~0 rows (lebih kurang)

-- membuang struktur untuk table db_himatif.content
DROP TABLE IF EXISTS `content`;
CREATE TABLE IF NOT EXISTS `content` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `label` varchar(255) NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `content_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `content_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `content_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Membuang data untuk tabel db_himatif.content: ~0 rows (lebih kurang)

-- membuang struktur untuk table db_himatif.departement
DROP TABLE IF EXISTS `departement`;
CREATE TABLE IF NOT EXISTS `departement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `proker` varchar(255) DEFAULT NULL,
  `updateDate` datetime DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `departement_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `departement_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `departement_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Membuang data untuk tabel db_himatif.departement: ~0 rows (lebih kurang)
REPLACE INTO `departement` (`id`, `name`, `description`, `proker`, `updateDate`, `userId`, `createdAt`, `updatedAt`) VALUES
	(1, 'Pengembangan Organisasi', 'Mengelola dan meningkatkan efektivitas struktur organisasi serta pengembangan kapasitas anggota.', 'Mengadakan pelatihan kepemimpinan, menyusun struktur organisasi yang efektif, serta melaksanakan evaluasi kinerja organisasi.', '2024-11-20 06:21:20', 1, '2024-11-20 06:21:20', '2024-11-20 07:15:46'),
	(2, 'Hubungan Internal dan External', 'Bertanggung jawab atas pengelolaan hubungan dengan pihak internal organisasi serta pihak eksternal seperti mitra, sponsor, dan pihak terkait lainnya.', 'Mengadakan kegiatan networking, menjalin kemitraan dengan pihak eksternal, dan menyelenggarakan acara kolaborasi antar organisasi.', '2024-11-20 07:15:10', 1, '2024-11-20 07:15:10', '2024-11-20 07:15:10'),
	(3, 'Penelitian dan Pengembangan', 'Berfokus pada eksplorasi, penelitian, dan pengembangan ide-ide baru untuk kemajuan organisasi.', 'Melakukan survei dan analisis kebutuhan anggota, mengembangkan inovasi program kerja, serta menyusun kajian strategis untuk kemajuan organisasi.', '2024-11-20 07:15:17', 1, '2024-11-20 07:15:17', '2024-11-20 07:15:17'),
	(4, 'Media Komunikasi dan Informasi', 'Mengelola komunikasi organisasi melalui media sosial dan kanal informasi untuk meningkatkan visibilitas dan interaksi.', 'Membuat konten media sosial, menyusun buletin organisasi, serta menyelenggarakan kampanye online untuk mempromosikan program kerja organisasi.', '2024-11-20 07:15:27', 1, '2024-11-20 07:15:27', '2024-11-20 07:15:27'),
	(5, 'Minat dan Bakat', 'Mewadahi dan mendukung pengembangan minat serta bakat anggota organisasi melalui berbagai kegiatan kreatif.', 'Menyelenggarakan pelatihan keterampilan, mengadakan kompetisi internal, serta mendukung partisipasi anggota dalam kompetisi eksternal.', '2024-11-20 07:15:37', 1, '2024-11-20 07:15:37', '2024-11-20 07:15:37');

-- membuang struktur untuk table db_himatif.galery
DROP TABLE IF EXISTS `galery`;
CREATE TABLE IF NOT EXISTS `galery` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `departement` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `uploadDate` datetime DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `galery_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `galery_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `galery_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Membuang data untuk tabel db_himatif.galery: ~4 rows (lebih kurang)
REPLACE INTO `galery` (`id`, `title`, `departement`, `description`, `uploadDate`, `imageUrl`, `userId`, `createdAt`, `updatedAt`) VALUES
	(2, 'Bakti Desa', 'Pengembangan organisasi', 'Lorem', '2024-11-20 06:08:47', '/uploads/1732082927091-1589165051228.jpg', 1, '2024-11-20 06:08:47', '2024-11-20 06:08:47'),
	(3, 'Bakti Desa', 'Litbang', 'Lorem', '2024-11-20 06:08:54', '/uploads/1732082933999-1589165051228.jpg', 1, '2024-11-20 06:08:54', '2024-11-20 06:08:54'),
	(4, 'Bakti Desa', 'Litbang', 'Lorem', '2024-11-20 06:08:55', '/uploads/1732082935510-1589165051228.jpg', 1, '2024-11-20 06:08:55', '2024-11-20 06:08:55'),
	(5, 'Bakti Desa', 'Litbang', 'Lorem', '2024-11-20 06:09:14', '/uploads/1732082954042-1589165051228.jpg', 1, '2024-11-20 06:09:14', '2024-11-20 06:09:14'),
	(6, 'Bakti Desa', 'Pengembangan Organisasi', 'Lorem', '2024-11-20 06:30:42', '/uploads/1732084242521-1589165051228.jpg', 1, '2024-11-20 06:30:42', '2024-11-20 06:30:42'),
	(7, 'Bakti Desa', 'Pengembangan Organisasi', 'Lorem', '2024-11-20 06:30:44', '/uploads/1732084244126-1589165051228.jpg', 1, '2024-11-20 06:30:44', '2024-11-20 06:30:44'),
	(8, 'Bakti Desa', 'Pengembangan Organisasi', 'Lorem', '2024-11-20 06:30:45', '/uploads/1732084245040-1589165051228.jpg', 1, '2024-11-20 06:30:45', '2024-11-20 06:30:45'),
	(9, 'Bakti Desa', 'Pengembangan Organisasi', 'Lorem', '2024-11-20 06:30:45', '/uploads/1732084245881-1589165051228.jpg', 1, '2024-11-20 06:30:45', '2024-11-20 06:30:45'),
	(10, 'Bakti Desa', 'Pengembangan Organisasi', 'Lorem', '2024-11-20 06:30:46', '/uploads/1732084246736-1589165051228.jpg', 1, '2024-11-20 06:30:46', '2024-11-20 06:30:46'),
	(11, 'Bakti Desa', 'Pengembangan Organisasi', 'Lorem', '2024-11-20 06:30:47', '/uploads/1732084247591-1589165051228.jpg', 1, '2024-11-20 06:30:47', '2024-11-20 06:30:47'),
	(12, 'Bakti Desa', 'Pengembangan Organisasi', 'Lorem', '2024-11-20 06:30:48', '/uploads/1732084248384-1589165051228.jpg', 1, '2024-11-20 06:30:48', '2024-11-20 06:30:48');

-- membuang struktur untuk table db_himatif.history
DROP TABLE IF EXISTS `history`;
CREATE TABLE IF NOT EXISTS `history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `updateDate` datetime DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `history_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `history_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `history_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Membuang data untuk tabel db_himatif.history: ~0 rows (lebih kurang)

-- membuang struktur untuk table db_himatif.news
DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `uploader` varchar(255) NOT NULL,
  `uploadDate` datetime DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `news_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `news_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `news_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Membuang data untuk tabel db_himatif.news: ~0 rows (lebih kurang)

-- membuang struktur untuk table db_himatif.profile
DROP TABLE IF EXISTS `profile`;
CREATE TABLE IF NOT EXISTS `profile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `updateDate` datetime DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `profile_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `profile_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `profile_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Membuang data untuk tabel db_himatif.profile: ~0 rows (lebih kurang)
REPLACE INTO `profile` (`id`, `title`, `body`, `updateDate`, `userId`, `createdAt`, `updatedAt`) VALUES
	(1, 'profile', 'HIMATIF (Himpunan Mahasiswa Teknik Informatika) Universitas Pelita Bangsa adalah organisasi mahasiswa yang berada di bawah naungan Program Studi Teknik Informatika. Sebagai wadah komunikasi, informasi, dan kolaborasi, HIMATIF hadir untuk membantu mahasiswa tidak hanya dalam memperdalam ilmu Teknik Informatika, tetapi juga dalam mengembangkan soft skills yang penting di era digital. <br/> <br/>  Dengan beragam kegiatan mulai dari seminar teknologi terbaru, workshop coding, hingga kompetisi IT, HIMATIF menciptakan lingkungan yang mendorong inovasi dan kolaborasi antar mahasiswa. Bergabung dengan HIMATIF berarti membuka pintu menuju pengalaman praktis, jaringan profesional, dan kesempatan untuk berkarya di dunia Teknologi Informasi yang terus berkembang.', '2024-11-20 06:09:52', 1, '2024-11-20 06:09:52', '2024-11-20 06:09:52');

-- membuang struktur untuk table db_himatif.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `username_2` (`username`),
  UNIQUE KEY `username_3` (`username`),
  UNIQUE KEY `username_4` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Membuang data untuk tabel db_himatif.user: ~0 rows (lebih kurang)
REPLACE INTO `user` (`id`, `username`, `name`, `password`, `createdAt`, `updatedAt`) VALUES
	(1, 'admin', 'Super Ali Admin', '$2a$10$2fksS1SE6BtFw4PV6lbx0.Zj3CjEqmloxTy3rAoOiosL4XDhj2WGm', '2024-11-20 06:04:38', '2024-11-20 06:04:38');

-- membuang struktur untuk table db_himatif.visimisi
DROP TABLE IF EXISTS `visimisi`;
CREATE TABLE IF NOT EXISTS `visimisi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `label` varchar(255) NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `visimisi_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `visimisi_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `visimisi_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Membuang data untuk tabel db_himatif.visimisi: ~0 rows (lebih kurang)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
