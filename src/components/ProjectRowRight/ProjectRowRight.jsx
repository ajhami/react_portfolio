import React from "react";
import "./style.css";

function ProjectRowRight(props) {
    return (
        <section className="row portfolio_item">
            <div className="col-md-8">
                <h2 className="portfolio_item_title">
                    {props.title}
                </h2>
                <p className="portfolio_item_text">
                    {props.description}
                </p>
                <button
                    className="app_btn"
                    onClick={() => window.location.href = `${props.appLink}`}
                >
                    <i className="fa fa-eye portfolio_btns"></i>
                </button>
                <button
                    className="repo_btn"
                    onClick={() => window.location.href = `${props.repoLink}`}
                >
                    <i className="fa fa-github portfolio_btns"></i>
                </button>
            </div>
            <div className="col-md-4 img_section">
                {/* <div
                    className="project_img"
                    id={props.idTag}
                ></div> */}
                <img
                    className="project_img"
                    src={process.env.PUBLIC_URL + "/assets/images/" + props.appImage}
                    alt={props.name}
                />
                <span className="image_label">
                    {props.title}
                </span>
            </div>
        </section>
    )
}

export default ProjectRowRight;