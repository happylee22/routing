import React from "react";

function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col ">
      <label className="font-bold">{`${label}:`}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-400 w-full"
      />
    </div>
  );
}

export default Input;
