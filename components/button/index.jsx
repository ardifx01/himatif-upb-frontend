import Link from "next/link";

function Button({ text, link }) {
  if (!link) return null; // Tidak ada link, maka tidak tampilkan tombol
  return (
    <Link href={link} passHref>
      <li className="bg-gradient-to-r from-0 to-5 text-white p-2 font-poppins shadow-xl hover:shadow-2xl w-full text-lg rounded-lg hover:bg-gradient-to-l border-[1px] border-white flex justify-between px-5">
        <span>{text}</span>
        <span>{">>"}</span>
      </li>
    </Link>
  );
}

export default Button;
