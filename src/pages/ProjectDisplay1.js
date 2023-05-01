import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList1 } from "../helpers/ProjectList1";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay1() {
  const { id } = useParams();
  const project1 = ProjectList1[id];
  return (
    <div className="project">
      <h1> {project1.name}</h1>
      <img src={project1.image} />
      <p>
        <b>Skills:</b> {project1.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay1;
