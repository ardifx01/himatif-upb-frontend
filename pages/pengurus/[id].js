// pages/user/[id].js
import { useRouter } from "next/router";
import Link from "next/link";

const User = () => {
  const router = useRouter();
  const { id } = router.query;

  // Contoh beberapa data untuk 5 user yang berbeda
  const userData = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
    { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
    { id: 3, name: "Alex Smith", email: "alex.smith@example.com", age: 28 },
    {
      id: 4,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      age: 32,
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      age: 35,
    },
  ];

  // Menemukan data user berdasarkan ID
  const foundUser = userData.find((user) => user.id === parseInt(id));

  if (!foundUser) {
    return <div>User tidak ditemukan</div>;
  }

  return (
    <div>
      <h1>User ID: {id}</h1>
      <p>Nama: {foundUser.name}</p>
      <p>Email: {foundUser.email}</p>
      <p>Umur: {foundUser.age} tahun</p>
      <Link href="/">Kembali ke Beranda</Link>
    </div>
  );
};

export default User;
