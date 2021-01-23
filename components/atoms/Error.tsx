import React, { FC } from "react";

interface Props {
  className?: string;
}
const Error: FC<Props> = ({ children, className = "" }) => {
  return <p className={`text-sm mb-2 text-red-400 ${className}`}>{children}</p>;
};

export default Error;
