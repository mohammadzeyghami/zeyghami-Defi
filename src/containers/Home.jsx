import React from "react";
import videobg from "../assets/video.mp4";
const Home = () => {
  return (
    <>
      <div className="w-full h-[90vh] flex justify-center align-center">
        <video
          src={videobg}
          className="object-cover flex h-full w-full absolute -z-10"
          autoPlay
          muted
          loop
        />
        <div className=" max-w-[40%]  pt-[90px] h-[90%] flex flex-col justify-center align-center text-center mr-auto ml-auto ">
          <h1 className="text-white md:text-[36px] text-[30px] font-bold">
            Decentralized
          </h1>
          <div className="mt-[2px] w-full  md:text-[36px] text-[30px] mx-auto text-white font-bold flex flex-col md:flex-row justify-center">
            <span className=" px-2  text-[var(--primary-color)]  text-center">
              Trading
            </span>
            Protocol
          </div>
          <p className="text-xl py-4   text-[white] font-medium w-full">
            Guaranteed liquidity trading for millions of users and top Ethereum
            applications.
          </p>
          <div className="align-center justify-center my-10 md:my-0">
            <button className="m-2 bg-gradient-to-r  text-[18px]">
              use Defi
            </button>
            <button className="px-6  text-[18px]">FaQ</button>
          </div>
        </div>
      </div>
      <p className="h-full  w-[100%] text-[20px] md:text-[24px] font-bold text-center text-white">
        Total Volume Secured: $42,104,783,662.47
      </p>
    </>
  );
};

export default Home;
