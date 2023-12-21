import React from "react";
import Productcard from "../layouts/Productcard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import product1Img from "../assets/imgs/product1.jpg";
import product2Img from "../assets/imgs/product2.jpg";
import product3Img from "../assets/imgs/product3.jpg";
import product4Img from "../assets/imgs/product4.jpg";
import product5Img from "../assets/imgs/product5.jpg";
import product6Img from "../assets/imgs/product6.jpg";

const Shop = () => {
  const data = [
    {
      id: 0,
      img: product1Img,
      name: "Nike Air",
      price: "198.00",
      discount: "20% Off",
    },
    {
      id: 1,
      img: product2Img,
      name: "Sportswear Futura",
      price: "208.00",
      discount: "40% Off",
    },
    {
      id: 2,
      img: product3Img,
      name: "Royal Collection",
      price: "104.00",
      discount: "35% Off",
    },
    {
      id: 3,
      img: product4Img,
      name: "T-shirt Combo Pack",
      price: "299.00",
      discount: "40% Off",
    },
    {
      id: 4,
      img: product5Img,
      name: "CozyCraze Hoodies",
      price: "159.00",
      discount: "23% Off",
    },
    {
      id: 5,
      img: product6Img,
      name: "LuxeLoom Purses",
      price: "189.00",
      discount: "30% Off",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14">
      {/* heading section */}
      <div>
        <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
          Best sellers
        </h1>
      </div>

      {/* carousel section */}
      <div className=" mt-8">
        <Slider {...settings}>
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
        </Slider>
      </div>
    </div>
  );
};

export default Shop;
