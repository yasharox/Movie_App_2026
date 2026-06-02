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
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.errors.email && formik.touched.email
            ? formik.errors.email
            : ""}

          <TextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />

          {formik.errors.password && formik.touched.password
            ? formik.errors.password
            : ""}

          <Button type="submit" variant="contained" size="large">
            Submit Form
          </Button>
        </form>
      </div>
    </div>
  );
}
