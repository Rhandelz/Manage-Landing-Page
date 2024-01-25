const Feature = () => {
  return (
    <div className=" mt-[20vh] mb-16 w-full max-w-[1120px] mx-auto flex flex-col md:flex-row">
      {/* DISCRIPTION */}

      <div className=" w-full flex flex-col gap-8 px-8  items-center md:w-1/2 md:items-start">
        <h1 className="w-full text-blue-950  text-3xl font-be font-semibold text-center md:text-left ">
          What’s different about Manage?
        </h1>
        <p className=" text-center text-blue-950 max-w-[90%] text-base font-normal font-be leading-[25px] md:text-left ">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      {/* ITEMS */}

      <ul className=" w-full h-min flex flex-col items-center mt-16 gap-[42px]   md:w-1/2  md:mt-2">
        <li className="w-full px-4 flex items-start md:gap-6">
          <div className=" bg-[#F3603C] text-[16px] px-7 py-2 rounded-full font-bold text-white font-be hidden md:block">
            01
          </div>

          <div className=" flex flex-col gap-3 md:mt-2">
            <h1 className=" w-full text-blue-950  bg-[#FFF0EB] font-be font-bold text-[16px] md:bg-transparent">
              <span className=" bg-[#F3603C] text-[16px] px-7 py-2 rounded-full font-bold text-white mr-5 md:hidden md:bg-transparent">
                01
              </span>
              Track company-wide progress
            </h1>

            <p className=" w-full text-blue-950  font-be text-sm text-center leading-[25px] md:text-left">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again
              .
            </p>
          </div>
        </li>

        <li className="w-full px-4 flex items-start md:gap-6">
          <div className=" bg-[#F3603C] text-[16px] px-7 py-2 rounded-full font-bold text-white font-be hidden md:block">
            02
          </div>

          <div className=" flex flex-col gap-3 md:mt-2">
            <h1 className=" w-full text-blue-950  bg-[#FFF0EB] font-be font-bold text-[16px] md:bg-transparent">
              <span className=" bg-[#F3603C] text-[16px] px-7 py-2 rounded-full font-bold text-white mr-5 md:hidden md:bg-transparent">
                03
              </span>
              Advanced built-in reports
            </h1>

            <p className=" w-full text-blue-950  font-be text-sm text-center leading-[25px] md:text-left">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.in .
            </p>
          </div>
        </li>

        <li className="w-full px-4 flex items-start md:gap-6">
          <div className=" bg-[#F3603C] text-[16px] px-7 py-2 rounded-full font-bold text-white font-be hidden md:block">
            03
          </div>

          <div className=" flex flex-col gap-3 md:mt-2">
            <h1 className=" w-full text-blue-950  bg-[#FFF0EB] font-be font-bold text-[16px] md:bg-transparent">
              <span className=" bg-[#F3603C] text-[16px] px-7 py-2 rounded-full font-bold text-white mr-5 md:hidden md:bg-transparent">
                03
              </span>
              Everything you need in one place
            </h1>

            <p className=" w-full text-blue-950  font-be text-sm text-center leading-[25px] md:text-left ">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution. .
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Feature;
