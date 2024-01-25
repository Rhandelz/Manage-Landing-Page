type ShowType = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ show }: ShowType) => {
  return (
    <div
      className={` fixed top-0 left-0 h-screen w-screen bg-slate-200 flex justify-center items-center grad-bg z-20 md:hidden ${
        show ? "flex" : "hidden"
      }`}
    >
      <nav className=" w-4/5 h-96 rounded-sm bg-white flex flex-col justify-center items-center gap-5">
        <a
          href=""
          className=" font-be text-[16px]  text-blue-950 font-semibold"
        >
          Pricing
        </a>
        <a
          href=""
          className=" font-be text-[16px]  text-blue-950 font-semibold"
        >
          Product
        </a>
        <a
          href=""
          className=" font-be text-[16px]  text-blue-950 font-semibold"
        >
          About Us
        </a>
        <a
          href=""
          className=" font-be text-[16px]  text-blue-950 font-semibold"
        >
          Careers
        </a>
        <a
          href=""
          className=" font-be text-[16px]  text-blue-950 font-semibold"
        >
          Community
        </a>
      </nav>
    </div>
  );
};

export default MobileNav;
