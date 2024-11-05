import React, { useState } from "react";
import postData from "./PostData";

export default function EmailForm() {
  const [data, setData] = useState({
    subject: "",
    name: "",
    phone: "",
    email: "",
    company: "",
    body: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postData(data);
      console.log("Email Sent Successfully");
    } catch (error) {
      console.error("Email Sent Failed:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="subject">Subjek:</label>
        <input
          type="text"
          value={data.subject}
          onChange={(e) => setData({ ...data, subject: e.target.value })}
          placeholder="Masukkan subjek"
        />
        <label htmlFor="name">Nama:</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          placeholder="Masukkan nama Anda"
        />
        <label htmlFor="phone">Telepon:</label>
        <input
          type="text"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          placeholder="Masukkan nomor telepon Anda"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder="Masukkan email Anda"
        />
        <label htmlFor="company">Perusahaan:</label>
        <input
          type="text"
          value={data.company}
          onChange={(e) => setData({ ...data, company: e.target.value })}
          placeholder="Masukkan nama perusahaan Anda"
        />
        <label htmlFor="body">Pesan:</label>
        <textarea
          value={data.body}
          onChange={(e) => setData({ ...data, body: e.target.value })}
          placeholder="Masukkan pesan Anda"
        />
        <button type="submit">Kirim Email</button>
      </form>
    </div>
  );
}
