import React from "react";
import terminal from "../assets/terminal.png";
const Developers = () => {
  return (
    <div className="max-w-[1250px] grid grid-cols-1 place-items-center h-[640px] min-h-[500px] mx-auto md:grid-cols-2 ">
      <div className=" flex flex-col juststify-center items-center text-center">
        <h2 className="text-white font-bold text-[2.25rem] max-h-[330px]">
          Superpowers for DEFI developers.
        </h2>
        <p className="text-white max-w-[540px] ">
          Checkout the
          <span className="text-[var(--primary-color)]"> documentation </span>,
          the <span className="text-[var(--primary-color)]"> quick start </span>
          or a guide below to integrate your project with thousands of tokens
          and billions of liquidity.
        </p>
      </div>
      <div className="max-h-[330px]">
        <img
          src={terminal}
          alt="terminal"
          className="max-w-[250px] shadow-lg shadow-cyan-500/50"
        />
      </div>
    </div>
  );
};

export default Developers;
