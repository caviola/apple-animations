import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import cx from "classnames";
import form from "../../common/forms.module.scss";
import styles from "./styles.module.scss";

const requiredFieldMessage = "This field is required";

function RegistrationForm({ history }) {
  function validate(values) {
    let errors = {};

    if (!values.firstname) {
      errors.firstname = requiredFieldMessage;
    }

    if (!values.lastname) {
      errors.lastname = requiredFieldMessage;
    }

    if (!values.email) {
      errors.email = requiredFieldMessage;
    }

    if (values.pwd1.length < 6 || values.pwd2.length < 6) {
      errors.pwd1 = errors.pwd2 = "Password must have at least 6 characters.";
    }

    if (values.pwd1 !== values.pwd2) {
      errors.pwd1 = errors.pwd2 = "Password don't match.";
    }

    return errors;
  }

  function submit(values) {
    // TODO: call back-end API and redirect on success.
    history.push("/");
  }

  // TODO: note we can extract .form-field into a reusable component FormField
  // that takes care of 'required' validation and showing the error if any.

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          pwd1: "",
          pwd2: "",
        }}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={submit}
        validate={validate}
      >
        {({ errors, values }) => {
          return (
            <Form className={cx(form.form, styles.form)}>
              <div className={form.title}>Create account</div>
              <div className={form.field}>
                <Field name="firstname" placeholder="First name" />
                {errors.firstname && (
                  <div className={form.error}>{errors.firstname}</div>
                )}
              </div>
              <div className={form.field}>
                <Field name="lastname" placeholder="Last name" />
                {errors.lastname && (
                  <div className={form.error}>{errors.lastname}</div>
                )}
              </div>
              <div className={form.field}>
                <Field name="email" type="email" placeholder="Email" />
                {errors.email && (
                  <div className={form.error}>{errors.email}</div>
                )}
              </div>
              <div className={form.field}>
                <Field name="pwd1" type="password" placeholder="Password" />
                {errors.pwd1 && <div className={form.error}>{errors.pwd1}</div>}
              </div>
              <div className={form.field}>
                <Field
                  name="pwd2"
                  type="password"
                  placeholder="Confirm Password"
                />
                {errors.pwd2 && <div className={form.error}>{errors.pwd2}</div>}
              </div>
              <div className={form.actions}>
                <button type="submit">Register</button>
              </div>
              <p>
                Already have an account? <Link to="/">Login here</Link>
              </p>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
