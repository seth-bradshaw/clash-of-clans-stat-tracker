import React from "react";

const Button: React.FC<any> = ({ children }) => {
  return (
    <button>
      {children}
    </button>
  );
}

export default Button;