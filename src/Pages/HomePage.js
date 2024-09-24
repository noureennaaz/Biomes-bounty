// import Model from "../Components/Model";

import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import React from "react";
import "../App.css";
import Biomes from "../Components/Biomes";
import { FaChevronDown } from "react-icons/fa6";
import AOS from "aos";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";

const HomePage = () => {
  // AOS.init();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pt-0 overflow-hidden ">
      <nav className=" w-screen overflow-hidden p-3 flex justify-evenly bg-[#2CCE53] items-center top-0 z-50">
        {/*green text in light -- text-[#0A3D05] */}
        {/*green text in dark -- text-[#2a6f24] */}

        <h2 className="text-[#f6f1f1] text-4xl drop-shadow shadow-text literata-bold top-0 ">
          BIOMES <span className="text-[#0A3D05]">BOUNTY</span>
        </h2>
      </nav>
      <section className="text-left -z-50  right-0 left-0 lg:h-[700px] h-[600px] overflow-hidden bg-[#2CCE53] ">
        <Spline
          scene="https://prod.spline.design/azwkfkjpLMq-WFOU/scene.splinecode"
          className="z-0"
        />
        {/* <div className="absolute top-0 h-full w-screen flex justify-center items-center "> */}
        {/* <div className="text-[#ffffff] text-left absolute z-50 top-1/2 shadow-inner justify-center items-center w-screen flex flex-col uppercase">
                <h2  className="text-3xl shadow-text font-bold">Explore Biomes</h2>
                <div className="w-[500px]">
                <p className=" shadow-sm-text text-center">connect  with local sustainable farms,
                promote eco-friendly food choices and
                get educates about benefits and practices across different biomes</p>
                </div>
                </div> */}
        {/* </div> */}
      </section>
      <button className="relative -top-20 bg-none animate-bounce z-50">
        <FaChevronDown size={30} color="white" className="z-50" />
      </button>
      <section className="top-[700px]">
        <section
          className="w-screen relative bg-no-repeat bg-[url(https://png.pngtree.com/png-vector/20230531/ourmid/pngtree-rosemary-plant-in-a-pot-of-dirt-drawing-illustration-vector-png-image_6791704.png)] bg-opacity-15 bg-left-bottom bg-scroll bg-blend-screen p-10 z-10 "
          id="floater"
        >
          <div className="lg:h-[90px]  pointer-events-none flex lg:gap-10 mx-auto lg:px-20 items-center justify-center w-full">
            <h2 className="text-[#0A3D05] lg:text-5xl literata-600 text-3xl py-5 z-10 ">
              Explore the different biomes
            </h2>
            <div className="h-[120px] w-[120px] overflow-visible z-0">
              <img
                src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727196895/BiomesBounty/homepage/hgnduyekiho4fpxqpsuo.jpg'
                alt=""
                className="z-0 h-full w-full overflow-visible object-cover"
              />
            </div>
          </div>

          <Biomes/>

          <div className="absolute bottom-1/2 blur-[1px] -right-10 h-60 w-60 -z-[999] pointer-events-none grayscale">
            <img src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727196896/BiomesBounty/homepage/stem.png' alt="" />
          </div>
        </section>
        <section className="relative h-[600px]" id="content">
          <img
            src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727196898/BiomesBounty/homepage/Leavesbg.jpg'
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="literata-bold text-white lg:text-[120px] lg:leading-[150px] leading-[5rem] text-6xl text-left absolute z-10 top-10 h-fit gap-10 flex flex-col">
            <p data-aos="fade-left" data-aos-duration="2000">
              Discover Sustainable
              Agriculture with Bounty
              Biomes!
            </p>{" "}
          </div>
          
        </section>
      </section>
      
      <section>
        
      </section>
    </div>
  );
};
export default HomePage;
