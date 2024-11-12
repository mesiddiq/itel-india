
# itel

**Client:** itel India  
**Description:** This project is the brand website for itel India, allowing customers to view and explore various itel products, including smartphones, feature phones, smart accessories, and TVs. The website offers easy access to product listings on Amazon, customer query submission, and contact options.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Installation and Setup](#installation-and-setup)
5. [Running the Project](#running-the-project)
6. [Environment Variables](#environment-variables)
7. [Key Features](#key-features)
8. [Development Guidelines](#development-guidelines)
9. [Contact Information](#contact-information)

---

## Project Overview

The itel India website serves as an online showcase for itel's diverse range of products, such as smartphones, feature phones, smart accessories, and TVs. It also facilitates customer interaction through various features, including the ability to contact support, navigate to Amazon listings for purchases, and submit queries.

## Technologies Used

- **Frontend Framework:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Programming Language:** JavaScript
- **React Libraries:** Additional React libraries as necessary

## Project Structure

The project is organized as follows:

### Components Folder

- **Common Folder**:
  - `smartphone common`: Contains components that are shared across all smartphones.
  - `featurephone common`: Contains components that are shared across all featurephones.
- **Core Folder**:
  - **Smartphone Core**:
    - Contains subfolders for each series (e.g., `s series core`, `p series core`, `a series core`, and `color series core`).
    - Each series folder has individual folders for each smartphone model, which contain components specific to that model's page.
  - **Featurephone Core**:
    - Contains individual folders for each featurephone model, each containing components specific to that model's page.

### Data Folder

Holds structured data for the website:
- **Footer Links**: Data for website footers.
- **Navbar Links**: Data for website navigation.
- **Smartphones Data**: Organized by series.
- **Featurephones Data**: Organized into respective folders.

### Public Folder

- **Smartphone Assets**: Contains a `smartphone` folder with subfolders for each model. Each subfolder contains assets relevant to that model.
- **Featurephone Assets**: Contains a `featurephone` folder with subfolders for each model. Each subfolder contains assets relevant to that model.
- **Static Assets**: Contains a `featurephone` folder with subfolders for each model. Each subfolder contains assets relevant to that model.

### Static Pages Folder

Contains static pages for the website, organized with a structure similar to smartphones and featurephones.

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org) (version 20 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)



The app will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables

No specific environment variables are required for the base setup, but you can add necessary API keys or configuration details here if needed.

## Key Features

- **Product Display**: Showcases a range of products including smartphones, feature phones, smart accessories, and TVs.
- **Contact Form**: Allows users to submit queries to itel India.
- **Buy Now Integration**: Redirects users to the respective Amazon listing for purchasing products.
- **Customer Support**: Offers functionality for customers to reach out for queries.

## Development Guidelines

- **Code Style**: Follow consistent coding standards using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code formatting.
- **Branching Strategy**: Follow a feature-branching strategy for new features or fixes.
- **Commit Messages**: Use meaningful commit messages that describe the changes concisely (e.g., `[Component] Add contact form validation`).

## Contact Information

**Project Lead:** Sahil Kumar
