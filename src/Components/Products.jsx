import React from "react";
import Productcard from "../layouts/Productcard";
import product12Img from "../assets/imgs/product12.jpg";
import product13Img from "../assets/imgs/product13.jpg";
import product14Img from "../assets/imgs/product14.jpg";

const Products = () => {
  const data = [
    {
      id: 12,
      img: product12Img,
      name: "Canvas Sneakers",
      price: "298.00",
      discount: "28% Off",
    },
    {
      id: 13,
      img: product13Img,
      name: "shirt combo pack ",
      price: "199.00",
      discount: "40% Off",
    },
    {
      id: 14,
      img: product14Img,
      name: "Hublot watch",
      price: "198.00",
      discount: "26% Off",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16">
      {/*HEading section */}
      <div>
        <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
          New Arrivals
        </h1>
      </div>
      {/* cards section */}
      <div className="flex flex-wrap justify-center gap-5 pt-8 ">
        {data.map((item) => (
          <Productcard
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
