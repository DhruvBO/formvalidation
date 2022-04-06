import { SxProps, TextField } from "@mui/material";
import React from "react";
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
}: typePropes) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <TextField
          sx={{ ...customStyle }}
          type={type}
          label={label}
          onBlur={onBlur} // notify when input is touched
          onChange={onChange} // send value to hook form
          inputRef={ref}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default InputField;
