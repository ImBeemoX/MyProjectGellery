import React from "react";

const Project = ({ title, lang, description, image }) => {
  return (
    <div className="Project">
      <img className="Image" src={image} alt=""></img>
      <h1 style={{ color: "green", fontSize: 20 }}>{title}</h1>
      <h1 style={{ color: "yellow", fontSize: 16 }}>{lang}</h1>
      <p>{description}</p>
      <button className="hvr-shutter-out-vertical">View Details</button>
    </div>
  );
};

export default Project;
