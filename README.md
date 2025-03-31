# Exercise Tracker - MERN Stack Application

A full-stack web application that allows users to track their exercise activities. Built with the MERN stack (MongoDB, Express, React, Node.js) and hosted on Render.com.

## 📸 Preview

<img src="./screenshots/homepage.png" alt="Website Homepage" width="700" />

> **Note:** This project was developed with styling constraints as part of academic requirements. Only vanilla CSS was permitted (no Bootstrap, Tailwind, or other CSS frameworks), which influenced the visual design.

## 🌐 Live Demo

[Exercise Tracker App](https://exercise-tracker-frontend-dur0.onrender.com/)

> **Note:** This application is hosted on Render's free tier, which puts applications to sleep after 15 minutes of inactivity. When you first connect to the application after this idle period, there will be a delay of approximately 2-3 minutes as the server "wakes up" and retrieves data from MongoDB Atlas. Once awakened, the application will perform normally until it goes back to sleep after another period of inactivity.

## ✨ Features

- **Create**: Add new exercises with details including name, reps, weight, unit of measurement, and date
- **Read**: View all exercises in a table format
- **Update**: Edit existing exercise details
- **Delete**: Remove exercises from the database

## 🛠️ Technologies Used

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

### Deployment
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## 📋 Data Model

Each exercise in the database has the following properties:

| Property | Data Type | Description |
| -------- | --------- | ----------- |
| name | String | The name of the exercise |
| reps | Number | The number of times the exercise was performed (integer > 0) |
| weight | Number | The weight used for the exercise (integer > 0) |
| unit | String | The unit of measurement ('kgs' or 'lbs') |
| date | String | The date the exercise was performed (MM-DD-YY format) |

## 🚀 API Endpoints

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | /exercises | Retrieve all exercises |
| GET | /exercises/:_id | Retrieve a specific exercise by ID |
| POST | /exercises | Create a new exercise |
| PUT | /exercises/:_id | Update an existing exercise |
| DELETE | /exercises/:_id | Delete an exercise |

## 🖥️ Application Structure

### Frontend Pages
1. **Home Page**: Displays all exercises in a table with options to edit or delete
2. **Create Exercise Page**: Form to add a new exercise
3. **Edit Exercise Page**: Form to modify an existing exercise

### Main Components
- Navigation component
- Exercise Table component
- Exercise Row component
- Exercise Form components

## 📦 Installation and Setup

### Prerequisites
- Node.js
- npm or yarn
- MongoDB (local or Atlas connection)

### Repository
- Main Repository: [https://github.com/jramz87/C290_Portfolio_Project](https://github.com/jramz87/C290_Portfolio_Project)
  - Frontend code is in the `/frontend` directory
  - Backend code is in the `/backend` directory

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/jramz87/C290_Portfolio_Project.git

# Navigate to the backend directory
cd C290_Portfolio_Project/backend

# Install dependencies
npm install

# Create a .env file with the following variables
PORT=3000
MONGODB_CONNECT_STRING=<your-mongodb-connection-string>

# Start the server
npm start
```

### Frontend Setup
```bash
# Navigate to the frontend directory from the project root
cd C290_Portfolio_Project/frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 💡 Future Improvements

- User authentication
- Exercise categories
- Progress tracking and statistics
- Mobile application

## 📜 License

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

This project is licensed under the MIT License - see the LICENSE file for details.

## 📫 Connect

Feel free to reach out if you have questions or would like to collaborate!
[![Email](https://img.shields.io/badge/Email-jramz1897%40gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jramz1897@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-jramz87.github.io-blue?style=for-the-badge&logo=github&logoColor=white)](https://jramz87.github.io/)
