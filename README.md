# Pre-Advanced Websites – Hypermarket (React Edition)

A **pre-advanced level hypermarket website** built with **HTML**, **CSS**, **Tailwind CSS**, **JavaScript**, **React**, and **TypeScript**.

---

## Project Overview

This project represents a **pre-advanced front-end website**, marking the transition from **pure HTML/CSS/JavaScript projects** to the use of **modern JavaScript libraries** for building scalable user interfaces.

In this stage, the project introduces **React with TypeScript**, allowing a more structured and component-based development workflow while maintaining clean separation between styling, logic, and layout.

Unlike earlier levels that rely mainly on static structures and simple scripts, this edition emphasizes:

- Component-based UI architecture
- Type-safe development using TypeScript
- Reusable and maintainable UI components
- Utility-first styling using Tailwind CSS
- Scalable front-end project organization

This project belongs to the **`pre-advanced-websites`** category and demonstrates the ability to start working with **modern front-end libraries while maintaining strong architectural principles**.

---

## Features

- Fully responsive layout using Tailwind CSS utility-first design.
- Component-based UI development with React.
- Internationalization (i18n) support for multiple languages (English/Spanish).
- Type-safe code with TypeScript for improved preventions and maintainability.
- Reusable UI components for scalable development.
- Clean separation between UI components, styling, and application logic.
- Mobile-first responsive design using Tailwind breakpoints.
- JavaScript logic organized within React components and hooks.
- Semantic HTML structure for accessibility and SEO.

---

## Architecture Approach

This project implements industry-standard architectural patterns designed for high scalability and maintainability:

### 1. Feature-based Architecture (Clean Features)
The codebase is organized by domain features rather than file types. This promotes high cohesion and low coupling:
- **src/features/**: Fully encapsulated modules (Cart, Navigation, Products, etc.) containing their own components, logic, and styles.
- **src/shared/**: Reusable infrastructure components, types, and utilities that provide a common foundation for all features.
- **src/pages/**: Orchestration layer where feature components are assembled into full routed views.

### 2. Scalable i18n System (Internationalization)
The application uses a robust implementation of `react-i18next` with a senior-level configuration:
- **Namespace Strategy**: Translation files are divided into specific namespaces (header, categories, legal, etc.) to optimize memory and maintainability.
- **Lazy Loading**: Translation JSON files are loaded on demand via HTTP backend to keep the initial bundle size minimal.
- **Automatic Detection**: Detects the user's browser language and persists preferences using localStorage.

### 3. Global Scroll and Navigation Management
A centralized navigation manager handles global scrolling behaviors:
- **Level 2 Navigation**: Standard page-to-page resets that ensure the user starts at the top of the new view.
- **Level 3 Navigation**: Smooth, hash-based scrolling (#section) that positions target elements in the center of the viewport for optimal visibility on mobile devices.

---

## Technologies Used

- **HTML5** – Semantic markup structure.
- **CSS3** – Base styling when needed.
- **JavaScript (ES6+)** – Core scripting language.
- **React** – JavaScript library for building user interfaces.
- **TypeScript** – Static typing for safer and more maintainable code.
- **Tailwind CSS** – Utility-first styling system.
- **Vite / React Tooling** – Fast development environment.

---

## Learning Goals

This project helps practice and reinforce:

- Using **React for component-based UI development**
- Integrating **TypeScript with React**
- Building **reusable UI components**
- Managing UI logic using **React hooks**
- Combining **Tailwind CSS with React components**
- Structuring scalable front-end applications

---

## License

This project is licensed under the **MIT License**.  
See the **LICENSE** file for more details.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
