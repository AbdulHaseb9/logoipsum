import heroimg from "../assets/Images/Hero 3D.png";

export const Hero = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-20">
        <div className="w-4/5 sm:flex sm:items-center">
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h1 className="text-4xl font-bold">
              Grow Your subscription business
            </h1>
            <p className="text-sm mt-5 text-[#696871] mb-9">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              repudiandae doloribus, ratione dolor quos.
            </p>
            <a
              href="#"
              className="bg-[#5454D4] rounded-lg text-white text-sm font-medium px-6 py-2"
            >
              Get Started
            </a>
          </div>
          <div className="w-full sm:w-1/2 mt-9 sm:mt-4">
            <img src={heroimg} alt="3D Hero image" />
          </div>
        </div>
      </div>
    </>
  );
};
