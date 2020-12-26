import React, { useState, useContext } from "react";
import "./ToggleSwitch.css";

export default function ToggleSwitch({visible, setVisible}) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={visible}
        onChange={() => {
          setVisible(!visible);
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};
