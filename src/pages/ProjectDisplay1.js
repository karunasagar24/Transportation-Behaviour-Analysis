import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList1 } from "../helpers/ProjectList1";
import "../styles/ProjectDisplay1.css";

function ProjectDisplay1() {
  const { id } = useParams();
  const project1 = ProjectList1[id];
  return (
    <>
    <div className="project">
      <h1> {project1.name}</h1>
      <img src={project1.image} />
      </div>
    <div className="des">
    <p>
        <b>Description:</b> {project1.description}
      </p>
    </div>
    </>
  );
}

export default ProjectDisplay1;
