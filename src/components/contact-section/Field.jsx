import React from "react";

function Field({ label, name, type, className }) {
  const addClassName = className ? `${className}` : "";

  const formControlClassName = `border px-4 w-full py-2 border-dust-300 bg-transparent ${addClassName}`;

  return (
    <div className="mb-8">
      <label htmlFor={name} className="font-semibold text-sm block mb-1">
        {label}
      </label>

      {type === "text" && <input type="text" name={name} id={name} className={formControlClassName} />}

      {type === "textarea" && <textarea name={name} id={name} className={formControlClassName} />}
    </div>
  );
}

export default Field;
