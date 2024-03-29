import heroImg from "../assets/svgs/illustration-intro.svg";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className=" flex flex-col-reverse w-full max-w-[1120px] mx-auto  md:items-center  md:justify-center md:h-[75vh] md:flex-row md:max-h-[750px] ">
          {/* LEFT SIDE */}
          <div className="  w-full flex flex-col  items-center gap-[23px] px-8 md:w-1/2 md:items-start md:justify-center">
            <h1 className=" w-full text-center text-[40px] text-blue-950  font-be font-semibold md:text-left">
              Bring everyone together to build better products.
            </h1>
            <p className=" text-center text-blue-950 max-w-[95%] text-base font-normal font-be leading-[25px] tracking-tight md:text-left  ">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="text-white text-[11px] font-medium font-be tracking-wide px-8 py-[15px] bg-[#F3603C] rounded-[40px]  hover:opacity-85">
              Get Started
            </button>
          </div>

          {/* RIGTH SIDE */}

          <div className=" h-full w-full flex justify-center items-center md:w-1/2">
            <img
              src={heroImg}
              alt=""
              className=" object-contain h-[80%] w-[80%] md:h-full md:w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
