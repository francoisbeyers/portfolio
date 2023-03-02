function Button({ btnText }) {
  return (
    <button
      className="group relative block overflow-hidden opacity-[1] transition-opacity duration-300 ease-in-out hover:opacity-[1] border-orange border-2 rounded-full px-4 font-bold text-lg md:text-xl"
      type="button"
    >
      <span className="block transition-transform duration-[350ms] ease-in-out md:group-hover:translate-y-[-110%] py-2 text-gray-400">
        {btnText}
      </span>
      <span className="transition-translate absolute inset-0 block translate-y-full duration-[350ms] ease-in-out md:group-hover:translate-y-0 py-2 text-gray-400">
        {btnText}
      </span>
    </button>
  );
}
export default Button;
