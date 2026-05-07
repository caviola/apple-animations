import { Formik, Form, Field } from 'formik';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../globals/session';

const HOMEPAGE = '/iphone';
const TEST_EMAIL = 'invalid@example.com';
const TEST_PASSWORD = '123456';
const INVALID_CREDENTIALS_ERROR = 'Invalid credentials.';

function Login() {
  const location = useLocation();
  let navigate = useNavigate();

  // Where to go after successful login.
  const destination = location.state?.referer || HOMEPAGE;

  function validate(values) {
    let errors = {};

    // TODO: simulate invalid credentials
    if (values.email === TEST_EMAIL && values.pwd === TEST_PASSWORD) {
      errors.email = errors.pwd = INVALID_CREDENTIALS_ERROR;
    }

    return errors;
  }

  async function submit(values) {
    // Call login API and on success redirect to referer or initial page.
    await login(values.email, values.pwd);
    await navigate(destination, {
      state: {
        referer: location.pathname,
        animate: true,
        transitionClass: 'scale-down',
      },
    });
  }

  return (
    <div className="md:w-1/2 lg:w-1/3 max-w-10/12 mx-auto mt-20">
      <Formik
        initialValues={{
          email: '',
          pwd: '',
        }}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={submit}
        validate={validate}
      >
        {({ errors, isSubmitting }) => {
          return (
            <Form>
              <h2 className="font-bold text-2xl mb-10 text-center text-black">Login</h2>
              <div className="mb-4">
                <Field
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
                {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
              </div>
              <div className="mb-4">
                <Field
                  name="pwd"
                  type="password"
                  placeholder="Password"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
                {errors.pwd && <div className="text-red-500 text-sm mt-1">{errors.pwd}</div>}
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="border border-blue-600 bg-blue-500 hover:bg-blue-600 text-white px-4 py-4 rounded-md w-full"
                >
                  Login
                </button>
              </div>
              <div className="w-10/12 mx-auto mt-4 text-center text-sm text-gray-800">
                <p className="mb-4">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-blue-500 hover:underline">
                    Register now
                  </Link>
                </p>
                <p className="mb-4">
                  This demo SPA showcases transitions between pages and element animations within
                  each page, eg: when clicking a product page link in the header, the destination
                  page will be animated in and the old page will be animated out. Besides, some
                  elements of the appearing page will be animated as the enter the screen.
                </p>
                <p className="mb-4">
                  <strong>Use any email/password to login or leave blank. </strong>
                  Use email <i>{TEST_EMAIL}</i> and password <i>{TEST_PASSWORD}</i> to simulated
                  failed login.
                </p>
                <p className="mb-4">
                  This app uses with React, React Router, SASS, CSS Modules, Formik, CSS Transition
                  Group and CSS3 transitions and source code can be found at: <br />
                  <a
                    className="text-blue-500 hover:underline"
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
