import React from "react";

function Button({ children, className, variant }) {
  const addClassName = className ? `${className}` : "";

  const variants = {
    "outline-yellow": "border-yellow-500 text-yellow-500 border rounded-full",
    yellow: "bg-yellow-500 border rounded-full",
    black: "bg-black text-white",
  };

  const pickedVariant = variants[variant];

  return (
    <>
      <a href="/#" className={`inline-block py-2 font-semibold px-9 text-lg ${pickedVariant}    ${addClassName}`}>
        {children}
      </a>
    </>
  );
}

export default Button;
