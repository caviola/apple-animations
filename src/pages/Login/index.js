import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, Redirect } from "react-router-dom";
import cx from "classnames";
import { login, useAuthenticatedUser } from "../../common/session";
import form from "../../common/forms.module.scss";
import styles from "./styles.module.scss";

const requiredFieldMessage = "This field is required";
const initialPage = "/iphone";

function Login({ history, location }) {
  // Where to go after successful login.
  const destination =
    location.state && location.state.referer
      ? location.state.referer
      : initialPage;

  function validate(values) {
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
      values.email === "invalid@example.com" &&
      values.pwd === "123456"
    ) {
      errors.email = errors.pwd = "Invalid credentials.";
    }

    return errors;
  }

  function submit(values, { setSubmitting }) {
    // Call login API and on success redirect to referer or initial page.
    login(values.email, values.pwd).then(() => {
      history.push(destination, {
        referer: location.pathname,
        animate: true,
        transitionClass: "scale-down",
      });
    });
  }

  const user = useAuthenticatedUser();

  return user ? (
    <Redirect
      to={{
        pathname: destination,
        state: {
          animate: true,
          transitionClass: "scale-down",
        },
      }}
    />
  ) : (
    <div className={styles.container}>
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
        {({ errors, isSubmitting }) => {
          return (
            <Form className={cx(form.form, styles.form)}>
              <div className={form.title}>Login</div>
              <div className={form.field}>
                <Field name="email" type="email" placeholder="Email" />
                {errors.email && (
                  <div className={form.error}>{errors.email}</div>
                )}
              </div>
              <div className={form.field}>
                <Field name="pwd" type="password" placeholder="Password" />
                {errors.pwd && <div className={form.error}>{errors.pwd}</div>}
              </div>
              <div className={form.actions}>
                <button type="submit" disabled={isSubmitting}>
                  Login
                </button>
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
}

export default Login;
