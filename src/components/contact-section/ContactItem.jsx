import React from "react";

function ContactItem({ label, value, icon, className }) {
  const addClassName = className ? `${className}` : "";

  return (
    <div className={`flex items-center ${addClassName}`}>
      <img className="w-6 font-semibold" src={icon} alt={label} />
      <div className="ml-5">
        <h4 className="font-semibold text-sm ">{label}</h4>
        <p className="font-semibold text-lg">{value}</p>
      </div>
    </div>
  );
}

export default ContactItem;
