import React from "react";
import ProjectItem1 from "../components/ProjectItem1";
import { ProjectList1 } from "../helpers/ProjectList1";

import "../styles/Projects.css";

function Projects1() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList1.map((project1, idx) => {
          return (
            <ProjectItem1 id={idx} name={project1.name} image={project1.image} />
          );
        })}
      </div>
      <div>
      <p>A total of 151 surveys were collected to study the transportation patters of both tourist and local netizens. 
          Being a tourist attraction there was ample data for both locals and tourists corresponding to 58.7% and 41.3% respectively.
          Out of total surveys there was a good response from both the genders having a percentage of 62% for male and 38% for females.
          Having a usage of diversified transportation practices for diversified usage there were different types and modes of transport 
          used by different age groups. Our data collection outlined the pragmatic use of transport with respect to age group.
          The maximum usage of transport was found to be used by the people falling under the age group of 16 to 30 years having usage 
          corresponding to 59.7% of the total survey. Second group with maximum usage was found to be falling between the age group of 
          31 to 45 sharing the percentage of 24.8% While the people between the age group of 45 to 60 counted the share of 7.4% contradicting 
          to which senior locals and tourist contributed for 2.7% And 5.4% was usage found by people under the age of 16 years.</p>
      <h4>TRANSPORT BEHAVIOUR</h4>
          <p>Of the diverse survey collected, the majority were found to be using bikes for their routine traveling(42.1%) and there 
          were other modes of transport which were being practiced which were found to be 37.9% for auto and bicycle was found to be 11%.
          Majority of localities were found using the bike or more precisely two wheelers for their daily
          Majority of the population dont use the buses for local travelling out of which majority of travellers who used buses were 
          tourist while those who were locally from varanasi used only bike as their means of transport.
          Womens found it more safe to travel using their personel bikes and scooters. 
          Out of total tourists most of the tourist preferred tuk tuks or autorickshaws to travel from their places to other</p>
      </div>
    </div>
  );
}

export default Projects1;

