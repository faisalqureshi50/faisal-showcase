import ReactSelect, { Props as ReactSelectProps } from "react-select";
import AsyncSelect from "react-select/async";
import React, { useState } from "react";
import Label from "../atoms/Label";
import Error from "../atoms/Error";

export interface Props extends ReactSelectProps {
  error?: string;
  label?: string;
  required?: boolean;
  isAsync?: boolean;
}

const Select = ({ error, label, required, isAsync, loadOptions, onBlur, ...props }: Props) => {
  return (
    <Label>
      {label && (
        <p className="mb-2">
          {label} {required && <span className="text-red-400">*</span>}
        </p>
      )}
      {isAsync ? <AsyncSelect loadOptions={loadOptions} {...props} /> : <ReactSelect {...props} />}
      {error && <Error className="mt-2">{error}</Error>}
    </Label>
  );
};

export default Select;
