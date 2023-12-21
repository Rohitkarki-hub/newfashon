import React from "react";
import img from "../assets/imgs/collection.png";

const Collection = () => {
  return (
    <div className="h-screen lg:h-[70vh] flex flex-col justify-center lg:flex-row items-center bg-PrimaryColor mt-14 lg:px-32 px-5">
      {/* img sections */}
      <div className="flex justify-center w-full lg:w-2/4 top-6">
        <img src={img} alt="img" />
      </div>
      {/* content */}
      <div className="w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start">
        <h1 className="text-4xl font-semibold text-ExtraDarkColor">
          Best Summer Collection{" "}
        </h1>
        <h3 className="text-lg font-medium text-DarkColor">
          sale get Up To 60% off
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor
          vitae ex quidem. Voluptates, distinctio odit dolorem quasi quos
          officia.
        </p>
        <button className="bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Collection;
