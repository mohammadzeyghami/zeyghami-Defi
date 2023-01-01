import React from "react";

const Subscirbe = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center">
      <h2 className="text-white text-[36px] font-bold mb-4 ">
        Join Our DeFi Community
      </h2>
      <div className="flex ">
        <input
          type="text pr-5 "
          className="rounded-3xl w-[250px] pl-2 mr-6 "
          placeholder="Type Email"
        />
        <button>Sign Up</button>
      </div>
      <div className="flex items-center justify-center py-3">
        <input type="checkbox" className="mr-2" />
        <p className="text-white">
          Yes, I agree to receive email communications from DeFi.
        </p>
      </div>
    </div>
  );
};

export default Subscirbe;
