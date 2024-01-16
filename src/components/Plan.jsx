import { useState } from "react";

export const Plan = () => {
  const [plan, setplan] = useState(true);
  console.log(plan);
  return (
    <>
      <div className="w-full flex justify-center py-24">
        <div className="w-4/5">
          <div className="sm:flex text-center sm:justify-between items-end">
            <div className="text-3xl font-bold sm:text-left">
              Get the right plan <br /> for your future
            </div>
            <div className="mt-6">
              <button
                className="py-2 px-5 bg-[#F7F7FB] font-semibold cursor-pointer rounded-md hover:bg-[#5454D4] hover:text-white"
                onClick={() => setplan(plan === true ? !plan : null)}
              >
                Yearly
              </button>
              <button
                className="py-2 px-5 bg-[#F7F7FB] font-semibold cursor-pointer rounded-md hover:bg-[#5454D4] hover:text-white"
                onClick={() => setplan(!plan === true ? plan : null)}
              >
                Monthly
              </button>
            </div>
          </div>

          {plan ? (
            <div className="w-full flex sm:justify-center flex-wrap mt-5">
              <div className="w-72 my-4 mx-3 md:mx-2 bg-[#F8F8F8] rounded-lg py-11 hover:bg-[#FF7143] hover:text-white px-2 text-center">
                <h4 className="text-sm">Starter</h4>
                <h1 className="text-5xl font-semibold">Free</h1>
                <h5 className="text-sm my-2">1 Website</h5>
                <h5 className="text-sm my-2">5 GB Hosting</h5>
                <h5 className="text-sm my-2">Limited Support</h5>
                <button className="cursor-pointer px-16 py-2 bg-white text-purple-700 font-semibold rounded-md mt-5 hover:bg-[#9F3919] hover:text-white">
                  Get Started
                </button>
              </div>
              <div className="w-72 my-4 mx-3 md:mx-2 bg-[#F8F8F8] rounded-lg py-11 hover:bg-[#FF7143] hover:text-white px-2 text-center">
                <h4 className="text-sm">Premium</h4>
                <h1 className="text-5xl font-semibold">
                  $29/<span className="text-lg">monthly</span>
                </h1>
                <h5 className="text-sm my-2">10 Website</h5>
                <h5 className="text-sm my-2">15 GB Hosting</h5>
                <h5 className="text-sm my-2">Premium Support</h5>
                <button className="cursor-pointer px-16 py-2 bg-white text-purple-700 font-semibold rounded-md mt-5 hover:bg-[#9F3919] hover:text-white">
                  Get Started
                </button>
              </div>
              <div className="w-72 my-4 mx-3 md:mx-2 bg-[#F8F8F8] rounded-lg py-11 hover:bg-[#FF7143] hover:text-white px-2 text-center">
                <h4 className="text-sm">Enterprise</h4>
                <h1 className="text-5xl font-semibold">
                  $49/<span className="text-lg">monthly</span>
                </h1>
                <h5 className="text-sm my-2">Unlimited Website</h5>
                <h5 className="text-sm my-2">50 GB Hosting</h5>
                <h5 className="text-sm my-2">Premium Support</h5>
                <button className="cursor-pointer px-16 py-2 bg-white text-purple-700 font-semibold rounded-md mt-5 hover:bg-[#9F3919] hover:text-white">
                  Get Started
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full flex sm:justify-center flex-wrap mt-5">
              <div className="w-72 my-4 mx-3 md:mx-2 bg-[#F8F8F8] rounded-lg py-11 hover:bg-[#FF7143] hover:text-white px-2 text-center">
                <h4 className="text-sm">Starter</h4>
                <h1 className="text-5xl font-semibold">Free</h1>
                <h5 className="text-sm my-2">2 Website</h5>
                <h5 className="text-sm my-2">15 GB Hosting</h5>
                <h5 className="text-sm my-2">Limited Support</h5>
                <button className="cursor-pointer px-16 py-2 bg-white text-purple-700 font-semibold rounded-md mt-5 hover:bg-[#9F3919] hover:text-white">
                  Get Started
                </button>
              </div>
              <div className="w-72 my-4 mx-3 md:mx-2 bg-[#F8F8F8] rounded-lg py-11 hover:bg-[#FF7143] hover:text-white px-2 text-center">
                <h4 className="text-sm">Premium</h4>
                <h1 className="text-5xl font-semibold">
                  $70/<span className="text-lg">Yearly</span>
                </h1>
                <h5 className="text-sm my-2">10 Website</h5>
                <h5 className="text-sm my-2">150 GB Hosting</h5>
                <h5 className="text-sm my-2">Premium Support</h5>
                <button className="cursor-pointer px-16 py-2 bg-white text-purple-700 font-semibold rounded-md mt-5 hover:bg-[#9F3919] hover:text-white">
                  Get Started
                </button>
              </div>
              <div className="w-72 my-4 mx-3 md:mx-2 bg-[#F8F8F8] rounded-lg py-11 hover:bg-[#FF7143] hover:text-white px-2 text-center">
                <h4 className="text-sm">Enterprise</h4>
                <h1 className="text-5xl font-semibold">
                  $150/<span className="text-lg">Yearly</span>
                </h1>
                <h5 className="text-sm my-2">Unlimited Website</h5>
                <h5 className="text-sm my-2">350 GB Hosting</h5>
                <h5 className="text-sm my-2">Premium Support</h5>
                <button className="cursor-pointer px-16 py-2 bg-white text-purple-700 font-semibold rounded-md mt-5 hover:bg-[#9F3919] hover:text-white">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
