import React from "react";
import { aboutCards } from "../Data";
import { Card } from "../components";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
const About = () => {
  return (
    <div className="w-full h-full align-center justify-center">
      <div className="max-w-[1250px] mx-auto min-h-[680px] p-16 px-16 align-center justify-center ">
        <h1 className="py-4 w-full text-white text-center">
          A Growing Protocol Ecosystem
        </h1>
        <p className="text-[20px] py-4 w-full text-[white] text-center">
          The Defi protocol system empowers developers, liquidity providers, and
          traders to participate in a financial marketplace that is open and
          accessible to all.
        </p>
        <div className=" w-full place-items-center my-10 items-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 ">
          <Card
            imgUrl={<SiHiveBlockchain size={40} />}
            title={aboutCards[0].title}
            description={aboutCards[0].description}
          />
          <Card
            imgUrl={<SiFsecure size={40} />}
            title={aboutCards[1].title}
            description={aboutCards[1].description}
          />
          <Card
            imgUrl={<SiStrapi size={40} />}
            title={aboutCards[2].title}
            description={aboutCards[2].description}
          />
          <Card
            imgUrl={<VscServerProcess size={40} />}
            title={aboutCards[3].title}
            description={aboutCards[3].description}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
