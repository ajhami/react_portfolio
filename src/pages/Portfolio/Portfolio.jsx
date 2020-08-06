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

                // Adding appropriate hr along bottom
                if (project.id !== 3) {

                    // Alternating between image/description layouts
                    if (project.id % 2 === 1) {
                        return (
                            <div>
                                <ProjectRowLeft
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    repoLink={project.repoLink}
                                    appLink={project.appLink}
                                    appImage={project.appImage}
                                    idTag={project.idTag}
                                />
                                <hr className="sep_hr" />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <ProjectRowRight
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    repoLink={project.repoLink}
                                    appLink={project.appLink}
                                    appImage={project.appImage}
                                    idTag={project.idTag}
                                />
                                <hr className="sep_hr" />
                            </div>
                        )
                    }

                }

                else {
                    if (project.id % 2 === 1) {
                        return (
                            <div>
                                <ProjectRowLeft
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    repoLink={project.repoLink}
                                    appLink={project.appLink}
                                    appImage={project.appImage}
                                    idTag={project.idTag}
                                />
                                <hr className="footer_hr" />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <ProjectRowRight
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    repoLink={project.repoLink}
                                    appLink={project.appLink}
                                    appImage={project.appImage}
                                    idTag={project.idTag}
                                />
                                <hr className="footer_hr" />
                            </div>
                        )
                    }
                }

            })}
        </div>
    )

};

export default Portfolio;