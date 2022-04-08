import { MenuItem, SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

type typePropes = {
  control: any;
  name: string;
  rules: object;
  label: string;
  menuOptions: any;
  customStyle: SxProps;
};

const SelectField = ({
  control,
  name,
  rules,
  label,
  menuOptions,
  customStyle,
}: typePropes) => {
  // console.log(menuOptions);
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
          select
          label={label}
          value={value}
          onBlur={onBlur} 
          onChange={onChange} 
          inputRef={ref}
          error={!!error}
          helperText={error?.message}
        >
          {menuOptions.map((option: any, index: any) => {
            return (
              <MenuItem key={option["value"]} value={option["value"]}>
                {option["label"]}
              </MenuItem>
            );
          })}
        </TextField>
      )}
    />
  );
};

export default SelectField;
