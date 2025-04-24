# Attendance Tracker Coding Challenge

This is a submission for Pairing's coding challenge. 

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Backend
A simple rest API built using Express and SQLite. It provides authentication functionality for its front-end counterpart.

### Features

- User signup with email and password
- User login with email and password
- SQLite database for data storage

### Getting Started

Follow these steps to set up and run the backend:

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd backend
```

#### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm i
```

#### 3. Set Up Environment Variables

Create a `.env` file in the `backend` folder and add the following environment variables:

```env
PORT=<the-port-you-want-to-start-the-server>
```

#### 4. Initialize the Database

The database will be automatically initialized when you start the server. It will create a `users` table in the `database.sqlite` file if it doesn't already exist.

#### 5. Start the Server

To start the server in development mode (with live reload), run:

```bash
npm start
```

The server will run on `http://localhost:3000` by default.
Alternatively, you can use the deployed web service of this app here: https://pairing-coding-challenge.onrender.com
---

## Frontend Setup

#### 1. Navigate to the Frontend Directory

```bash
cd frontend/pairing-coding-challenge
```

#### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm i
```

#### 3. Set Up Environment Variables

Create a `.env` file in the `frontend/pairing-coding-challenge` folder and add the following environment variables:

```env
VITE_API_URL=<the-port-your-server-is-running-on>
VITE_REST_API_ENDPOINT=<the-teamcheckout-endpoint-provided-by-pairing>
```

#### 4. Start the Development Server

To start the frontend development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.

#### 5. Build for Production

To build the frontend for production, run:

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

---

## API Endpoints

### Authentication

- **POST** `/auth/signup`  
  Create a new user.  
  **Request Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- **POST** `/auth/login`  
  Log in with an existing user.  
  **Request Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

---

## Project Structure

```
backend/
├── .env                # Environment variables
├── database.sqlite     # SQLite database file
├── package.json        # Project metadata and dependencies
├── src/
│   ├── app.js          # Main application entry point
│   ├── controllers/
│   │   └── authController.js  # Authentication logic
│   ├── database/
│   │   └── sqlite.js    # SQLite database initialization
│   ├── routes/
│       └── authRoutes.js # Authentication routes
└── .gitignore          # Ignored files and folders

frontend/
└── pairing-coding-challenge/
    ├── .env                # Environment variables
    ├── package.json        # Project metadata and dependencies
    ├── src/
    │   ├── App.tsx         # Main React application
    │   ├── pages/          # Application pages (Signup, Login, Dashboard, etc.)
    │   ├── layout/         # Layout components
    │   ├── store/          # Redux store configuration
    │   ├── services/       # API service logic
    │   ├── util/           # Utility functions
    │   └── http.ts         # HTTP request logic
    └── public/             # Static assets
```