import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { staffData } from "../../data/dummyData";

const StaffDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Menemukan data staff berdasarkan ID
  const foundStaff = staffData.find((staff) => staff.id === parseInt(id));

  if (!foundStaff) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Staff tidak ditemukan</h1>
        <Link href="/staff" className="text-blue-500 hover:underline">
          Kembali ke Daftar Staff
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/staff"
          className="text-blue-500 hover:underline mb-4 inline-block"
        >
          ← Kembali ke Daftar Staff
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <div className="relative h-64 md:h-full">
                <Image
                  src={foundStaff.imageUrl}
                  alt={foundStaff.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 p-6">
              <h1 className="text-3xl font-bold mb-2">{foundStaff.name}</h1>
              <p className="text-xl text-blue-600 font-semibold mb-2">
                {foundStaff.position}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                {foundStaff.department}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Biografi</h3>
                <p className="text-gray-700">{foundStaff.bio}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Kontak</h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {foundStaff.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {foundStaff.phone}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Media Sosial</h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Instagram:</span>{" "}
                    {foundStaff.socialMedia.instagram}
                  </p>
                  <p>
                    <span className="font-medium">LinkedIn:</span>{" "}
                    {foundStaff.socialMedia.linkedin}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;
