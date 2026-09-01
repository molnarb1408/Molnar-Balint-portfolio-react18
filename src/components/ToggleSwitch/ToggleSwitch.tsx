import "./ToggleSwitch.scss";
import React, { useState } from "react";
import { useStyle } from "../../hooks/useStyle";

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
        <span className="emoji">{isChecked ? "🌜" : "☀️"}</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
