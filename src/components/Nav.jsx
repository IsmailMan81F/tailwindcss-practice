export default function Nav(params) {
  const links = ["Dashboard", "Team", "Projects", "Calendar"].map((link) => (
    <li className="">
      <a href="/">{link}</a>
    </li>
  ));

  return (
    <nav className="bg-[#172030] border border-[#2E3745] w-full font-poppins">
      <div className="flex p-4 pl-3 justify-between">
        <div className="flex gap-4">
          <div className="h-9 w-9 bg-[#151c29] hover:bg-[#1d2739] rounded"></div>
          <div className="h-9 w-9 bg-[#6366F1]"></div>
        </div>
        <button className="flex items-center gap-3 bg-[#615FFF] hover:bg-[#817fff] px-3.5 rounded-sm">
          <div className="h-3 w-3 bg-white"></div>
          <span className="text-white font-bold text-sm">New Job</span>
        </button>
      </div>
      <div>
        <div>
          <ul>{links}</ul>
        </div>
      </div>
    </nav>
  );
}
