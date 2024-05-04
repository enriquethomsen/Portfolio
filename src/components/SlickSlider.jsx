import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";

export const SlickSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    pauseOnHover: true,
    easing: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: function (index) {},
  };

  return (
    <div className="  w-screen md:max-h-[200px]  bg-transparent md:max-w-screen  ">
      <div className=" px-0  lg:px-[300px] bg-[#212121] py-5  ">
        <Slider
          {...settings}
          className="justify-center items-center  flex md:rounded-[3rem]   bg-[#212121]  "
        >
          <div className=" ">
            <h1 className="text-white text-[100px]  pt-5 justify-center items-center bottom-0 flex flex-col overflow-hidden ">
              <AiFillHtml5 className="text-1xl flex" />
              <span className="text-3xl     ">Html</span>
            </h1>
          </div>
          <div className="">
            <h1 className="text-white  text-[100px]  pt-5 justify-center items-center bottom-0 flex flex-col overflow-hidden ">
              <IoLogoCss3 className=" " />
              <span className="text-3xl   ">Css</span>
            </h1>
          </div>
          <div>
            <h1 className="text-white text-[100px]  pt-5 justify-center items-center bottom-0 flex flex-col overflow-hidden  ">
              <FaReact />
              <span className="text-3xl ">React</span>
            </h1>
          </div>
          <div>
            <h1 className="text-white  text-[100px]  pt-5 justify-center items-center bottom-0 flex flex-col overflow-hidden  ">
              <FaPython />
              <span className="text-3xl ">Python</span>
            </h1>
          </div>
          <div className="">
            <h1 className="text-white text-[100px]  pt-5 justify-center items-center bottom-0 flex flex-col overflow-hidden  ">
              <SiJavascript className=" rounded-[1.5rem]  flex " />
              <span className="text-3xl ">JavaScript</span>
            </h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SlickSlider;
