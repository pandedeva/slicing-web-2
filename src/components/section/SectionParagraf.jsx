import React from "react";

function SectionParagraf({ children, left }) {
  return <p className={`text-lg text-gray-400 mt-2 ${!left ? "text-center" : ""}`}>{children}</p>;
}

export default SectionParagraf;
