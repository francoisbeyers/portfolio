function Button({ btnText }) {
  return (
    <button className="relative inline-block h-12 px-6 mx-2 overflow-hidden text-xl leading-10 text-center transition duration-300 ease-in-out bg-transparent border-2 rounded-full shadow-lg text-orange border-orange hover:bg-orange md:px-10 md:py-1 rollover">
      <span className="roll-text">{btnText}</span>
      <span className="text-white roll-text">{btnText}</span>
    </button>
  );
}
export default Button;
