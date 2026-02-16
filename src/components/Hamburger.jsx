import { useState } from "react";

export default function Hamburger(params) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-6 h-4 flex flex-col justify-between"
    >
      <div
        className={`duration-300 h-0.75 bg-white rounded ${open ? "rotate-35 w-6 origin-top-left" : "w-6"}`}
      ></div>
      <div
        className={`duration-300 w-full h-0.75 bg-white rounded ${open ? "opacity-0" : "opacity-100"}`}
      ></div>
      <div
        className={`duration-300 h-0.75 bg-white rounded  ${open ? "-rotate-35 w-6 origin-bottom-left" : "w-6"}`}
      ></div>
    </button>
  );
}
