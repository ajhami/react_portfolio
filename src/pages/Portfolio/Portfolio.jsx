import React from "react";
import "./style.css";
import ProjectRowLeft from "./../../components/ProjectRowLeft";
import ProjectRowRight from "./../../components/ProjectRowRight";

// const PROJECTS = process.env.PUBLIC_URL + "/assets/data/projects.json";

import projects from "./../../projects.json";

function Portfolio() {

    return (
        <div>
            {projects.map(project => {
                if(project.id % 2 === 1) {
                    return <ProjectRowLeft 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        repoLink={project.repoLink}
                        appLink={project.appLink}
                        appImage={project.appLink}
                    />
                }
                else {
                    return <ProjectRowRight 
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    repoLink={project.repoLink}
                    appLink={project.appLink}
                    appImage={project.appLink}
                />
                }
            })}
        </div>
    )

};

export default Portfolio;