import React, { FC, HTMLProps } from "react";

const Card: FC<HTMLProps<HTMLDivElement>> = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`card ${className}`}>
      {children}
    </div>
  );
};

export default Card;
