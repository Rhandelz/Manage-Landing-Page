import Testimonial from "../components/Testimonial";
import pic1 from "../assets/image/avatar-ali.png";
import pic2 from "../assets/image/avatar-anisha.png";
import pic3 from "../assets/image/avatar-richard.png";
import pic4 from "../assets/image/avatar-shanai.png";

const Test = () => {
  return (
    <div className="w-full flex flex-col items-center gap-16 mb-16 md:gap-20 ">
      <h1 className="font-be text-[32px] font-semibold  text-blue-950 tracking-wide md:text-[36px]">
        What they’ve said
      </h1>

      <ul
        className="ulist w-full flex overflow-y-hidden justify-between gap-20 "
        id="test_list"
      >
        <Testimonial
          img={pic2}
          name="Anisha Li"
          text=" “Manage has supercharged our team’s workflow. The ability to maintain 
  visibility on larger milestones at all times keeps everyone motivated.”"
        />
        <Testimonial
          img={pic1}
          name="Ali Bravo"
          text="“We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel confusion and everyone is much 
  more focused.”"
        />

        <Testimonial
          img={pic3}
          name="Richard Watts"
          text="“Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”"
        />
        <Testimonial
          img={pic4}
          name="Shanai Gough"
          text="“Their software allows us to track, manage and collaborate on our projects 
  from anywhere. It keeps the whole team in-sync without being intrusive.”"
        />
      </ul>

      <button className="text-white text-[11px] font-medium font-be tracking-wide px-8 py-[15px] bg-red-400 rounded-[40px]  hover:opacity-85">
        Get Started
      </button>
    </div>
  );
};

export default Test;
