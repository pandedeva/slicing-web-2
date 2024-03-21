import React from "react";

function SkillCard({ name, image, level, imageClassName }) {
  const addImageClassName = imageClassName ? `${imageClassName}` : "";
  return (
    <div className="p-6 bg-white shadow-skill rounded-lg flex items-center">
      <img src={image} className={`h-14 ${addImageClassName}`} alt={name} />
      <div className="ml-5">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="font-semibold text-sm text-gray-400">{level}</p>
      </div>
    </div>
  );
}

export default SkillCard;
