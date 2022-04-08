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
        field: { onChange, onBlur, value, ref },
        fieldState: { error }
      }) => (
        <TextField
          sx={{ ...customStyle }}
          multiline={multiline}
          type={type}
          label={label}
          value={value}
          minRows={minRows}
          onBlur={onBlur} 
          onChange={onChange}
          inputRef={ref}
          InputLabelProps={{ shrink: value ? true : false }}  
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default TextArea;
