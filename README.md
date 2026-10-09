# 🍽️ QuickDine — Multi-Restaurant Management System

QuickDine is a full-stack, multi-restaurant management and table reservation platform designed to connect customers with restaurants through a centralized booking system. It provides dedicated interfaces for customers, restaurant owners, and administrators to manage reservations, restaurant information, and table availability.

## 🚀 Live Demo

**Live Website:** [QuickDine — Visit Website](https://quickdine-phi.vercel.app/)

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge\&logo=vercel)](YOUR_VERCEL_LIVE_URL)

> 

## ✨ Key Features

* **Multi-Restaurant Platform:** Browse and access multiple restaurants through a centralized platform.
* **Customer Booking System:** Explore restaurants and make table reservations.
* **Restaurant Owner Dashboard:** Manage restaurant details, tables, and reservation information.
* **Admin Dashboard:** Centralized management of platform data and restaurant registrations.
* **Authentication & Authorization:** Secure access to application features based on user roles.
* **Restaurant Registration:** Enable restaurant owners to register their restaurants on the platform.
* **Table Management:** Organize restaurant tables and manage their availability.
* **Reservation Management:** Handle customer bookings and reservation status.
* **Responsive UI:** User-friendly interface for desktop and mobile devices.
* **REST API Development:** Backend APIs for communication between the frontend and database.
* **MongoDB Database Design:** Store and manage restaurant, user, table, and reservation data.
* **Full-Stack Deployment:** Frontend deployment on Vercel and backend deployment on a compatible hosting platform.

## 🛠️ Tech Stack

**Frontend**

* React.js
* JavaScript
* HTML5
* CSS3

**Backend**

* Node.js
* Express.js
* REST APIs
* JWT-based authentication (if implemented)
* Role-Based Access Control (RBAC)

**Database**

* MongoDB
* Mongoose

**Deployment**

* Vercel — Frontend
* Backend hosting platform — Add the actual provider used

## 👥 User Roles

| Role             | Responsibilities                                        |
| ---------------- | ------------------------------------------------------- |
| Customer         | Browse restaurants and manage table reservations        |
| Restaurant Owner | Manage restaurant information, tables, and bookings     |
| Admin            | Manage restaurant registrations and platform operations |

## 🏗️ Application Workflow

1. Users register or log in to the platform.
2. Customers explore available restaurants.
3. Customers select a restaurant and submit a table reservation.
4. Restaurant owners manage restaurant details, table availability, and reservations.
5. Administrators oversee restaurant registrations and platform operations.

## 📂 Project Structure

```text
QuickDine/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── package.json
└── README.md
```

*Update the directory structure to match your actual repository.*

## ⚙️ Installation and Setup

### Prerequisites

* Node.js and npm
* MongoDB database
* Git

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd QuickDine
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file with the environment variables required by your backend.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Use the exact variable names expected by your code. Never commit real credentials to GitHub.

Start the backend using the script configured in `package.json`, for example:

```bash
npm run dev
```

### 3. Set up the frontend

Open a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

Configure the frontend API base URL to point to your backend.

## ☁️ Deployment

### Frontend — Vercel

1. Import the frontend repository into Vercel.
2. Configure the correct project root directory.
3. Add the required environment variables.
4. Deploy the application.
5. Copy the generated production URL into the Live Demo section.

### Backend — API Hosting

1. Deploy the Node.js and Express backend to your chosen hosting provider.
2. Configure the MongoDB connection string and other environment variables.
3. Update CORS settings to allow requests from your deployed frontend.
4. Set the frontend API base URL to the deployed backend URL.
5. Test the main application flows after deployment.

## 🔒 Security Considerations

* Validate incoming API requests.
* Protect private routes with authentication middleware.
* Enforce role-based permissions on the backend.
* Keep secrets and database credentials in environment variables.
* Configure CORS for trusted frontend origins.

## 🎯 Project Objective

QuickDine aims to simplify restaurant discovery and table reservation management by bringing customers, restaurant owners, and administrators together in a unified web application.

## 👩‍💻 Author

**Srishty Agarwal**

* GitHub: [srishtyagarwa164-prog](https://github.com/srishtyagarwa164-prog)

---

⭐ If you find QuickDine useful, consider starring the repository!


