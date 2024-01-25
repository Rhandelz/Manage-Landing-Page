const Terms = () => {
  return (
    <section className="w-full h-[50vh] bg-[#F3603C] md:h-[30vh]" id="term">
      <div className=" w-full max-w-[1120px] mx-auto h-full flex items-center justify-center px-4 flex-col md:flex-row md:justify-between">
        <h1 className=" font-be text-[36px] text-white w-full max-w-[7 0%] text-center font-bold md:text-left md:max-w-[40%]">
          {" "}
          Simplify how your team works today.
        </h1>
        <button className="text-[#F3603C] text-[11px] font-medium font-be tracking-wide px-8 py-[15px] bg-white rounded-[40px]  hover:opacity-85">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Terms;
