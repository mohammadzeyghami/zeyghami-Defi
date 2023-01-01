import React from "react";

const Card = ({ imgUrl, title, description }) => {
  return (
    <div className=" max-w-[290px] max-h-[386px] flex items-center justify-center">
      <div className="max-w-[224px] max-h-[288px]">
        <div className="inline-flex w-[40px] h-[40px] text-[white] bg-[var(--primary-color)] p-2 justify-center items-center rounded-full">
          {imgUrl}
        </div>
        <h3 className="text-xl font-bold text-white py-4">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default Card;
