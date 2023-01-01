import React from "react";

const FooterItems = ({ FooterTitle, FooterLinks }) => {
  return (
    <div className="flex flex-col items-center pt-[30px] justify-center ">
      <div>
        <h3 className="font-bold text-white border-b-4 border-[var(--primary-color)]">
          {FooterTitle}
        </h3>
        {/* <div className="w-[70px] h-[4px] bg-[var(--primary-color)]"></div> */}
      </div>

      {[
        FooterLinks.map((item, index) => (
          <p key={index} className="text-white font-bold py-4">
            {item}
          </p>
        )),
      ]}
    </div>
  );
};

export default FooterItems;
