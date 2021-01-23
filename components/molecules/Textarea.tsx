import React, { FC, forwardRef, HTMLProps, useRef } from "react";
import Error from "../atoms/Error";
import Label from "../atoms/Label";

interface Props extends HTMLProps<HTMLTextAreaElement> {
  error?: string;
  label?: string;
  required?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className = "", label, error, required, ...props }, ref) => {
    return (
      <Label>
        <p className="mb-2">
          {label} {required && <span className="text-red-400">*</span>}
        </p>
        <textarea
          {...props}
          ref={ref}
          className={`p-2 border rounded outline-none w-full ${className}`}
        />
        {error && <Error className="mb-0 mt-2">{error}</Error>}
      </Label>
    );
  }
);

export default Textarea;
