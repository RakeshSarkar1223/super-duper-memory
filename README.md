# 📊 SuperDuperMoney - A Zerodha Clone

A lightweight, full-stack stock trading dashboard clone designed to mimic the core user experience of Zerodha's Kite platform. Built entirely with **TypeScript**, **React**, **Node.js**, and **Express**, featuring secure authentication via **JWT & bcrypt**, and a robust backend unit testing suite powered by **Jest**.

---

## 🚀 Architecture Overview

The project is structured into three primary architectural components:

1. **`backend/`**: A robust Node.js & Express REST API using TypeScript. Handles secure user authentication (`bcrypt` for password hashing, `JWT` for session tokens), input validation, and serving market data. Fully covered with automated unit tests.
2. **`frontend/`**: The public-facing React application. Includes the landing page, marketing sections, and the secure Login/Signup authentication portal.
3. **`dashboard/`**: The authenticated terminal interface. Once a user logs in, they are securely redirected to this separate React application layout, which simulates the high-performance Kite trading desk (Watchlist, Portfolio, Orders, and Funds).

---

## 🛡️ Tech Stack

### Backend
- **Language:** TypeScript
- **Runtime & Framework:** Node.js, Express
- **Security:** JSON Web Tokens (JWT), `bcryptjs`
- **Database (Mock/OR/DB):** Node-cache / MongoDB / PostgreSQL *(Modify based on your choice)*
- **Testing Suite:** Jest, `ts-jest` (for TypeScript support), `supertest` (for API endpoint testing)
- **Tools:** `ts-node-dev` (development auto-reload), `cors`, `dotenv`

### Frontend & Dashboard
- **Language:** TypeScript
- **Framework:** React.js (Vite / Create React App)
- **Routing:** React Router DOM (with protected route guards)
- **State Management:** React Context API / Redux Toolkit
- **Styling:** Tailwind CSS / Styled Components (configured for Zerodha's minimalist aesthetic)

---

## 🛠️ Key Features

- **End-to-End TypeScript:** Type safety across both client-side interfaces, backend endpoints, and test suites.
- **Secure Authentication Pipeline:** - Passwords are salted and hashed using `bcrypt` before storage.
  - Verification issues a stateless `JWT` stored securely in the client browser.
- **Automated Backend Testing:** Complete unit and integration test coverage using **Jest** and **Supertest** targeting authentication middleware, password hashing functions, and routing guards.
- **Conditional Auth Redirection:** Unauthenticated users attempting to access `/dashboard` are auto-redirected to `/login`. Upon successful verification, users are forwarded straight to the active trading dashboard.
- **Interactive Stock Watchlist:** Live-simulated stock ticker additions and deletions.

---

## 📁 Directory Structure

```text
zerodha-clone/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Auth & Data logic
│   │   ├── middleware/       # JWT Auth verification guards
│   │   ├── models/           # User & Stock Type/Schema definitions
│   │   ├── routes/           # Express API endpoints
│   │   └── server.ts         # Entry point
│   ├── __tests__/            # 🧪 Jest test suites
│   │   ├── auth.test.ts      # Unit tests for signup/login endpoints
│   │   └── middleware.test.ts# Tests for JWT protection middleware
│   ├── jest.config.ts        # Jest configuration for TypeScript
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/       # Landing page sections, Navbar, Footer
│   │   ├── pages/            # Login, Signup, Home
│   │   └── App.tsx
│   ├── package.json
│   └── tsconfig.json
│
└── dashboard/
    ├── src/
    │   ├── components/       # Watchlist, OrderWindow, PortfolioTable
    │   ├── pages/            # Dashboard Home, Orders, Holdings, Funds
    │   └── App.tsx
    ├── package.json
    └── tsconfig.json
