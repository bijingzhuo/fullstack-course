# Fullstack Course

My coursework and project for the full-stack course.


Author: <Jingzhuo Bi> (Student number: 001237335)


This project is a full-stack Expense Tracker application built using the MERN stack. It allows users to register and log in, create and manage expense records securely, filter and analyze their spending, and visualize data using charts. The application demonstrates typical full-stack development techniques including JWT authentication, protected API routes, React state management, and dynamic UI rendering with visual charts.

The backend is implemented with Node.js, Express, and MongoDB (Mongoose). It supports user authentication, CRUD operations for expenses, and structured API endpoints that follow RESTful design principles. All protected routes require a valid JWT token, ensuring that each user's data remains isolated and secure.

The frontend is developed using React, bundled with Vite for a fast development experience. It includes a modern UI layout with reusable components, authentication pages, an interactive dashboard, filtering options, and two types of charts: a category-based pie chart and a monthly spending line chart. The system provides a responsive and intuitive interface suitable for daily use.

The application is organized into clear directories for maintainability. The backend contains controllers, routes, models, and middleware, while the frontend includes pages, components, Redux slices, and styling resources. The architecture supports future expansion such as recurring expenses, multi-currency support, exporting data, and more advanced data analysis.

To run the project locally, the user must configure environment variables, install dependencies for both backend and frontend, start the server and the client separately, and ensure MongoDB Atlas credentials are correctly set. After logging in, users can add, edit, delete, and filter expenses, and their data will be stored securely in the cloud database.


Installation and Setup

To set up the project locally, clone the repository and install dependencies for both backend and frontend:

1. Configure environment variables

Create a .env file in the project root:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=30d

2. Install backend dependencies
cd backend
npm install

3. Install frontend dependencies
cd frontend
npm install

4. Start backend
npm run dev

5. Start frontend
npm run dev


Open the application in your browser at:

http://localhost:5173/



Features：
The application provides the following functionality:
User Registration and Login using JWT authentication.
Secure API Routes ensuring that only authenticated users can access their own expenses.
Add, Edit, Delete, and Retrieve Expenses, each containing a title, amount, category, and date.
Filter Expenses by Category and Month, allowing detailed analysis of spending.
Statistics Panel showing total expenses, record count, and category totals.
Data Visualization, including:
A line chart showing monthly total spending progression.
Responsive UI built with clean layouts and reusable React components.
Persistent User Session using localStorage.



