# SwiftCart — Angular Shopping Website

SwiftCart is a front-end e-commerce website project built with **Angular 20** and **Bootstrap 5**. It demonstrates a product listing interface, page navigation, form handling, and displaying user data from an API.

## Features

- **Home page** with product cards, images, descriptions, and prices
- **About Us page** describing the shopping platform
- **Login form** using Angular template-driven forms and validation
- **Contact form** with fields such as name, email, mobile number, gender, and country
- **Reactive form demo** to demonstrate Angular reactive forms
- **Cart page** as a starting point for shopping-cart functionality
- **Users from API** page that displays user records in a table
- **Client-side routing** between the main pages
- **Responsive layout** using Bootstrap grid and components
- **Server-side rendering (SSR) setup** configured with Angular SSR

> **Project note:** This repository is a learning/demo storefront. Features such as real authentication, payment processing, order management, and a fully implemented cart require additional backend integration.

## Tech Stack

| Technology | Purpose |
|---|---|
| Angular 20 | Component-based frontend and routing |
| TypeScript | Application logic |
| HTML5 | Page templates |
| CSS3 | Page styling |
| Bootstrap 5 | Responsive layout and UI components |
| RxJS | Reactive programming utilities |
| Express 5 | Server used by the Angular SSR setup |
| Angular SSR | Server-side rendering support |

## Pages

| Route | Page | Description |
|---|---|---|
| `/home` | Home | Displays sample products |
| `/aboutus` | About Us | Introduces the SwiftCart concept |
| `/contact` | Contact | Template-driven contact form |
| `/login` | Login | Login form with required-field and email validation |
| `/cart` | Cart | Cart page placeholder |
| `/reactive_form` | Reactive Form | Demonstrates Angular reactive forms |
| `/service` | Users from API | Displays user data retrieved from an API |

The root route redirects to `/home`.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (use a version supported by Angular 20)
- npm, which is included with Node.js

### 1. Clone the repository

```bash
git clone https://github.com/joshichaitanya58/Angular_Project_-SwiftCart-.git
cd Angular_Project_-SwiftCart-
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

Open **http://localhost:4200/** in your browser. The development server reloads when source files change.

## Build

Create an optimized production build:

```bash
npm run build
```

The generated build output is written to the `dist/` directory.

To rebuild automatically while developing:

```bash
npm run watch
```

## Run Tests

Run the configured unit tests:

```bash
npm test
```

The project uses Angular's test tooling with Jasmine and Karma.

## Project Structure

```text
Angular_Project_-SwiftCart-/
├── public/                       # Public static assets
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/             # Product listing page
│   │   │   ├── aboutus/          # About page
│   │   │   ├── cart/             # Cart page
│   │   │   ├── contact/          # Contact form
│   │   │   ├── login/            # Login form
│   │   │   ├── reactive_form/    # Reactive forms example
│   │   │   └── service/          # API user listing
│   │   ├── app.config.ts         # Angular application configuration
│   │   ├── app.routes.ts         # Application routes
│   │   ├── app.html              # Root template
│   │   └── app.ts                # Root component
│   ├── assets/                   # Images and static data
│   ├── index.html                # Main HTML document
│   ├── main.ts                   # Browser entry point
│   ├── main.server.ts            # Server entry point
│   ├── server.ts                 # SSR server
│   └── styles.css                # Global styles
├── angular.json                 # Angular CLI configuration
├── package.json                 # Dependencies and scripts
└── tsconfig.json                # TypeScript configuration
```

## Future Enhancements

- Implement add-to-cart, remove-from-cart, quantity updates, and cart persistence.
- Connect product listings to a backend or product API.
- Add secure authentication and user registration.
- Add product search, filters, categories, and sorting.
- Integrate checkout, order history, and a payment gateway.
- Add automated end-to-end tests and accessibility improvements.

## Author

**Chaitanya Joshi**

- GitHub: [@joshichaitanya58](https://github.com/joshichaitanya58)
- Portfolio: [my-portfolio-delta-virid-82.vercel.app](https://my-portfolio-delta-virid-82.vercel.app/)
- LinkedIn: [Chaitanya Joshi](https://www.linkedin.com/in/chaitanya-joshi-644b39298/)

---

<p align="center">Built as an Angular learning project.</p>
