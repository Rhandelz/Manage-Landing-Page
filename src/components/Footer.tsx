import fb from "../assets/svgs/icon-facebook.svg";
import ig from "../assets/svgs/icon-instagram.svg";
import yt from "../assets/svgs/icon-youtube.svg";
import tw from "../assets/svgs/icon-twitter.svg";
import pt from "../assets/svgs/icon-pinterest.svg";
import mainLogo from "../assets/svgs/logo.svg";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmail, setIsEmail] = useState<boolean>(true);

  const forEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    setIsEmail(true);
  };

  const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email.includes("@"));

    if (email.includes("@")) {
    } else {
      setIsEmail(false);
    }
  };

  return (
    <footer className="w-full bg-[#1E1E26] p-8">
      <section className="w-full max-w-[1120px] mx-auto flex flex-col items-center gap-11  md:flex-row-reverse md:items-start">
        <form
          className=" flex justify-center gap-7 w-full  relative"
          onSubmit={submitEmail}
        >
          <div className="relative">
            <input
              type="text "
              placeholder="email"
              id="email"
              className={`text-[#F3603C]  text-[11px] font-medium font-be tracking-wide px-8 py-[15px] bg-white rounded-[40px] outline-none border border-gray-600  hover:opacity-85 ${
                isEmail ? "border-none" : "border border-red-500 bordder-solid"
              }`}
              onChange={forEmail}
            />
            <p
              className={` italic text-[12px] font-be text-red-500 absolute bottom-[-50%] left-0  md:left-[10%] ${
                isEmail ? "hidden" : "block"
              }`}
            >
              please insert valid email
            </p>
          </div>

          <button className="text-white text-[11px] font-medium font-be tracking-wide px-8 py-[15px] bg-[#F3603C] rounded-[40px]  hover:opacity-85">
            Go
          </button>
        </form>

        <nav className=" flex  w-full ">
          <div className="flex flex-col items-start w-1/2 text-[15px] font-be gap-[15px] text-white">
            <p className="text-left  font-be text-sm tracking-wider">Home</p>
            <p className="text-left  font-be text-sm tracking-wider">Pricing</p>
            <p className="text-left  font-be text-sm tracking-wider">
              Products
            </p>
            <p className="text-left  font-be text-sm tracking-wider">
              About Us
            </p>
          </div>

          <div className="flex flex-col items-start w-1/2 text-[15px] font-be gap-[15px] text-white">
            <p className="text-left  font-be text-sm tracking-wider">Careers</p>
            <p className="text-left  font-be text-sm tracking-wider">
              Community
            </p>
            <p className="text-left  font-be text-sm tracking-wider">
              Privacy Policy
            </p>
          </div>
        </nav>

        <div className="w-full flex flex-col items-center gap-10 md:gap-[80px] md:flex-col-reverse">
          <nav className=" flex justify-center items-center gap-4">
            <a href="">
              <img src={fb} alt="" />
            </a>
            <a href="">
              <img src={yt} alt="" />
            </a>
            <a href="">
              <img src={tw} alt="" />
            </a>
            <a href="">
              <img src={pt} alt="" />
            </a>
            <a href="">
              <img src={ig} alt="" />
            </a>
          </nav>

          <img src={mainLogo} alt="" />
        </div>
      </section>

      <div className=" w-ful max-w-[1120px] mx-auto mt-10 md:mt-0">
        <p className="w-full text-center md:text-right font-be text-[12px] text-white">
          Copyright 2020.All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
