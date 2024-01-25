type ContentType = {
  name: string;
  img: string;
  text: string;
};

const Testimonial = ({ name, img, text }: ContentType) => {
  return (
    <li className=" flex flex-col items-center w-full max-w-[475px]  gap-5 mb-5 text-blue-950 min-w-full md:min-w-[475px] ">
      <img src={img} alt="" className="max-w-full h-[70px]" />
      <h5 className=" font-be font-bold">{name}</h5>

      <p className="w-full text-center text-base font-be px-2"> {text}</p>
    </li>
  );
};

export default Testimonial;
