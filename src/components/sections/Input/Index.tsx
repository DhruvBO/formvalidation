import { SxProps, TextField } from "@mui/material";
import { AnyAaaaRecord } from "dns";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
type typePropes = {
  control: any;
  name: string;
  rules: object;
  label: string;
  type: string;
  customStyle: SxProps;
  localValue: string | number,
};

const InputField = ({
  control,
  name,
  rules,
  label,
  type,
  customStyle,
  localValue,
}: 
typePropes) => {
  // const [defaultVal, setDefaultVal] = useState(savedValue);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => {
        /* const handleOnChange = (e: any) => {
          setDefaultVal(e.target.value);
        }; */
        return (
          <TextField
            sx={{ ...customStyle }}
            type={type}
            value={localValue}
            label={label}
            onBlur={onBlur}
            onChange={onChange}
            inputRef={ref}
            error={!!error}
            helperText={error?.message}
          />
        );
      }}
    />
  );
};

export default InputField;
