import React from "react";
import { staffData } from "../../data/dummyData";
import Link from "next/link";
import Image from "next/image";

export default function StaffIndex() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Struktur Kepengurusan HIMATIF
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffData.map((staff) => (
          <div
            key={staff.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={staff.imageUrl}
                alt={staff.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{staff.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{staff.position}</p>
              <p className="text-gray-600 mb-2">{staff.department}</p>
              <p className="text-sm text-gray-500 mb-4">{staff.bio}</p>
              <div className="flex space-x-2">
                <Link
                  href={`/staff/${staff.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
