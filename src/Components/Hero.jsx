import React from "react";
import img from "../assets/imgs/hero.png";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10 bg-PrimaryColor ">
      {/* content section */}
      <div className="space-y-4">
        <h1 className="text-5xl font-semibold leading-tight text-ExtraDarkColor w-full lg:w-3/4">
          Discovering and Defining Your Own Fashion!
        </h1>
        <p className="w-full lg:w-3/4 text-DarkColor font-medium">
          Each item is a carefully chosen masterpiece, promising not just
          fashion but a reflection of your unique style.
        </p>
        <button className="bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
          Shop now
        </button>
      </div>
      {/* img section */}
      <div className="bg-DarkColor rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl p-5 mt-10">
        <img className="-ml-5 -mb-5" width={600} src={img} alt="img" />
      </div>
    </div>
  );
};

export default Hero;
