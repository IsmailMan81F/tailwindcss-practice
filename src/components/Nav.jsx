import { useState } from "react";

export default function Nav(params) {
  const links = ["Dashboard", "Team", "Projects", "Calendar"].map((link) => (
    <li
      tabIndex={"0"}
      className="py-2 px-4 border-l-5 border-transparent text-[#D1D5DC] hover:border-white/20 focus:border-[#615FFF] hover:bg-white/5 focus:bg-[#1D2344] focus:text-[#615FFF]"
    >
      <a href="/" className=" w-full ">
        {link}
      </a>
    </li>
  ));

  const listOptions = ["Your Profile", "Settings", "Sign out"].map((option) => (
    <li className="text-[#d1d5dc94] py-2 px-5 hover:text-white hover:bg-white/5">
      <a href="/">{option}</a>
    </li>
  ));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#172030] border border-[#2E3745] w-full font-[Poppins] flex flex-col gap-2">
      <div className="flex p-4 pl-3 justify-between">
        <div className="flex gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="h-9 w-9 bg-[#151c29] hover:bg-[#1d2739] rounded focus:outline-2 focus:outline-white"
          ></button>
          <div className="h-9 w-9 bg-[#6366F1]"></div>
        </div>
        <button className="flex items-center gap-3 bg-[#615FFF] hover:bg-[#817fff] px-3.5 rounded-sm">
          <div className="h-3 w-3 bg-white"></div>
          <span className="text-white font-semibold text-sm">New Job</span>
        </button>
      </div>
      <div className={`${!isOpen ? "hidden" : ""}`}>
        <div>
          <ul className="flex flex-col gap-1">{links}</ul>
        </div>
        <div className="border-t border-[#2E3745]">
          <div className="flex justify-between p-5">
            <div className="flex gap-2 items-center">
                <div className="w-10 h-10 rounded-full bg-[#C9CBCA]"></div>
                <div>
                    <h4 className="text-white">Tom Cook</h4>
                    <p className="text-[#d1d5dc94] text-sm">tom@example.com</p>
                </div>
            </div>
            <button></button>
          </div>
          <div className="pb-3">
            <ul className="flex flex-col gap-1">{listOptions}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
