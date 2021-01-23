import React, { FC, HTMLProps } from "react";

const Label: FC<HTMLProps<HTMLLabelElement>> = ({ children, className = "", ...props }) => {
  return (
    <label className={`mb-2 font-medium block ${className}`} {...props}>
      {children}
    </label>
  );
};

export default Label;
