🚆 Train Seat Booking System

A full-stack web application that allows users to book train seats with smart seat allocation. Built with React, Node.js, Express, and PostgreSQL.

📽️ Demo Video: https://www.loom.com/share/5bbec5099f864c10ac6e1b68a93e9aa7?sid=a5976885-b9a4-4ca6-81d0-c80e18256f82

A short 3–4 min video overviewing the project 

📁 Project Structure

This project is split into two separate repositories:

🔙 Backend Repo: https://github.com/mragankjaitly/train-seat-booking

🔜 Frontend Repo: https://github.com/mragankjaitly/train-seat-booking-frontend

🚀 Features

80 Seats: 11 rows of 7 seats, last row with 3 seats

Smart Seat Booking (same-row priority, else nearby seats)

Book up to 7 seats per booking

Real-time seat updates

User Authentication (Signup & Login)

Booking restriction: No double booking

Reset Bookings functionality

📦 Tech Stack

Frontend

React

Axios

CSS Modules

Backend

Node.js

Express.js

Sequelize ORM

PostgreSQL

bcryptjs, jsonwebtoken

🧪 API Documentation

🔐 Auth

POST /api/auth/signup

Registers a new user

Body: { "username": "mragank", "password": "123456" }

Returns: { message: "Signup successful" }

POST /api/auth/login

Logs in a user

Body: { "username": "mragank", "password": "123456" }

Returns: { message: "Login successful", token: "..." }

🪑 Seats

GET /api/seats

Fetches all seats

Headers (optional): Authorization: Bearer <token>

POST /api/seats/init-seats

Initializes 80 seats (11x7 + 1x3)

Admin/Setup use only

POST /api/seats/book

Books seats smartly (1–7 seats)

Body: { "count": 5 }

Headers: Authorization: Bearer <token>

Returns: { message: "✅ Seats booked!", seats: [1, 2, 3, 4, 5] }

POST /api/seats/reset

Resets all bookings (unbooks all seats)

Headers: Authorization: Bearer <token>

Returns: { message: "✅ All bookings reset!" }

🔧 Setup Instructions

Prerequisites

Node.js & npm

PostgreSQL

🖥 Backend

git clone https://github.com/mragankjaitly/train-seat-booking.git
cd train-seat-booking
npm install

# Configure .env
DB_NAME=seat_booking
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=your_secret

npm start

🌐 Frontend

git clone https://github.com/mragankjaitly/train-seat-booking-frontend.git
cd train-seat-booking-frontend
npm install
npm start

🙋‍♂️ Author

Mragank JaitlyLinkedIn | GitHub

Feel free to ⭐ the repository if you liked it!

📸 Screenshots

