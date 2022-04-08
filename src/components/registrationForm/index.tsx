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
  const [clearForm, setClearForm] = useState(false);

  const { control, handleSubmit, watch, setValue, reset } = useForm({
    mode: "onChange",
  });

  const watchItems = watch();
  const storeData = () => {
    if (Object.keys(watchItems).length !== 0) {
      const formData: string = JSON.stringify(watchItems);
      console.log("watchItems", formData);
      if (formData !== "" && formData !== null) {
        localStorage.setItem("formData", formData);
        console.log("local set");
      }
    }
  };

  useEffect(() => {
    storeData();
  }, [watchItems]);

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData !== null) {
      setValue("fName", formData?.fName, {
        shouldValidate: true,
        shouldTouch: true,
        shouldDirty: true,
      });
      setValue("mName", formData?.lName, {
        shouldValidate: true,
        shouldDirty: true,
      });
      setValue("lName", formData?.mName, { shouldValidate: true });
      setValue("email", formData?.email, { shouldValidate: true });
      setValue("age", formData?.age, { shouldValidate: true });
      setValue("pNo", formData?.pNo, { shouldValidate: true });
      setValue("select", formData?.select, { shouldValidate: true });
      setValue("address", formData?.address, { shouldValidate: true });
    }
  }, []);
  console.log(watchItems);

  const onSubmitForm = (formData: any) => {
    reset();
    console.log("submit", formData);
    localStorage.removeItem("formData");
    window.location.reload();
  };

  const resetForm = () => {
    reset();
    console.log("reset");
    localStorage.removeItem("formData");
  };

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
              <InputField
                customStyle={styles.inputField}
                control={control}
                name="age"
                label="Age"
                type="number"
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
              />
              <InputField
                customStyle={styles.inputField}
                control={control}
                name="pNo"
                label="Phone Number"
                type="number"
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
              />
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
            <Box sx={styles.inputField}>
              <Button sx={styles.inputField} type="submit" variant="contained">
                Submit
              </Button>
              <Button
                sx={styles.inputField}
                onClick={() => resetForm()}
                variant="outlined"
                type="reset"
              >
                Reset
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterationForm;
