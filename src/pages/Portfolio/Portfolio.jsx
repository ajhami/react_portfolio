import React from "react";
import "./style.css";
import ProjectRowLeft from "./../../components/ProjectRowLeft";
import ProjectRowRight from "./../../components/ProjectRowRight";
import projects from "./../../projects.json";
import TitleHeader from "../../components/TitleHeader";

function Portfolio() {

    return (
        <div>
            <TitleHeader title="Projects" />
            {projects.map(project => {

                // Adding appropriate hr along bottom
                if (project.id < 5) {

                    // Alternating between image/description layouts
                    if (project.id % 2 === 1) {
                        return (
                            <div key={project.id}>
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
                            <div key={project.id}>
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
                            <div key={project.id}>
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
                            <div key={project.id}>
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