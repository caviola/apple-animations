import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import "../../common/forms.scss";
import "./styles.scss";

const requiredFieldMessage = "This field is required";

const Login = ({ history }) => {
  const validate = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = requiredFieldMessage;
    }

    if (!values.pwd) {
      errors.pwd = requiredFieldMessage;
    }

    // TODO: simulate invalid credentials
    if (
      values.email &&
      values.pwd &&
      (values.email !== "example@example.com" || values.pwd !== "123456")
    ) {
      errors.email = errors.pwd = "Invalid credentials.";
    }

    return errors;
  };

  const submit = (values) => {
    history.push({
      pathname: "/iphone",
      state: {
        animate: true,
        transitionClass: "scale-down",
      },
    });
  };

  return (
    <div className="login-form-container">
      <Formik
        initialValues={{
          email: "",
          pwd: "",
        }}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={submit}
        validate={validate}
      >
        {({ errors, values }) => {
          return (
            <Form className="form login-form">
              <div className="form-title">Login</div>
              <div className="form-field">
                <Field name="email" type="email" placeholder="Email" />
                {errors.email && (
                  <div className="form-field-error">{errors.email}</div>
                )}
              </div>
              <div className="form-field">
                <Field name="pwd" type="password" placeholder="Password" />
                {errors.pwd && (
                  <div className="form-field-error">{errors.pwd}</div>
                )}
              </div>
              <div className="form-actions">
                <button type="submit">Login</button>
              </div>
              <p>
                Don't have an account? <Link to="/register">Register now</Link>
              </p>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
