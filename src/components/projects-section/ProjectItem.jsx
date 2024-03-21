import React from "react";

function ProjectItem({ image, name, description }) {
  return (
    <>
      <article className="text-center">
        <img src={image} className="w-full" />
        <h3 className="font-semibold text-xl mb-3 mt-5">{name}</h3>
        <p className="text-lg text-gray-400">{description}</p>
      </article>
    </>
  );
}

export default ProjectItem;
