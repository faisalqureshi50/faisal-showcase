import React, { ButtonHTMLAttributes, FC } from "react";
import classname from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const Button: FC<Props> = ({
  children,
  className,
  color = "border-green-400 bg-green-400 hover:border-green-700 hover:bg-green-700",
  ...props
}) => {
  return (
    <button
      {...props}
      className={classname("py-2 px-4 outline-none  rounded text-white", className, color)}
    >
      {children}
    </button>
  );
};

export default Button;
