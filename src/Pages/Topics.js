// import tropicalBg from '../assets/tropicLeaves.jpg'
import { useEffect, useRef } from "react";
import AOS from "aos";
import Biomes from "../Components/Biomes";
import "aos/dist/aos.css";
import data from "../Data/data";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
const Topics = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let {topic} = useParams();
  console.log(topic);
  const info = data.find(v=> v.id==topic);
  if(!info){
    navigate("/*");
  }
  const Intro = info.info.desc;
  const types = info.info.types;
  return (
    <div className="pb-9 min-h-fit  w-screen sticky top-0">
      <div
        style={{ backgroundImage: `url(${info.bgCover})` }}
        className="bg-fixed bg-center bg-no-repeat bg-cover h-[350px] flex justify-center items-center"
      >
        <h2 className="lobster-two-bold text-white text-6xl ">{info.title}</h2>
      </div>
      <div className="bg-[#E5F5E3] inter-400 text-xl w-screen flex flex-col justify-center items-center p-20 text-left">
        <div className="lg:w-[1000px] w-screen p-5 ">
          <div>
            <span className="font-semibold text-3xl tracking-tight">
              {Intro.charAt(0)}
            </span>
            {Intro.substring(1)}
          </div>
          {/* the key features */}

          <div className="lg:mt-32 mt-20 flex flex-col gap-20">
            <div>
              <h3 className="literata-plain-head text-black text-4xl text-center">
                Key Characteristics
              </h3>
            </div>
            <div className=" flex inter-300 text-base justify-between items-center sm:flex-col max-sm:gap-5 max-sm:flex-col mx-auto lg:overflow-visible relative lg:w-[900px]">
              <div className="group lg:h-[120px] lg:w-[120px] rounded-full bg-[#D9D9D9] flex justify-center items-center flex-row hover:justify-between hover:w-full lg:absolute right-0 top-0 left-0 hover:z-30 transition-all delay-0 duration-500 ease-in-out">
                <div className="h-[120px] w-[120px] justify-center items-center flex">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios/50/temperature--v1.png"
                    alt="temperature--v1"
                  />
                </div>
                <div className="lg:w-[600px] h-[120px] hidden group-hover:flex justify-right items-center flex-grow">
                  {" "}
                  {info.info.key.temp}
                </div>
              </div>
              <div className="h-[120px] w-[120px] rounded-full bg-[#D9D9D9] flex justify-center hover:justify-between items-center hover:w-full lg:absolute hover:left-0 hover:right-0 lg:top-0 right-[390px] left-[390px] hover:z-30 group transition-all duration-150 ease-in-out">
                <div className="h-[120px] w-[120px] justify-center items-center flex">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/?size=100&id=19166&format=png&color=000000"
                    alt="temperature--v1"
                  />
                </div>
                <div className="lg:w-[600px] h-[120px] hidden group-hover:flex justify-right items-center flex-grow">
                  {" "}
                  {info.info.key.veg}
                </div>
              </div>
              <div className="h-[120px] w-[120px] rounded-full bg-[#D9D9D9] flex justify-center hover:justify-between items-center hover:w-full hover:right-30 hover:left:0 lg:absolute top-0 right-0 hover:z-30 group transition-all duration-500 ease-in-out">
                <div className="h-[120px] w-[120px] justify-center items-center flex">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/?size=100&id=2743&format=png&color=000000"
                    alt="temperature--v1"
                  />
                </div>
                <div className="lg:w-[600px] h-[120px] hidden group-hover:flex justify-right transition-all items-center flex-grow ">
                  {" "}
                  {info.info.key.wildlife}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-60 mt-20 flex flex-col gap-20">
            <div>
              <h3 className="literata-plain-head text-black text-4xl text-center">
                Types of {"  "}{info.title}
              </h3>
            </div>
            <div className="flex inter-300 justify-evenly items-center flex-wrap gap-5 mx-auto overflow-visible relative lg:w-[900px]">
              {types.map((type) => {
                return (
                  <div className="flex flex-col justify-between items-center gap-5 group hover:scale-[1.05] transition-transform duration-300 delay-150 ease-in-out">
                    <div
                      className="h-[200px] w-[200px] rounded-full justify-center items-center flex"
                      data-aos="fade-up"
                    >
                      <img
                        src={type.img}
                        alt="temperature--v1"
                        className="rounded-full object-cover h-full w-full"
                      />
                    </div>
                    <p className="inter-300 text-base">{type.head}</p>
                  </div>
                );
              })}
              
            </div>
          </div>
          <div className="mt-32 flex flex-col gap-20 w-full">
            <h3 className="literata-plain-head text-black text-4xl flex items-center justify-center gap-6 mx-auto text-center">
                Locations <FaMapLocationDot />
            </h3>
            <div className="aspect-video lg:w-[800px] mx-auto p-30 drop-shadow-sm hover:drop-shadow-lg transition-all duration-300 delay-150 ease-in-out hover:scale-[.98] max-w-screen-md" >
                <img src={info.info.map} alt="map" className="rounded-3xl h-full w-full"></img>
            </div>
          </div>
        </div>
        <button className="lobster-two-regular bg-green-text text-2xl mt-20 py-4 px-8 text-white rounded-lg" onClick={()=>navigate(`/quiz/${info.id}`)}>
        Test Your Learning 
        </button>
        
      </div>
      <div>
      <h2 className="text-[#0A3D05] lg:text-5xl literata-bold text-3xl py-5 z-10 ">
              Explore More
            </h2>
        <Biomes/>
      </div>
    </div>
  );
};

export default Topics;

