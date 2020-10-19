import React from "react";
import "./Button.css";
const Button = ({ content, type, onPress }) => {
  return (
    <div
      className={`Button ${content === "0" ? "zero" : " "} ${type || ""}`}
      onClick={onPress(content)}
    >
      {content}
    </div>
  );
};

export default Button;
