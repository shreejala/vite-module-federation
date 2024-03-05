import React from "react";

const Button = ({ title = "Press here", onClick = () => {} }) => {
  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  );
};

export default Button;
