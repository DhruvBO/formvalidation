import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../sections/Input/Index";
import styles from "./styles";
import SelectField from "../sections/SelectField";
import TextArea from "../sections/TextAreaAutoSize";
import {
  ageError,
  emailError,
  genderError,
  nameError,
  phoneNoError,
} from "../../constants/formErrorMessage";
const RegisterationForm = () => {
  const [localSavedData, setLocalSavedData] = useState({
    fName: "",
    lName: "",
    mName: "",
    age: 0,
    email: "",
    gender: "",
    pNo: 0,
  });
  const [storeFormData, setStoreFormData] = useState({
    fName: "",
    lName: "",
    mName: "",
    age: 0,
    email: "",
    gender: "",
    pNo: 0,
  });

  const { control, handleSubmit, watch } = useForm({
    mode: "onChange",
  });

  const watchItems = watch();
  const storeData = () => {
    if (Object.keys(watchItems).length !== 0) {
      // setLocalSavedData(watchItems);
      const formData: string = JSON.stringify(watchItems);
      console.log("watchItems", formData);
      if (formData !== "" && formData !== null) {
        localStorage.setItem("formData", formData);
        console.log("local set");
        // setLocalSavedData(formData);
      }
    }
  };

  const onSubmitForm = (formData: any) => {
    console.log(formData);
    localStorage.clear();
  };

  useEffect(() => {
    storeData();
  }, [watchItems]);

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData !== null) {
      setLocalSavedData(formData);
    }
  }, []);
  console.log(watchItems);
  console.log(localSavedData);

  return (
    <Box sx={styles.wrapper}>
      <Box component="h1" sx={styles.inputField}>
        User Registration Form
      </Box>
      <Box sx={styles.form}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Box sx={styles.inputWrapper}>
            <InputField
              customStyle={styles.inputField}
              control={control}
              name="fName"
              label="Name"
              type="text"
              localValue={localSavedData.fName}
              rules={{
                required: {
                  value: true,
                  message: nameError.required,
                },
                minLength: {
                  value: 3,
                  message: nameError.minLength,
                },
                maxLength: {
                  value: 20,
                  message: nameError.maxLength,
                },
              }}
            />
            <InputField
              customStyle={styles.inputField}
              control={control}
              name="mName"
              label="Middle Name"
              type="text"
              localValue={localSavedData.mName}
              rules={{
                minLength: {
                  value: 3,
                  message: nameError.minLength,
                },
                maxLength: {
                  value: 20,
                  message: nameError.maxLength,
                },
              }}
            />
            <InputField
              customStyle={styles.inputField}
              control={control}
              name="lName"
              label="Last Name"
              type="text"
              localValue={localSavedData.lName}
              rules={{
                required: {
                  value: true,
                  message: nameError.required,
                },
                minLength: {
                  value: 3,
                  message: nameError.minLength,
                },
                maxLength: {
                  value: 20,
                  message: nameError.maxLength,
                },
              }}
            />

            <Box sx={styles.inputField}>
              <InputField
                customStyle={{ ...styles.inputEmail }}
                control={control}
                localValue={localSavedData.email}
                name="email"
                label="Email"
                type="email"
                rules={{
                  required: {
                    value: true,
                    message: emailError.required,
                  },
                  pattern: {
                    value: emailError.pattern,
                    message: emailError.message,
                  },
                }}
              />
            </Box>
            <Box>
              {/*  <InputField
                customStyle={styles.inputField}
                control={control}
                name="age"
                label="Age"
                type="number"
                // defaultValue={localSavedData.age ? localSavedData.age : ""}
                rules={{
                  required: {
                    value: true,
                    message: ageError.required,
                  },
                  min: {
                    value: 18,
                    message: ageError.min,
                  },
                  max: {
                    value: 150,
                    message: ageError.max,
                  },
                }}
              /> */}
              {/* <InputField
                customStyle={styles.inputField}
                control={control}
                name="pNo"
                label="Phone Number"
                type="number"
                // defaultValue={!!localSavedData.pNo ? localSavedData.pNo : ""}
                rules={{
                  required: {
                    value: true,
                    message: phoneNoError.required,
                  },
                  min: {
                    value: 1000000000,
                    message: phoneNoError.min,
                  },
                  max: {
                    value: 9999999999,
                    message: phoneNoError.max,
                  },
                }}
              /> */}
            </Box>
            <Box sx={styles.inputField}>
              <SelectField
                customStyle={styles.selectField}
                control={control}
                name="gender"
                label="Gender"
                menuOptions={[
                  {
                    value: "Select",
                    label: "Select",
                  },
                  {
                    value: "Male",
                    label: "Male",
                  },
                  {
                    value: "Female",
                    label: "Female",
                  },
                  {
                    value: "Other",
                    label: "Other",
                  },
                ]}
                rules={{
                  required: {
                    value: true,
                    message: genderError.required,
                  },
                }}
              />
            </Box>
            <Box sx={styles.inputField}>
              <TextArea
                customStyle={styles.textArea}
                control={control}
                multiline={true}
                name="address"
                label="Full Address"
                type="text"
                minRows={10}
                rules={{
                  required: {
                    value: true,
                    message: "This field is required.",
                  },
                  minLength: {
                    value: 20,
                    message: "Atleast 20 character required",
                  },
                  maxLength: {
                    value: 150,
                    message: "Maximum 150 character is allowed.",
                  },
                }}
              />
            </Box>
            <Box>
              <Button sx={styles.inputField} type="submit" variant="contained">
                Submit
              </Button>
              <Button type="reset" variant="outlined">
                Reset
              </Button>
            </Box>
          </Box>
        </form>
      </Box>

      <Box>
        {Object.keys(localSavedData).length !== 0 && (
          <Box>{JSON.stringify(localSavedData)}</Box>
        )}
      </Box>
    </Box>
  );
};

export default RegisterationForm;
