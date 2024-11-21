import React, { useState, useRef, useEffect } from "react";
import postData from "@/config/emailFormApi/api/PostDataKritik";

export default function Index() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  const [kritik, setKritik] = useState({
    kritik: "",
    saran: "",
  });

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    setIsSending(false);
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsFormVisible(false);
      setIsSending(false);
    }
  };

  const handleSend = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsFormVisible(false);
    }, 2000);

    try {
      const response = await postData(kritik);
      console.log("Saran Send Successful", response);
      setKritik({
        kritik: "",
        saran: "",
      });
    } catch (error) {
      console.error(error, "error send Data");
      alert("Error sending" + error.message);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed w-100 gap-2 bottom-10 z-50 right-10 flex flex-col-reverse ">
      <button
        className={`bg-5 hover:animate-jiggle py-2 flex px-4 justify-center text-white rounded-setup`}
        onClick={toggleFormVisibility}
      >
        {isFormVisible ? " 😉 Close" : " 😎 Saran ?"}
      </button>
      <div
        className={
          isFormVisible
            ? "flex bg-0 border-white border-2 gap-3 rounded-3xl p-5 flex-col w-100"
            : "hidden"
        }
        ref={formRef}
      >
        <h4 className="font-poppins text-white">
          {isSending ? "Terimakasih" : "Ada Saran atau Kritik buat Kita?"}
        </h4>
        <form className="flex flex-col gap-3" action="">
          {isSending ? (
            <p className=" font-poppins text-white">
              Kritik dan Sarannya
              <br /> Kita terima dengan baik 😊
            </p>
          ) : (
            <>
              <input
                className="rounded-setup px-3 py-1"
                id="kritik"
                value={kritik.kritik}
                onChange={(e) =>
                  setKritik({ ...kritik, kritik: e.target.value })
                }
                type="text"
                placeholder="Kritik"
              />
              <input
                className="rounded-setup px-3 py-1"
                id="saran"
                value={kritik.saran}
                onChange={(e) =>
                  setKritik({ ...kritik, saran: e.target.value })
                }
                type="text"
                placeholder="Saran"
              />
              <button
                onClick={handleSend}
                className="bg-2 rounded-setup px-3 py-1 font-poppins text-white"
              >
                Kirim
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
