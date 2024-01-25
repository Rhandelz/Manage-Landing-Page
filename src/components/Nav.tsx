import manageLogo from "../assets/svgs/logo.svg";
import hamburger from "../assets/svgs/icon-hamburger.svg";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <header className="max-w-[1120px] w-full h-[99px]  justify-between items-center  flex mx-auto px-4  ">
        <img src={manageLogo} className="max-w-full h-5  " alt="" />

        <nav className="justify-start items-end gap-[34px] hidden md:flex ">
          <a
            href=""
            className="text-blue-950 text-[11px] font-medium font-['Be Vietnam Pro'] tracking-wide border-b-[1px] border-transparent ease-linear duration-500 border-solid hover:border-blue-900"
          >
            Pricing
          </a>
          <a
            href=""
            className="text-blue-950 text-[11px] font-medium font-['Be Vietnam Pro'] tracking-wide border-b-[1px] border-transparent ease-linear duration-500 border-solid hover:border-blue-900"
          >
            Product
          </a>
          <a
            href=""
            className="text-blue-950 text-[11px] font-medium font-['Be Vietnam Pro'] tracking-wide border-b-[1px] border-transparent ease-linear duration-500 border-solid hover:border-blue-900"
          >
            About Us
          </a>
          <a
            href=""
            className="text-blue-950 text-[11px] font-medium font-['Be Vietnam Pro'] tracking-wide border-b-[1px] border-transparent ease-linear duration-500 border-solid hover:border-blue-900"
          >
            Careers
          </a>
          <a
            href=""
            className="text-blue-950 text-[11px] font-medium font-['Be Vietnam Pro'] tracking-wide border-b-[1px] border-transparent ease-linear duration-500 border-solid hover:border-blue-900"
          >
            Community
          </a>
        </nav>

        <button className="text-white text-[11px] font-medium font-['Be Vietnam Pro'] tracking-wide px-8 py-[15px] bg-red-400 rounded-[40px] hidden md:flex ">
          Get Started
        </button>

        {/* button for sidebar */}

        <button
          className=" relative z-30 md:hidden "
          onClick={() => setShow((prev) => !prev)}
        >
          <img src={hamburger} alt="" />
        </button>
      </header>

      <MobileNav show={show} setShow={setShow} />
    </>
  );
};

export default Nav;
