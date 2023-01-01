import React from "react";
import { FooterItems } from "../components";
import { FooterDatas } from "../data";

const Footer = () => {
  return (
    <div className="max-w-[1400px] min-h-[270px] mx-auto mt-[50px] ">
      <div className="grid grid-cols-5 place-items-center max-w-[1400px] ">
        {FooterDatas.map((item, index) => (
          <FooterItems
            key={index}
            FooterTitle={item.title}
            FooterLinks={item.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
