import React from "react";
import Productcard from "../layouts/Productcard";

import product7Img from "../assets/imgs/product7.jpg";
import product8Img from "../assets/imgs/product8.jpg";
import product9Img from "../assets/imgs/product9.jpg";
import product10Img from "../assets/imgs/product10.jpg";
import product11Img from "../assets/imgs/product11.jpg";
import product12Img from "../assets/imgs/product12.jpg";

const Features = () => {
  const data = [
    {
      id: 6,
      img: product7Img,
      name: "FrostFire Outerlayers",
      price: "398.00",
      discount: "24% Off",
    },
    {
      id: 7,
      img: product8Img,
      name: "DaintyDoll Dresses",
      price: "258.00",
      discount: "40% Off",
    },
    {
      id: 8,
      img: product9Img,
      name: "TrendTraverse Bag",
      price: "104.00",
      discount: "35% Off",
    },
    {
      id: 9,
      img: product10Img,
      name: "Fitness Footgear",
      price: "299.00",
      discount: "40% Off",
    },
    {
      id: 10,
      img: product11Img,
      name: "UrbanBelle Hoodies",
      price: "129.00",
      discount: "28% Off",
    },
    {
      id: 11,
      img: product12Img,
      name: "Elite Handbags",
      price: "189.00",
      discount: "30% Off",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center pt-24">
      {/* heading section */}
      <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
        Exclusive Products
      </h1>
      {/* card section */}
      <div className="flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <div key={item.id} className="md:w-2/4 lg:w-1/4">
            <Productcard
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
