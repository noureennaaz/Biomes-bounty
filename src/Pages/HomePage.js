// import Model from "../Components/Model";
import tropic from "../assets/tropic.png"
import decideous from "../assets/decideous.png"
import tundra from "../assets/tundra.png"
import evergreen from "../assets/green.png"
import desert from "../assets/tropic-desert.png"
import tropicLeaves from "../assets/tropicLeaves.jpg"
import bgImg from "../assets/bg-2.jpg"
import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import React from "react"
import "../App.css"
import { FaChevronDown } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomePage = () => {
    // AOS.init();
    useEffect(()=>{
        AOS.init();
    }, [])
    
    
  return (
    <div className="pt-0 overflow-hidden ">
        <nav className=' w-screen overflow-hidden p-3 flex justify-evenly bg-[#2CCE53] items-center top-0 z-50'>
      {/*green text in light -- text-[#0A3D05] */}
      {/*green text in dark -- text-[#2a6f24] */}

        <h2 className='text-[#f6f1f1] text-4xl drop-shadow shadow-text literata-bold top-0 '>BIOMES <span className='text-[#0A3D05]'>BOUNTY</span></h2>
        
      </nav>
        <section className="text-left -z-50  right-0 left-0 h-[700px] overflow-hidden bg-[#2CCE53] ">
            <Spline scene="https://prod.spline.design/azwkfkjpLMq-WFOU/scene.splinecode" className="z-0"/>
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
           
       
        </section >
        <button className="relative -top-20 bg-none animate-bounce z-50"><FaChevronDown size={30} color="white" className="z-50" /></button>
         <section className=" top-[700px]" >
        <section className=" w-screen relative bg-no-repeat bg-[url(https://png.pngtree.com/png-vector/20230531/ourmid/pngtree-rosemary-plant-in-a-pot-of-dirt-drawing-illustration-vector-png-image_6791704.png)] bg-place bg-opacity-25 bg-left-bottom bg-scroll bg-blend-screen p-10 z-10  " id="floater">
         <h2 className="text-[#0A3D05] text-5xl literata-600 py-5">Explore the different biomes</h2>
         <div className="h-screen flex flex-wrap justify-evenly py-10 gap-20 z-20">
          <div className="group rounded-full h-[300px] w-[300px] box-border hover:scale-[1.02] transition ease-in-out delay-100 duration-200">
            <div>
                <img src={tropic} alt="" data-aos="fade-up" className="group-hover:drop-shadow-xl duration-200 transition ease-in"/>
                <div className="literata-plain bg-gradient-to-r from-yellow-600 to-green-900 text-xl">Tropical</div>
            </div>
          </div>
          <div className="group rounded-full h-[300px] w-[300px] box-border hover:scale-[1.02] transition ease-in-out delay-100 duration-200">
            <div>
                <img src={decideous} alt="" data-aos="fade-up" className="group-hover:drop-shadow-xl duration-200 transition ease-in-out" />
                <div className="literata-plain bg-gradient-to-r from-lime-300 to-lime-900 text-xl">Decideous</div>
            </div>
          </div>
          <div className="group rounded-full h-[300px] w-[300px] box-border hover:scale-[1.02] transition ease-in-out delay-150 duration-200">
            <div>
                <img src={tundra} alt="" data-aos="fade-up" className="group-hover:drop-shadow-xl duration-200 transition ease-in-out"/>
                <div className="literata-plain bg-gradient-to-r from-teal-600 to-green-800 text-xl">Tundra</div>
            </div>
          </div>
          <div className="group rounded-full h-[300px] w-[300px] box-border hover:scale-[1.02] transition ease-in-out delay-150 duration-200">
            <div>
                <img src={evergreen} alt="" data-aos="fade-up" className="group-hover:drop-shadow-xl duration-200 transition ease-in-out"/>
                <div className="literata-plain bg-gradient-to-r from-teal-700 to-green-900 text-xl">Evergreen</div>
            </div>
          </div>
          <div className="group rounded-full h-[300px] w-[300px] box-border hover:scale-[1.02] transition ease-in-out delay-150 duration-200">
            <div>
                <img src={desert} alt="" data-aos="fade-up" className="group-hover:drop-shadow-xl duration-200 transition ease-in-out"/>
                <div className="literata-plain bg-gradient-to-r from-yellow-600 to-amber-900 text-xl">Tropical-desert</div>
            </div>
          </div>
          
          
         </div>
         <div className="absolute top-5 right-60 h-32 w-32 z-10">
            <img src={bgImg} alt="" className="h-full w-full object-cover"/>
         </div>
        </section>
        <section className="relative h-[600px]" id="content">
            <img src={tropicLeaves} className="h-full w-full object-cover" alt=""/>
            <div className="literata-bold text-white text-[120px] text-left absolute z-10 top-10">
                <p data-aos="fade-left" data-aos-duration="1000" >Discover Sustainable</p>
                <p data-aos="fade-left" data-aos-duration="1000">Agriculture with Bounty</p> 
                <p data-aos="fade-left" data-aos-duration="2000">Biomes!</p> </div>
            
        </section>
        </section> 
        
      
    </div>
  );
};
export default HomePage;
