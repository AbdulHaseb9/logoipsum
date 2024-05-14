import partnerone from "../assets/Images/Partners/Group (1).png";
import partnertwo from "../assets/Images/Partners/Group (2).png";
import partnerthree from "../assets/Images/Partners/Group (3).png";
import partnerfour from "../assets/Images/Partners/Group (5).png";
import partnerfive from "../assets/Images/Partners/Group.png";

export const Partners = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-x-36 lg:gap-x-10 xl:gap-x-[84px]">
          <img src={partnerone} className="w-24 mt-6" alt="Partner One" />
          <img src={partnertwo} className="w-24 mt-6" alt="Partner One" />
          <img src={partnerthree} className="w-24 mt-6" alt="Partner One" />
          <img src={partnerfour} className="w-24 mt-6" alt="Partner One" />
          <img src={partnerfive} className="w-24 mt-6" alt="Partner One" />
          <img src={partnerone} className="w-24 mt-6" alt="Partner One" />
        </div>
      </div>
    </>
  );
};
