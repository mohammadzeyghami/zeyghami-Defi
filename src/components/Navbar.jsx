import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handelToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-full h-[90px]  bg-[var(--primary-navbar-bg)] items-center fixed ">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center cursor-pointer h-full ">
        <h1 className="text-[#9cc5cf] text-3xl font-extrabold ">DEFI</h1>
        <ul className="hidden md:flex text-white items-center text-lg ">
          {["Platform", "Developers", "Comminuty", "About"].map(
            (item, index) => (
              <li key={index} className="text-white mr-5">
                {item}
              </li>
            )
          )}
          <button className="bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-color)] px-5 ml-10  text-[18px] ">
            use Defi
          </button>
        </ul>
        <div
          onClick={handelToggle}
          className="flex md:hidden rounded-[50%] text-white mx-0 p-3 bg-[var(--primary-color)]  "
        >
          {toggle ? (
            <AiOutlineClose className="icon      " size={25} color="white" />
          ) : (
            <AiOutlineMenu size={25} className="icon  rounded-3xl " />
          )}
        </div>
        {toggle && (
          <ul className="md:hidden flex-col  absolute top-[90px] right-0 left-0 w-full text-center justify-center scale-up-center bg-[var(--primary-navbar-bg)]">
            {["Platform", "Developers", "Comminuty", "About"].map(
              (item, index) => (
                <li key={index} className="text-2xl py-3 mx-0">
                  {item}
                </li>
              )
            )}
            <button className=" mb-6 mt-6">Use Defi</button>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
