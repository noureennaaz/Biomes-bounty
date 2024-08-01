// import Model from "../Components/Model";
import tropic from "../assets/tropic.png"
import decideous from "../assets/decideous.png"
import tundra from "../assets/tundra.png"
import evergreen from "../assets/green.png"
import desert from "../assets/tropic-desert.png"
import tropicLeaves from "../assets/tropicLeaves.jpg"
import { useRef } from "react";
import Spline from "@splinetool/react-spline";
import "../App.css"

const HomePage = () => {

    // function parallax() {
    // var s = document.getElementById("floater");
    //   var yPos = 0 - window.scrollY/4;	
    //   s.style.top = 50 + yPos + "%";
      
    // //   alert(yPos);
    // }
    
    // window.addEventListener("scroll", function(){
    //     parallax();	
    // });
    
  return (
    <div className="pt-20">
        <nav className=' w-screen overflow-hidden flex justify-evenly items-center bg-transparent top-0 z-50'>
      {/*green text in light -- text-[#0A3D05] */}
      {/*green text in dark -- text-[#2a6f24] */}

        <h2 className='text-[#5f5e5e] text-4xl drop-shadow shadow-text literata-bold '>BIOMES <span className='text-[#0A3D05]'>BOUNTY</span></h2>
        
      </nav>
        <section className="relative text-left z-10 h-[600px]">
            <Spline scene="https://prod.spline.design/azwkfkjpLMq-WFOU/scene.splinecode"/>
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
        <section className=" w-screen bg-white p-10 z-10 " id="floater">
         <h2 className="text-[#0A3D05] text-5xl literata-600 py-5">Explore the different biomes</h2>
         <div className="h-screen flex flex-wrap justify-evenly py-10 gap-20">
          <div className="rounded-full h-[300px] w-[300px] box-border ">
            <div>
                <img src={tropic} alt="" className="duration-150 ease-in-out hover:drop-shadow-2xl hover:scale-[1.03]"/>
                <div>Tropical</div>
            </div>
          </div>
          <div className="rounded-full h-[300px] w-[300px] ">
            <div>
                <img src={decideous} alt="" className="duration-100 ease-in-out hover:drop-shadow-2xl hover:scale-[1.03]" />
                <div>Decideous</div>
            </div>
          </div>
          <div className="rounded-full h-[300px] w-[300px] ">
            <div>
                <img src={tundra} alt="" className="duration-100 ease-in-out hover:drop-shadow-2xl hover:scale-[1.03]"/>
                <div>Tundra</div>
            </div>
          </div>
          <div className="rounded-full h-[300px] w-[300px] ">
            <div>
                <img src={evergreen} alt="" className="duration-100 ease-in-out hover:drop-shadow-2xl hover:scale-[1.03]"/>
                <div>Evergreen</div>
            </div>
          </div>
          <div className="rounded-full h-[300px] w-[300px] ">
            <div>
                <img src={desert} alt="" className="duration-75 delay-0 ease-in-out hover:drop-shadow-2xl hover:scale-[1.03]"/>
                <div>Tropical-desert</div>
            </div>
          </div>
          
          
         </div>
        </section>
        <section className="relative h-[600px]">
            <img src={tropicLeaves} className="h-full w-full object-cover" alt=""/>
            <div className="literata-bold text-white text-[120px] text-left absolute z-10 top-10">Discover Sustainable Agriculture with Bounty Biomes!</div>
            
        </section>
      
    </div>
  );
};
export default HomePage;
