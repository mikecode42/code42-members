# Code42 Members App

## Description
This is a small example webapp using React, Material UI, and styled-components.

## How to run
1. Clone this repository.
1. Install dependencies by running `npm install`.
1. Start the web server in development mode by running `npm start`.

## Libraries & Tooling
This application was bootstrapped using `create-react-app`, which provides an opinionated framework for building a React application. `create-react-app` includes tools and configuration that are common to most React applications.

The visual design follows Google's material specification. Material UI includes ready-to-use React components that meet the material spec.

styled-components is React library for writing CSS in JavaScript. The syntax allows you to create simple React components with attached CSS. styled-components generates classnames and CSS instead of inline styling.

`eslint` using the AirBNB config will lint JavaScript for code formatting issues and potential bugs. This ensures the codebase is consistent and readable for other developers.

`lodash` is a utility library with many useful functions.

## Design Choices

### Language
This project utilizes the ES2016 language standard, using the preset from `create-react-app`. In general, components are built using a functional approach - stateless React components are used when possible. These components are easy to read and maintain.

### File Structure
The project is split into several top-level folders within the _src/_ directory.

__components/__ - Contains common presentational components that can be used throughout the application. Each component has its own folder with related subcomponents within the same folder. Only the `index.js` file should be imported from outside of these folders.

__config/__ - Contains configuration used throughout the application.

__containers/__ - Contains page-level folders. Each folder has an `index.js` which provides the main component for a page. A _components/_ folder may be within a container, which contains components that are specific to that container. A _containers/_ folder may be within a container if the container has sub-routes.

__services/__ - Contains application business logic. Currently, only API helpers and models are located here, however if Redux were added, then actions, reducers, and stores would also be located here.
