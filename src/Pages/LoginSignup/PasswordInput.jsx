import React, { useState } from "react";
import "./Login.css";

const PasswordInput = ({ placeholder, onChange }) => {
  const [strength, setStrength] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const getStrength = (password) => {
    let strengthIndicator = -1;

    if (/[a-z]/.test(password)) strengthIndicator++;
    if (/[A-Z]/.test(password)) strengthIndicator++;
    if (/\d/.test(password)) strengthIndicator++;
    if (/[^a-zA-Z0-9]/.test(password)) strengthIndicator++;

    if (password.length >= 8) strengthIndicator++;

    return strengthLabels[strengthIndicator];
  };

  const handleChange = (event) => {
    setStrength(getStrength(event.target.value));
    onChange(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const strengthLabels = ["weak", "medium", "medium", "strong"];

  return (
    <>
      <div className={`input-box ${isFocused || strength ? 'focused' : ''}`}>
        <input
          name="password"
          spellCheck="false"
          className="password-input"
          type="password"
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label className="xy">{placeholder}</label>
      </div>
      <div className={`bars ${strength}`}>
        <div></div>
      </div>
      <div className="strength-label">{strength && `${strength} password`}</div>
    </>
  );
};

export default PasswordInput;
