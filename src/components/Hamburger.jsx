export default function Hamburger({ onClick, isOpen }) {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="w-6 h-4 flex flex-col justify-between md:hidden"
    >
      <div
        className={`duration-300 h-0.75 w-6 bg-white rounded ${isOpen && "rotate-45 translate-y-[230%] w-6.5"}`}
      ></div>
      <div
        className={`duration-300 w-full h-0.75 bg-white rounded ${isOpen ? "opacity-0" : "opacity-100"}`}
      ></div>
      <div
        className={`duration-300 h-0.75 bg-white rounded  ${isOpen && "-rotate-45 -translate-y-1.5 w-6.5"}`}
      ></div>
    </button>
  );
}
