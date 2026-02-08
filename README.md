# THE DRIVER ERA MUSIC HUB

A comprehensive web application to explore the discography of **The Driver Era**, built with a focus on performance, scalability, and type safety.

## Overview

This project is a dedicated hub for fans to navigate through albums, tracks, and official media. It provides a seamless experience for exploring studio recordings and live performances, with direct integration to official platforms like Spotify and YouTube.

## Live Demo

[Netlify](https://thedrivereramusichub.netlify.app/)

## Tech Stack & Architecture

- **Frontend:** [React](https://reactjs.org/) (Vite) + [TypeScript](https://www.typescriptlang.org/)
- **Backend-as-a-Service:** [Firebase Firestore](https://firebase.google.com/products/firestore) (Real-time data fetching)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) (Global store with persistence middleware)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Styling:** [SASS/SCSS](https://sass-lang.com/) (Modular variables and Nesting)
- **Testing:** [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Key Features

- **Dynamic Data Management:** Content fetched directly from Firebase, allowing for real-time updates without redeploying.
- **Global State & Reactivity:** Centralized data flow using Zustand to manage music data and loading states across the SPA.
- **Persistent Favorites:** Custom favorite system that saves user preferences in local storage using Zustand persistence.
- **SEO & Performance:** Dynamic metadata per page (React Helmet logic) and optimized asset loading with custom animated Loaders.
- **Unit Testing:** Implementation of core tests to ensure UI integrity in presentation components.

## 🧪 Testing

The project includes unit tests focused on core UI components to ensure correct rendering and prop management.

````bash
npm run test

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/juaneuler/thedrivereramusichub.git
````

1. Install dependencies:

```bash
npm install
```

1. Environment Variables: Create a .env.local file in the root directory and add your Firebase credentials:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

1. Start the development server:

```bash
npm run dev
```
