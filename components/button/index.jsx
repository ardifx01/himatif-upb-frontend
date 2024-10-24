function Button({ text, onClick }) {
  return (
    <button
      className="bg-gradient-to-r from-0 to-5 text-white p-2 shadow-xl hover:shadow-2xl w-full text-xl rounded-setup hover:bg-gradient-to-l border-[2px] border-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
