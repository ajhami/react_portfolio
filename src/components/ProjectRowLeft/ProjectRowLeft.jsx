import React from "react";
import "./style.css";

function ProjectRowLeft(props) {
    return (
        <section className="row portfolio_item">
            <div className="col-md-4 img_section">
                <div
                    className="project_img"
                    style={{ backgroundImage: `url(${props.appImage})` }}
                ></div>
                <span className="image_label">
                    {props.title}
                </span>
            </div>
            <div className="col-md-8">
                <h2 className="portfolio_item_title">
                    {props.title}
                </h2>
                <p className="portfolio_item_text">
                    {props.description}
                </p>
                <button
                    className="app_btn"
                    onClick={() => window.location.href=`${props.appLink}`}
                >
                    View Project
                </button>
                <button
                    className="repo_btn"
                    onClick={() => window.location.href=`${props.repoLink}`}
                >
                    View Repo
                </button>
            </div>
        </section>
    )
}

export default ProjectRowLeft;