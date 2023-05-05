import map1 from "../assets/maps/1st.jpg";
import map2 from "../assets/maps/map279.png";
import map3 from "../assets/maps/map_google_earth1.jpg";
import map4 from "../assets/maps/ropeway.png";
import map5 from "../assets/maps/buffer1.png";
import map6 from "../assets/maps/buffer2.png";

export const ProjectList1 = [
  {
    name: "Residential Plots Map",
    image: map1,
    description: "The map highlights the population diversity living in city with population density of 2399 per square kilometer it is very populous. This makes a transport availability a major problem and since there are too much of people for travelling in a given part of area so it becomes a very tough task for even public transport The areas near ghats are densly populated as they mark for high number of residential buildings as it is a major attraction for pilgrims with 3 million tourist visit in a year 2021. Major of the pilgrims hotspots are near the area of river banks or close to it and thus the population is mainly at river banks or areas within periphery of 2 to 3 kms of it owing to development requirements of the the tourist. But all these have created a problem for smooth transportation as the map suggests the area is locked with heavy dose of residential plottings leaving no door for bus stops. The area near Gowdolia stretching to Assi witnesses a great zeal of public transport mismanagement and inadequacy basically all the left hand banks are highly populated. As we move away, residential ploting coverage decreases as no such tourist spots are found there hence the bus stops increases. So, we can derive that the major problem of transportation in varanasi is near the tourists hotspots as the public buses are not available and the tuk tuks and auto rickshaws create a great hurdle for transportation resulting in huge public traffic" ,
  },
  {
    name: "Bus Stops Map",
    image: map3,
    description: "The given map shows all the Bus Stops in Varanasi. The availability of bus stops are not adequate throughout the city. Majority of the bus stops are isolated as they are not used to its full potential and some of them are  or basically all of them are at a distance from the dense public. Since as the map converges with the root survey as said by people the lack of adequate bus facilty and the failure of bus usage by local people.",
  },
  {
    name: "Bus Stops Buffer Zone",
    image: map5,
    description: "The Abouve map shows the buffer zone of every bus stop located in Varanasi. These zones shows that how much area is easily accessable from a bus stop.The buffer analysis is used to estimate access coverage of bus stops on the basis of the actual road network surrounding the bus stop. Used buffer attribute under geoprocessing feature in ArcGIS. All the road networks connected to the stop within the delineated 500 m walking distance of the access threshold around each bus stop are considered. The ends of the access roads within the circular buffer, also called “ideal access coverage” is created for the bus stop. The area of the created circle, 0.5 km circular buffer is considered representative of accessibility when determining the measure of the bus stop access coverage.",
  },
  {
    name: "Religious Structures Map",
    image: map2,
    description: "This map shows the religious structues located in Varanasi.",
  },
  {
    name: "Religious Structures Buffer Zone",
    image: map6,
    description: "React,Node.js,MySQL,GraphQL",
  },
  {
    name: "Ropeway Map",
    image: map4,
    description: "Above Map is the ropeway path decide for the city. The red lines in the map shows phase 1 passenger ropeway from Varanasi Cantonment station to Kashi Vishwanath Corridor, Godaulia. The 3.75-kilometre ropeway project, estimated to cost Rs 645 crore, will have five stations and facilitate the ease of movement for tourists, pilgrims and residents. When the project takes shape, pilgrims will be able to board the ropeway to reach Godaulia, Kashi Vishwanath Temple and Dashashwamedh Ghat. Varanasi Ropeway will be India's first Ropeway Public Transport System. And the Ropeway will render speedy and easy connectivity, particularly to tourist hotspots. The blue lines in the map represents Ropeway lines and blue small dots represent Ropeway stops.",
  },
];
