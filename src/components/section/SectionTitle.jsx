import React from "react";

function SectionTitle({ children, left }) {
  return <h2 className={`font-semibold text-2xl font-mono ${!left ? "text-center" : ""}`}>{children}</h2>;
}

export default SectionTitle;
