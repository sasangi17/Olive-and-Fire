# 🍽️ Olive & Fire Restaurant Website

A modern restaurant website developed using **HTML, CSS, JavaScript, Node.js, Express.js, SQLite, and Web3Forms**. The website allows customers to explore the restaurant, make table reservations, and send enquiries through a contact form.

---

## 📌 Project Overview

Olive & Fire is a restaurant website designed to provide customers with information about the restaurant and its services. The website includes user authentication, table reservation, contact functionality, and backend data storage using SQLite.

---

## 🚀 Features

- Home Page
- About Us Page
- Menu Page
- Services Page
- Contact Us Page
- User Registration (Sign Up)
- User Login
- Table Booking System
- Contact Form
- Password Hashing using bcryptjs
- SQLite Database Integration
- REST API using Express.js
- Booking and Contact Email Notifications via Web3Forms

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- SQLite

### Libraries & Packages
- bcryptjs
- express-session
- sqlite3
- cors

### Third-Party Service
- Web3Forms (Email Notifications)

---

## 📁 Project Structure

```
Olive-and-Fire/
│
├── database/
│   └── database.db
│
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── index.html
│   ├── about.html
│   ├── menu.html
│   ├── services.html
│   ├── contact.html
│   ├── login.html
│   └── signup.html
│
├── routes/
│   ├── auth.js
│   ├── booking.js
│   └── contact.js
│
├── db.js
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/sasangi17/Olive-and-Fire.git
```

### Navigate to the project

```bash
cd olive-and-fire
```

### Install dependencies

```bash
npm install
```

### Start the application

```bash
npm start
```

or

```bash
npm run dev
```

The application will run on:

```
http://localhost:3000
```

---

## 🗄️ Database

SQLite is used to store:

- User Accounts
- Table Bookings
- Contact Messages

---

## 🔐 Security Features

- Passwords are hashed using **bcryptjs**
- Duplicate email registration is prevented
- Input validation is implemented on forms

---

## 📧 Email Functionality

The website uses **Web3Forms** to send:

- Table Booking Notifications
- Contact Form Messages

---

## 🧪 Testing

The project was tested using:

- Manual UI Testing
- Form Validation Testing
- Authentication Testing
- Database Testing
- API Testing using Postman
- Security Testing
- Performance Testing

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/signup` | Register a new user |
| POST | `/login` | User login |
| POST | `/booking` | Submit a table booking |
| POST | `/contact` | Submit a contact message |
| GET | `/users` | Retrieve all users |
| GET | `/bookings` | Retrieve all bookings |
| GET | `/contacts` | Retrieve all contact messages |

---

## ⚠️ Known Limitations

- The website is currently optimized for desktop viewing.
- Responsive design has **not** been implemented.
- Social media footer icons are displayed but are **not linked** to social media pages.
- There is no online payment or food ordering functionality.

---

## 🔮 Future Improvements

- Implement responsive design for mobile and tablet devices.
- Add online food ordering.
- Add online payment integration.
- Add an admin dashboard for managing users and bookings.
- Enable editing and cancelling reservations.
- Link footer social media icons to official accounts.
- Improve accessibility and cross-browser compatibility.

---

## 👩‍💻 Developed By

**Sasangi Samadara**

Computer Science Undergraduate

---
