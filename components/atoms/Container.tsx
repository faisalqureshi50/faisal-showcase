import React, { FC } from "react";

interface Props {
  className?: string;
}

const Container: FC<Props> = ({ className = "", children }) => {
  return <div className={`max-w-screen-xl w-full mx-auto px-4 ${className}`}>{children}</div>;
};

export default Container;
