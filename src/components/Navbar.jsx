import { useState } from "react";
import logo from "../assets/Images/Logo Color.png";

export const Navbar = () => {
  const [respnav, setrespnav] = useState(false);

  return (
    <>
      <header className="w-full flex justify-center py-5">
        <div className="w-4/5 flex justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-32" />
          </div>
          <nav className="hidden md:block">
            <a
              href="#"
              className="text-sm mx-2  hover:border-solid hover:border-b-2 hover:border-[#5454D4] font-medium"
            >
              Homes
            </a>
            <a
              href="#benefits"
              className="text-[#696871] font-medium text-sm mx-2 hover:pb-2 hover:border-solid hover:border-b-2 hover:border-[#5454D4]"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-[#696871] font-medium text-sm mx-2 hover:pb-2 hover:border-solid hover:border-b-2 hover:border-[#5454D4]"
            >
              Pricing
            </a>
            <a
              href="#blog"
              className="text-[#696871] font-medium text-sm mx-2 hover:pb-2 hover:border-solid hover:border-b-2 hover:border-[#5454D4]"
            >
              Blog
            </a>
          </nav>
          <div className="flex items-center">
            <button
              href="#"
              className="bg-[#FF7143] hidden md:block px-4 py-2 text-white font-semibold rounded-lg"
              onClick={() => alert('Welcome to logoipsum')}
            >
              Get Started
            </button>
            <i
              className="fa-solid fa-bars-staggered md:hidden cursor-pointer"
              onClick={() => setrespnav(!respnav)}
            ></i>
          </div>
        </div>
      </header>
      {respnav ? (
        <div>
          <nav className="md:hidden block text-center">
            <ul>
              <li className="my-3">
                <a
                  href="#"
                  className="text-sm mx-2 hover:border-solid hover:border-b-2 hover:border-[#5454D4] font-medium"
                >
                  Homes
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#benefits"
                  className="text-sm mx-2 hover:border-solid hover:border-b-2 hover:border-[#5454D4] font-medium"
                >
                  Features
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#pricing"
                  className="text-sm mx-2 hover:border-solid hover:border-b-2 hover:border-[#5454D4] font-medium"
                >
                  Pricing
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#blog"
                  className="text-sm mx-2 hover:border-solid hover:border-b-2 hover:border-[#5454D4] font-medium"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center my-5">
            <button
              href="#"
              className="bg-[#FF7143] px-4 py-2 text-white font-semibold rounded-lg"
              onClick={() => alert('Thnx for started')}
            >
              Get Started
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
