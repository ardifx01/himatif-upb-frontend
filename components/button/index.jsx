function Button({ text, onClick }) {
  return (
    <div
      className="bg-gradient-to-r from-0 to-5 text-white p-2 font-poppins shadow-xl hover:shadow-2xl w-full text-lg rounded-setup hover:bg-gradient-to-l border-[1px] border-white flex justify-between px-5"
      onClick={onClick}
    >
      <h1> {text}</h1>
      <h1>{">>"}</h1>
    </div>
  );
}

export default Button;
