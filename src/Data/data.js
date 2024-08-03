const data=
[
   {
    id:'tropic', 
    title:'Tropical Biome',
    bgCover:'https://res.cloudinary.com/dihp6gdpi/image/upload/v1722596131/BiomesBounty/tropic-leaves.jpg',
    info:{
        desc:"Tropical biomes, characterized by their warm temperatures and high annual rainfall, are among the most biodiverse regions on Earth. They include rainforests, savannas, and tropical dry forests, each supporting a vast array of plant and animal species.", 
        key:{
            temp:'Warm temperatures (usually between 20°C and 30°C) and high humidity', 
            veg:'Rich vegetation including: Upper Canopy, Orchids, bromeliads, mosses and Lianas—woody vines ',
            wildlife:'Jaguars, Anacondas, Gorillas, Chimpanzees, Orangutans, Tigers, Hornbills, Tapirs, Pangolins'

        },
        map:'https://res.cloudinary.com/dihp6gdpi/image/upload/v1722641593/BiomesBounty/tropic-map.png', 
        types:[
            {
                head:'Tropical Rainforests', 
                img:'https://res.cloudinary.com/dihp6gdpi/image/upload/v1722624007/BiomesBounty/tropic-type1.png'
            }, 
            {
                head:'Tropical Savannas', 
                img:'https://res.cloudinary.com/dihp6gdpi/image/upload/v1722624396/BiomesBounty/tropic-type2.png'
            }, 
            {
                head:'Tropical Dry Forests', 
                img:'https://res.cloudinary.com/dihp6gdpi/image/upload/v1722624577/BiomesBounty/tropic-type3.png'
            }
        ]
    }
    
   }, 
   {
    id:'decideous', 
    title: "Deciduous Biome",
    bgCover: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722628187/BiomesBounty/decideous-leaves.jpg",
    info: {
        desc: "Deciduous biomes, characterized by their distinct seasons and temperate climate, feature trees that shed their leaves annually. These forests are known for their vibrant fall colors and rich soil.",
        key: {
            temp: "Temperate with distinct seasons (usually between -2°C and 22°C)",
            veg: "Broadleaf trees such as Oak, Maple, and Birch; shrubs and herbaceous plants",
            wildlife: "Deer, Bears, Foxes, Raccoons, Squirrels, Various bird species"
        },
        map: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722639792/BiomesBounty/decideous-map.jpg",
        types: [
            {
                head: "Temperate Broadleaf Forests",
                img: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722632388/BiomesBounty/decideoud-type1.jpg"
            },
            {
                head: "Temperate Mixed Forests",
                img: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722631824/BiomesBounty/decideous-type2.jpg"
            }
        ]
    }
}, 
{
    id:'tundra', 
    title: "Tundra Biome",
    bgCover: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722636586/BiomesBounty/tundra-leaves.png",
    info: {
        desc: "Tundra biomes are characterized by their cold temperatures, permafrost, and short growing seasons. Vegetation is sparse and mainly consists of mosses, lichens, and low shrubs.",
        key: {
            temp: "Cold temperatures (usually between -34°C and 12°C)",
            veg: "Mosses, Lichens, Low shrubs, and grasses",
            wildlife: "Polar Bears, Arctic Foxes, Caribou, Muskoxen, Various migratory birds"
        },
        map: "https://upload.wikimedia.org/wikipedia/commons/5/57/Biome_map_11.svg",
        types: [
            {
                head: "Arctic Tundra",
                img: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722637004/BiomesBounty/tundra-type1.jpg"
            },
            {
                head: "Alpine Tundra",
                img: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722637142/BiomesBounty/tundra-type2.jpg"
            }
        ]
    }
}, 
{
    id:'evergreen', 
    title: "Evergreen",
    bgCover: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722637474/BiomesBounty/evergreen-leaves.jpg",
    info: {
        desc: "Evergreen biomes, characterized by their cool to temperate climates, feature trees with needle-like leaves that stay green year-round. These forests are adapted to withstand cold temperatures and often have acidic soils.",
        key: {
            temp: "Cool to temperate (usually between -5°C and 20°C)",
            veg: "Evergreen trees such as Pine, Spruce, and Fir; mosses and lichens",
            wildlife: "Elks, Wolves, Bears, Lynxes, Various bird species"
        },
        map: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722639475/BiomesBounty/evergreen-map.png",
        types: [
            {
                head: "Taiga (Boreal Forest)",
                img: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722637539/BiomesBounty/evergreen-type1.jpg"
            },
            {
                head: "Temperate Rainforests",
                img: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722637686/BiomesBounty/evergreen-type2.jpg"
            }
        ]
    }
}, 
{
    id:'desert', 
    title: "Desert Biome",
    bgCover: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722638123/BiomesBounty/desert-leaves.jpg",
    info: {
        desc: "Desert biomes are characterized by their extremely low precipitation and wide temperature fluctuations. Vegetation is sparse, and species have adapted to survive in arid conditions.",
        key: {
            temp: "Hot during the day and cold at night (usually between 0°C and 40°C)",
            veg: "Cacti, Succulents, Drought-resistant shrubs and grasses",
            wildlife: "Camels, Snakes, Scorpions, Various insects and reptiles"
        },
        map: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722639264/BiomesBounty/desert-map.jpg",
        types: [
            {
                head: "Hot Deserts",
                img: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722638697/BiomesBounty/desert-type1.jpg"
            },
            {
                head: "Cold Deserts",
                img: "https://res.cloudinary.com/dihp6gdpi/image/upload/v1722638868/BiomesBounty/desert-type2.jpg"
            }
        ]
    }
}




]
export default data;