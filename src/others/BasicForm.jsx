import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useFormik } from "formik";

const formValidation = (values) => {
  const errors = {};
  console.log("formValidation", values);
  // for email
  if (values.email.length < 5) {
    errors.password = "please enter long email";
  }

  // for password
  if (values.password.length < 8) {
    errors.password = "please enter long password";
  }

  return errors;
};

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "yash@", password: "" },
    validate: formValidation,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });
  return (
    <div className="formContainer">
      <div className="formContainer-page">
        <h1>Formik Welcomes You !!</h1>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            fullWidth
          />
          {formik.errors.email}

          <TextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            fullWidth
          />
          {formik.errors.password}

          <Button type="submit" variant="contained" size="large">
            Submit Form
          </Button>
        </form>
      </div>
    </div>
  );
}
