import React, { FC, forwardRef, HTMLProps, useRef } from "react";
import Error from "../atoms/Error";
import Label from "../atoms/Label";

interface Props extends HTMLProps<HTMLInputElement> {
  error?: string;
  label?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className = "", label, error, required, ...props }, ref) => {
    return (
      <Label>
        <p className="mb-2">
          {label} {required && <span className="text-red-400">*</span>}
        </p>
        <input
          {...props}
          ref={ref}
          className={`p-2 border rounded outline-none w-full ${className}`}
        />
        {error && <Error className="mb-0 mt-2 text-left">{error}</Error>}
      </Label>
    );
  }
);

export default Input;
