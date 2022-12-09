import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import cx from "classnames";
import { login, useAuthenticatedUser } from "../../common/session";
import form from "../../common/forms.module.scss";
import styles from "./styles.module.scss";

const requiredFieldMessage = "This field is required";
const initialPage = "/iphone";

function Login() {
  const location = useLocation();
  let navigate = useNavigate();

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

  function submit(values) {
    // Call login API and on success redirect to referer or initial page.
    login(values.email, values.pwd).then(() => {
      navigate(destination, {
        referer: location.pathname,
        animate: true,
        transitionClass: "scale-down",
      });
    });
  }

  const user = useAuthenticatedUser();

  return user ? (
    <Navigate
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
              <div>
                <p>
                  Don't have an account?{" "}
                  <Link to="/register">Register now</Link>
                </p>
                <p>
                  This demo SPA showcases transitions between pages and element
                  animations within each page, eg: when clicking a product page
                  link in the header, the destination page will be animated in
                  and the old page will be animated out. Besides, some elements
                  of the appearing page will be animated as the enter the
                  screen.
                </p>
                <p>
                  <strong>Use any email and password to login. </strong>
                  Use email <i>invalid@example.com</i> and password{" "}
                  <i>123456</i> to simulated failed login.
                </p>
                <p>
                  This app uses with React, React Router, SASS, CSS Modules,
                  Formik, CSS Transition Group and CSS3 transitions and source
                  code can be found at: <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/caviola/apple-animations"
                  >
                    https://github.com/caviola/apple-animations
                  </a>
                  .
                </p>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
