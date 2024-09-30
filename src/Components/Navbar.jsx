import React from "react";

export default function Navbar() {
  return (
    <nav className="text-white bg-slate-800">
      <div className="flex items-center justify-between px-4 py-5 h-14 mycontainer ">
        <div className="text-2xl font-bold logo">
          <span className="text-green-400">&lt;</span>
          Shied<span className="text-green-500">OP</span>
          <span className="text-green-500">/&gt;</span>
        </div>

        <button className="text-white bg-green-700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1">
          <img
            className="invert  w-10 p-1"
            src="/icons/github.svg"
            alt="github logo"
          />
          <span className="font-bold px-2">
            <a
              href="https://github.com/AzaanSuhail/ShieldOP-My-Own-Password-Manager"
              target="_blank"
            >
              GitHub
            </a>
          </span>
        </button>
      </div>
    </nav>
  );
}
