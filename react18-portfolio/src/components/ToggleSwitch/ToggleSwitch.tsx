import "./ToggleSwitch.scss";
import React, { useState } from "react";
import emoji from "react-easy-emoji";
import { useStyle } from "../../contexts/StyleContext";


const ToggleSwitch: React.FC = () => {
  const { isDark, changeTheme } = useStyle();
  const [isChecked, setChecked] = useState(isDark);

  const handleToggle = () => {
    changeTheme();
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
