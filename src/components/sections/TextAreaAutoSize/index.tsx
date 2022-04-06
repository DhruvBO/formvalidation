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
  multiline: boolean;
  minRows: number;
};

const TextArea = ({
  control,
  name,
  rules,
  label,
  type,
  customStyle,
  multiline,
  minRows,
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
          multiline={multiline}
          type={type}
          label={label}
          minRows={multiline ? minRows : 1}
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

export default TextArea;
