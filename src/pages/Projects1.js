import React from "react";
import ProjectItem1 from "../components/ProjectItem1";
import { ProjectList1 } from "../helpers/ProjectList1";

import "../styles/Projects.css";

function Projects1() {
  return (
    <div className="projects">
      <h1>Maps Description</h1>
      <div className="projectList">
        {ProjectList1.map((project1, idx) => {
          return (
            <ProjectItem1 id={idx} name={project1.name} image={project1.image} />
          );
        })}
      </div>
      <div>
      <p>For creating these maps, we have collected data from <a href="https://www.kashigeohub.org/">Kashi Geo Hub</a> 
        For creating these maps, we used the ArcGIS 10.8.1 software for buffer and network analysis. GIS buffer, 
        network and area analysis was used in measuring bus stop accessibility considering the road network surrounding it.The bus stops 
        data available in .kml format is analyzed using a software named Google Earth pro. </p>
      <h4>Maps Overview:</h4>
          <p>The objective of these maps are to develop transit accessibility to different places mainly focusing 
          on the religious structures based on the number and locations of bus stops.
          In order to improve the accessibility of the bus service shown in the map, a number of stops should be appropriately 
          located along the segment. Since buses will serve all stops, the increased bus travel time per trip will increase 
          proportionally with the number of stops. 
          To determine the optimal number and locations of bus stops considering realistic street patterns and spatial 
          boarding/alighting demand distributions. It is found that the optimal number and locations of the stops will be 
          affected by users' value of time, access speed and demand.
</p>
      </div>
    </div>
  );
}

export default Projects1;

