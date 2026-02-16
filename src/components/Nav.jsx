import { useState } from "react";
import { SiTailwindcss } from "react-icons/si";
import { IoMenu } from "react-icons/io5";

export default function Nav(params) {
  const links = ["Dashboard", "Team", "Projects", "Calendar"].map((link) => (
    <li
      tabIndex={"0"}
      className="py-2 px-4 border-l-5 border-transparent text-[#D1D5DC] hover:border-white/20 focus:border-[#615FFF] hover:bg-white/5 focus:bg-[#1D2344] focus:text-[#615FFF] cursor-pointer md:border-0"
    >
      <a href="/" className=" w-full">
        {link}
      </a>
    </li>
  ));

  const listOptions = ["Your Profile", "Settings", "Sign out"].map((option) => (
    <li className="text-[#d1d5dc94] bg-[#1d2739] py-2 px-5 cursor-pointer hover:text-white hover:bg-white/5">
      <a className="w-full block" href="/">
        {option}
      </a>
    </li>
  ));

  const [isMenuOpened, setisMenuOpened] = useState(false);
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);

  return (
    <nav className="bg-[#172030] border border-[#2E3745] w-full font-[Poppins] flex flex-col gap-2">
      <div className="flex p-4 pl-3 justify-between">
        <div className="flex gap-4">
          <button
            onClick={() => setisMenuOpened(!isMenuOpened)}
            className="md:hidden h-9 w-9 hover:bg-[#1d2739] rounded focus:outline-2 focus:outline-white"
          >
            <IoMenu className="w-7 h-7 m-auto" color="white" />
          </button>
          <div className="h-9 w-9">
            <SiTailwindcss className="w-full h-full" color="#6366F1" />
          </div>
          <h3 className="text-white hidden sm:flex items-center text-xl">
            tailwindcss
          </h3>
        </div>
        {/*Navigation desktop */}
        <div className="hidden md:flex ">
          <div>
            <ul className="flex">{links}</ul>
          </div>
        </div>
        <div className="flex gap-5">
          <div
            className=" flex items-center relative"
            tabIndex={0}
            onBlur={() => setIsOptionsOpened(false)}
            onClick={() => setIsOptionsOpened(!isOptionsOpened)}
          >
            <div className="flex items-center gap-2 lg:hover:bg-[#1d2739] lg:px-2 rounded-md cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-[#C9CBCA] hidden md:block"></div>
              <div className="hidden lg:block">
                <h4 className="text-white text-[0.8rem]">Tom Cook</h4>
                <p className="text-[#d1d5dc94] text-[0.7rem]">
                  tom@example.com
                </p>
              </div>
            </div>
            {isOptionsOpened && (
              <div className="absolute top-[calc(100%+10px)] w-max translate-x-[-50%] left-[50%] bg-[#1d2739]/70 rounded-md">
                <ul className="flex flex-col gap-0.5 bg-[#181f2d]">
                  {listOptions}
                </ul>
              </div>
            )}
          </div>
          <button className="cursor-pointer flex items-center gap-3 bg-[#615FFF] hover:bg-[#817fff] px-3.5 rounded-sm focus:outline-2 focus:outline-white">
            <span className="h-3 w-3 flex items-center text-center text-white text-xl font-medium">
              +
            </span>
            <span className="text-white font-semibold text-sm">New Job</span>
          </button>
        </div>
      </div>
      {/*Mobile navigation */}
      {isMenuOpened && (
        <div className="md:hidden">
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
      )}
    </nav>
  );
}
