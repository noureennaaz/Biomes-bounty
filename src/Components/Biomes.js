

import { NavLink } from "react-router-dom";
const Biomes= ()=>{
    return(
        <div className="min-h-screen flex flex-wrap justify-evenly z-20 gap-20  mt-20 ">
            <div className="group rounded-full lg:basis-[22%] h-[300px] w-[300px] hover:scale-[1.02] transition-all ease-in  duration-200">
              <NavLink to="/topics/tropic" >
                <img
                  src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727196897/BiomesBounty/homepage/Tropical.png'
                  alt=""
                  data-aos="fade-up"
                  className="group-hover:drop-shadow-xl duration-200 transition-all ease-in"
                />
                <div className="literata-plain bg-gradient-to-r from-yellow-600 to-green-900 text-xl">
                  Tropical
                </div>
              </NavLink>
            </div>
            <div className="group rounded-full lg:basis-[22%] h-[300px] w-[300px] hover:scale-[1.02] transition-all ease-in  duration-200">
              <NavLink to="/topics/decideous">
                <img
                  src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727196897/BiomesBounty/homepage/decideous.png'
                  alt=""
                  data-aos="fade-up"
                  className="group-hover:drop-shadow-xl duration-200 transition-all ease-in"
                />
                <div className="literata-plain bg-gradient-to-r from-lime-300 to-lime-900 text-xl">
                  Decideous
                </div>
              </NavLink>
            </div>
            <div className="group rounded-full lg:basis-[22%] h-[300px] w-[300px] hover:scale-[1.02] transition-all ease-in  duration-200">
              <NavLink to="/topics/tundra">
                <img
                  src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727196898/BiomesBounty/homepage/tundra.png'
                  alt=""
                  data-aos="fade-up"
                  className="group-hover:drop-shadow-xl duration-200 transition-all ease-in"
                />
                <div className="literata-plain bg-gradient-to-r from-teal-600 to-green-800 text-xl">
                  Tundra
                </div>
              </NavLink>
            </div>
            
            <div className="group rounded-full lg:basis-[22%] h-[300px] w-[300px] hover:scale-[1.02] transition-all ease-in  duration-200">
              <NavLink to="/topics/evergreen">
                <img
                  src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727196897/BiomesBounty/homepage/evergreen.png'
                  alt=""
                  data-aos="fade-up"
                  className="group-hover:drop-shadow-xl duration-200 transition-all ease-in"
                />
                <div className="literata-plain bg-gradient-to-r from-teal-700 to-green-900 text-xl">
                Evergreen
                  </div>
            
              </NavLink>
            </div>
            <div className="group rounded-full lg:basis-[22%] h-[300px] w-[300px] hover:scale-[1.02] transition-all ease-in  duration-200">
              <NavLink to="/topics/desert">
                <img
                  src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727196898/BiomesBounty/homepage/desert.png'
                  alt=""
                  data-aos="fade-up"
                  className="group-hover:drop-shadow-xl duration-200 transition-all ease-in"
                />
                <div className="literata-plain bg-gradient-to-r from-yellow-600 to-amber-900 text-xl">
                  Tropical-desert
                </div>
              </NavLink>
            </div>
          </div>
    )
}
export default Biomes;