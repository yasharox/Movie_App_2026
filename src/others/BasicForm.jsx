import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useFormik } from "formik";

const formValidation = (values) => {
  const errors = {};
  console.log("formValidation", values);
  // for email
  if (values.email.length < 5) {
    errors.email = "please enter longer email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // for password
  if (values.password.length < 8) {
    errors.password = "please enter long password";
  } else if (values.password.length > 12) {
    errors.password = "please enter shorter password";
  }

  return errors;
};

export function BasicForm() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: { email: "@gmail.com", password: "" },
      validate: formValidation,
      onSubmit: (values, { resetForm }) => {
        console.log("onSubmit", values);
        resetForm();
      },
    });
  return (
    <div className="formContainer">
      <div className="formContainer-page">
        <h1>Formik Welcomes You !!</h1>

        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
          {errors.email && touched.email ? errors.email : ""}

          <TextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />

          {errors.password && touched.password ? errors.password : ""}

          <Button type="submit" variant="contained" size="large">
            Submit Form
          </Button>
        </form>
      </div>
    </div>
  );
}
