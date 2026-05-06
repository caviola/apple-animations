Example SPA showcasing page transitions/animations demonstrating:

- Different page transitions depending on origin/destination pages.
- Animating in-page elements when they enter/exit the screen.
- Use both TailwindCSS utilities for style/layout and custom CSS for in-page transitions.
- Use advanced TransitionGroup techniques (eg: childFactory).
- Testable transition logic.

## Installation

```
$ git clone git@github.com:caviola/apple-animations.git
```

In the project directory, install dependencies with:

```
$ yarn install
```

Now start the app in development mode with:

```
$ yarn start
```

and visit [http://localhost:5173](http://localhost:5173) in your browser.

## Implemented features

- Registration form with with basic required-field validation. After clicking _Register_ it will simply redirect to login page.
- Login form with simulated _invalid credentials_ message. To make login fail, use the following hard-coded credentials:

  email: invalid@example.com
  pwd: 123456

- Product pages (iPhone, MacBook Pro and Watch) showcasing transitions between pages and page-specific animations. All animations are implemented with CSS3.
- After login, 'session' data is kept in session storage so it's lost after browser/tab is closed.

## Technologies used

- ReactJS
- React Router
- Formik
- React Transition Group
- CSS Modules
- TailwindCSS

This project uses [Vite](https://vite.dev/) with React.

## Assumptions

- The layout is for desktop only.
