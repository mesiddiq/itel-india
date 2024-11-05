# itel Website Documentation

This is a documentation of the itel website, a react application that serves as the official website of itel mobile.

## Table of Content

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Pages](#pages)
- [API](#api)
- [Testing](#testing)
- [Deployment](#deployment)

## Getting Started

To get started with the project, follow the following steps:

1. Clone the repository
2. Install the dependencies using `npm install`
3. Start the development server using `npm start`
4. Open the application in your web browser at `http://localhost:3000`

## Project Structure

The project structure is as follows:

- `src/`: The source code of the project
  - `components/`: Reusable components used throughout the application
  - `pages/`: The pages of the application
  - `api/`: The API endpoints of the application
  - `public/`: The public assets of the application
  - `utils/`: Utility functions used throughout the application
  - `App.jsx`: The main application component
  - `main.jsx`: The main entry point of the application
  - `index.html`: The main entry point of the application

## Components

The components are reusable pieces of code that can be used throughout the application. They are located in the `src/components/` directory.

Some of the components include:

- `Header`: The header component that is used on every page
- `Footer`: The footer component that is used on every page
- `Hero`: The hero component that is used on the homepage
- `FeatureRich`: The feature rich component that is used on the homepage

## Pages

The pages are the different sections of the application. They are located in the `src/pages/` directory.

Some of the pages include:

- `Home`: The homepage of the application
- `About`: The about page of the application
- `Contact`: The contact page of the application
- `FAQ`: The FAQ page of the application

## API

The API is used to fetch data from the server. It is located in the `src/api/` directory.

Some of the API endpoints include:

- `GET /api/faq`: Fetches the FAQ data from the server
- `GET /api/smartphones`: Fetches the smartphones data from the server
- `GET /api/featurephones`: Fetches the featurephones data from the server

## Testing

The testing is done using jest and react testing library. The tests are located in the `src/tests/` directory.

## Deployment

The deployment is done using Vercel. The application is deployed to production whenever code is pushed to the main branch.
