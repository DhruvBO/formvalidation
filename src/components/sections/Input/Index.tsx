import { SxProps, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
type typePropes = {
  control: any;
  name: string;
  rules: object;
  label: string;
  type: string;
  customStyle: SxProps;
};

const InputField = ({
  control,
  name,
  rules,
  label,
  type,
  customStyle,
}:
typePropes) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error }, 
      }) => {
        return (
          <TextField
            sx={{ ...customStyle }}
            type={type}
            label={label}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            inputRef={ref}
            error={!!error}
            helperText={error?.message}
            InputLabelProps={{ shrink: value ? true : false }}  
          />
        );
      }}
    />
  );
};

export default InputField;
