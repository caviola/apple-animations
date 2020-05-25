Demo SPA showcasing page transitions/animations.

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

and visit [http://localhost:3000](http://localhost:3000) in your browser.

## Implemented features

- Registration form with with basic required-field validation. After clicking *Register* it will simply redirect to login page.
- Login form with simulated *invalid credentials* message. To make login fail, use the following hard-coded credentials:

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

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assumptions

- The layout is for desktop only.
