import React from "react";
import { Link } from "react-router-dom";

const Gallery = ({ data }) => {
  const people = data.map((person) => {
    return (
      <div>
        {person.name}click:<Link to={`/gallery/${person.name}`}>here</Link>
      </div>
    );
  });
  return <div className="gallery">{people}</div>;
};

export default Gallery;
