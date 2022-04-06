import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../sections/Input/Index";
import styles from "./styles";
import SelectField from "../sections/SelectField";
import TextArea from "../sections/TextAreaAutoSize";
const RegisterationForm = () => {
  const [storeFormData, setStoreFormData] = useState({
    fName: "",
    lName: "",
    mName: "",
    age: 0,
    email: "",
    gender: "",
    pNo: 0,
  });

  const { control, register, handleSubmit, watch } = useForm({
    mode: "onChange",
  });


  const onSubmitForm = (formData: any) => {
    console.log(formData);
    localStorage.clear();
  };
  const watchItems = watch();
  const storeData = () => {
    const formData = JSON.stringify(watchItems);
    if (Object.keys(watchItems).length !== 0) {
      localStorage.setItem("formData", formData);
    }
  };

  useEffect(() => {

    storeData();
  }, [watchItems]);

  const componentDidMount = () => {
    let savedFormData : object = {};
    if (localStorage.getItem("formData") !== null)
      savedFormData = JSON.parse(localStorage.getItem("formData")) 
  }

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
              defaultValue={}
              rules={{
                required: {
                  value: true,
                  message: "This field is required.",
                },
                minLength: {
                  value: 3,
                  message: "Atleast 3 character required",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum 20 character is allowed.",
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
                  message: "Atleast 3 character required",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum 20 character is allowed.",
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
                  message: "This field is required.",
                },
                minLength: {
                  value: 3,
                  message: "Atleast 3 character required",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum 20 character is allowed.",
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
                    message: "This field is required.",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter valid email address.",
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
                    value: "true",
                    message: "This field is required.",
                  },
                  min: {
                    value: 18,
                    message: "You are not eligible",
                  },
                  max: {
                    value: 150,
                    message: "Yoy are not eligible",
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
                    message: "This field is required.",
                  },
                  min: {
                    value: 1000000000,
                    message: "Please enter 10 digit valid phone number",
                  },
                  max: {
                    value: 9999999999,
                    message: "Please enter 10 digit valid phone number.",
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
                    value: "male",
                    label: "Male",
                  },
                  {
                    value: "female",
                    label: "Female",
                  },
                  {
                    value: "other",
                    label: "Other",
                  },
                ]}
                rules={{
                  required: {
                    value: true,
                    message: "This field is required.",
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
      {/* <Box>
          {JSON.stringify(FormData)}
        </Box> */}
    </Box>
  );
};

export default RegisterationForm;
function componentWillUnmount(arg0: () => void) {
  throw new Error("Function not implemented.");
}
