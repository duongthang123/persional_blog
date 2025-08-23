import { useState } from "react";
import flagIMG from "../assets/codosaovang.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-[9999]">
      <div className="flex justify-between items-center shadow-[0_2px_18px_0_rgba(129,162,182,0.2)]">
        <h3 className="px-2 py-2 md:px-12 text-[30px] font-bold">
          <img src={flagIMG} className="w-[80px] md:w-[100px]" alt="Logo" />
        </h3>

        <nav className="hidden md:flex py-6 px-8 text-[16px] space-x-10 font-[450]">
          <a href="#" className="p-4 active">Home</a>
          <a href="#" className="p-4">About</a>
          <a href="#" className="p-4">CV</a>
          <a href="#" className="p-4">Blog</a>
          <a href="#" className="p-4">Contact</a>
        </nav>

        <button className="md:hidden px-4" onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faBars} style={{ fontSize: "36px" }} />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible z-40" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-[280px] bg-white shadow-lg py-6 
          transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end items-center mb-8 px-2">
          <button onClick={() => setOpen(false)}>
            <FontAwesomeIcon className="p-2 cursor-pointer" icon={faXmark} style={{ fontSize: "28px" }} />
          </button>
        </div>

        <nav className="flex flex-col text-[18px] font-[500]">
          <a href="#" className="px-6 py-4 hover:bg-[#65b9f8] hover:text-white" onClick={() => setOpen(false)}>Home</a>
          <a href="#" className="px-6 py-4 hover:bg-[#65b9f8] hover:text-white" onClick={() => setOpen(false)}>About</a>
          <a href="#" className="px-6 py-4 hover:bg-[#65b9f8] hover:text-white" onClick={() => setOpen(false)}>CV</a>
          <a href="#" className="px-6 py-4 hover:bg-[#65b9f8] hover:text-white" onClick={() => setOpen(false)}>Blog</a>
          <a href="#" className="px-6 py-4 hover:bg-[#65b9f8] hover:text-white" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
