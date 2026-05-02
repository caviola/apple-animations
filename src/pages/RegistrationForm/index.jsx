import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

const MESSAGE_REQUIRED_FIELD = 'This field is required.';

function RegistrationForm() {
  let navigate = useNavigate();

  function validate(values) {
    let errors = {};

    if (!values.firstname) {
      errors.firstname = MESSAGE_REQUIRED_FIELD;
    }

    if (!values.lastname) {
      errors.lastname = MESSAGE_REQUIRED_FIELD;
    }

    if (!values.email) {
      errors.email = MESSAGE_REQUIRED_FIELD;
    }

    if (values.pwd1.length < 6 || values.pwd2.length < 6) {
      errors.pwd1 = errors.pwd2 = 'Password must have at least 6 characters.';
    }

    if (values.pwd1 !== values.pwd2) {
      errors.pwd1 = errors.pwd2 = "Passwords don't match.";
    }

    return errors;
  }

  // eslint-disable-next-line no-unused-vars
  function submit(values) {
    // TODO: call back-end API and redirect on success.
    navigate('/');
  }

  // TODO: note we can extract .form-field into a reusable component FormField
  // that takes care of 'required' validation and showing the error if any.

  return (
    <div className="md:w-1/2 lg:w-1/3 max-w-10/12 mx-auto mt-20">
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          pwd1: '',
          pwd2: '',
        }}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={submit}
        validate={validate}
      >
        {({ errors }) => {
          return (
            <Form>
              <h2 className="font-bold text-2xl mb-10 text-center text-black">Create account</h2>
              <div className="mb-4">
                <Field
                  name="firstname"
                  placeholder="First name"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
                {errors.firstname && (
                  <div className="text-red-500 text-sm mt-1">{errors.firstname}</div>
                )}
              </div>
              <div className="mb-4">
                <Field
                  name="lastname"
                  placeholder="Last name"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
                {errors.lastname && (
                  <div className="text-red-500 text-sm mt-1">{errors.lastname}</div>
                )}
              </div>
              <div className="mb-4">
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
                {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
              </div>
              <div className="mb-4">
                <Field
                  name="pwd1"
                  type="password"
                  placeholder="Password"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
                {errors.pwd1 && <div className="text-red-500 text-sm mt-1">{errors.pwd1}</div>}
              </div>
              <div className="mb-4">
                <Field
                  name="pwd2"
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
                {errors.pwd2 && <div className="text-red-500 text-sm mt-1">{errors.pwd2}</div>}
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="border border-blue-600 bg-blue-500 hover:bg-blue-600 text-white px-4 py-4 rounded-md w-full"
                >
                  Register
                </button>
              </div>
              <div className="w-10/12 mx-auto mt-4 text-center text-sm text-gray-800">
                <p>
                  Already have an account?{' '}
                  <Link to="/" className="text-blue-500 hover:underline">
                    Login here
                  </Link>
                </p>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
