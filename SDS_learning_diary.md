Lappeenrannan teknillinen yliopisto
School of Business and Management






Sofware Development Skills

<Jingzhuo Bi>, <001237335>


LEARNING DIARY, <FALL-STACK> MODULE


Date: 04-10-2025
Today was spent learning and completing the first step of the Full Stack course: familiarizing myself with the basics of using Git. I checked my computer's version of Git to make sure it was installed. I created a course home folder, initialized my Git repositories, configured my remote repositories, and tried to add, commit, push, etc. I encountered path, command, and remote push errors in the process. I encountered path, command, and remote push errors, and learned how to deal with these common Git problems. Overall, I finished preparing my environment and gained a clearer understanding of the version control process.




Node.js：

Date: 05-10-2025 
Today I finished setting up Node.js and VS Code, built my first package.json file with npm init, and understood the structure of a Node project. I practiced REPL and the simplest way to run JS files, and learned the difference between CommonJS and ES Modules. Overall, I deepened my understanding of how to start a Node project, and officially entered Node development.

Date: 06-10-2025
Today I learned how to use the native HTTP module to build a basic web server, and respond to different routes based on the URL, and also tried to read HTML files via fs and return them to the client. Although simple, it was the first time I saw how the backend responded to a browser request, and I got an intuitive understanding of web services. Also added .gitignore to learn to ignore node_modules.

Date: 07-10-2025
Today I practiced writing npm scripts and installing nodemon to make the development experience smoother. I also learned how to manage environment variables with .env, which improves flexibility when changing environments. I also learned about the structure of the request object, and was able to see headers, url, method, etc., in preparation for writing APIs later.

Date: 08-10-2025
Today I implemented a simple routing function based on the URL module, and enabled the server to dynamically return the contents of different files. At the same time, I implemented the first API to return JSON data. Although the logic is not complicated, I feel a sense of accomplishment writing my own API for the first time, and I also feel the flexibility of Node in building backend services.

Date: 10-10-2025 
Today, I learned the concept of middleware, and understood that all requests will go through the middleware process in order, just like an assembly line. I tried to write functions such as logger, intermediate data processing, etc. I think middleware makes the code more modular, and I also understand why Express uses a lot of middleware.

Date: 12-10-2025 
Today I practiced file creation, reading, writing, and appending with the fs module, and combined it with async/await to make the code clearer. I also learned about path parsing to avoid handwritten path errors, and the OS module showed me that I can get information about the system CPU, memory, and other information directly, which is very helpful for writing utility programs.

Date: 14-10-2025
Today I learned about the URL module and used Crypto to encrypt and decrypt strings, which gave me a sense of Node's power in security-related functions. Then we practiced customizing the event mechanism EventEmitter and simulated the process of triggering/listening to events. Finally, we learned about the process object to understand the system information and exit mode when the program is running. Overall, this completes the Node.js foundation module.



MongoDB: 

Date: 16-10-2025
Today I completed the introductory video on MongoDB, including the concept of non-relational databases, document database structure, JSON data format, and the characteristics of data flexibility. I understood the difference between MongoDB and traditional relational databases, and learned that it uses documents rather than tables to store data, which makes it more suitable for application scenarios that deal with frequent structural changes. I also learned about the role of JSON in MongoDB and the design philosophy that “data accessed together should be in the same document”. Finally, I learned about the use of Compass graphical tools and started experimenting with browsing MongoDB data with them.



Express: 


Date: 17-10-2025 
Today I learned the basic concepts of Express as a clean, flexible Node.js web framework and compared the differences between opinionated and unopinionated frameworks. I followed the video to complete the installation and basic server setup of Express, and successfully ran the first simple local service. Understood the positioning and usage of Express, and mastered the most basic project initialization process.

Date: 18-10-2025 
Today I learned the core of Express: routing. I practiced writing basic GET and POST requests, and learned the differences and uses of req.query, req.params, and req.body. Also understood the use of HTTP status codes and res.send(), res.json(). Understand how the front-end passes data to the back-end, and also understand how Express handles different paths and parameters.

Date: 20-10-2025 
Continuing to learn Express, mastered the use of express.static(), which allows the project to provide HTML, images and other static resources. We also practiced returning JSON data in more depth, and learned the importance of Postman in debugging APIs. You will be able to build a basic API and debug back-end behavior with Postman, and begin to grasp the beginnings of an API service.

Date: 21-10-2025 
Focused on the core mechanism of Express -- middleware. Understood the role of next(), and tried to write the logging middleware, error handling middleware, etc. Also learned how to parse the request body. I also learned how to parse request bodies.

Date: 22-10-2025 
Today I learned how to use EJS as a template engine, how to render a view page, and how to loop the data display. At the same time completed the PUT, DELETE request learning, and Express Controller structure has a preliminary grasp.



React: 


Date: 23-10-2025 
Today, we learned the basic concepts of React and the introduction of the course, and understood the idea that React is used to build component-based UI. I learned how to create a project using create-react-app, and familiarized myself with the project structure (src, public, package.json, etc.). Also confirmed that the development environment is working properly.

Date: 24-10-2025 
Today, we learned how to write JSX, understanding that JSX is essentially a syntactic extension of JavaScript. Started writing simple React components and learned how to pass data between components using props. The concept of “reusable UI units” became clearer when I wrote my own components.

Date: 25-10-2025 
Today I learned how to write styles in React (inline style, CSS files) and how to handle events in components, such as onClick. I tried to make a Button component and bind events to it. Trying to make a Button component and binding events. I'm starting to get familiar with React interactions, and coding is much smoother than it was a few days ago.

Date: 27-10-2025 
Learned how to render a list using map() and made a simple Task component. Understood the need for keys. With this section, I further understood the componentization and data-driven UI approach, and was able to render data dynamically.

Date: 29-10-2025 
Today, we started to learn the core of React - useState Hook. We realized the functions of adding and removing tasks and updating UI. I realized that the state change will trigger the component to re-render. I understand that state change will trigger component re-rendering. I have a better understanding of the front-end “responsive update” mechanism.

Date: 31-10-2025 
Today I learned about controlled components and completed the Task Form, which allows you to submit a task by entering content. I also learned about passing functions between components and the direction of data flow. I feel that the idea of data management in React is becoming clearer.

Date: 01-11-2025 
Today, we continued to develop the project features, and realized the deletion of tasks, switching task reminders, and state-based conditional styles. I've become more proficient in event handling, props callbacks, and the logic of the UI responding to user actions.

Date: 03-11-2025 
Today we learned how to package a React project for production, and combined it with JSON Server as a simulated backend to implement task additions, deletions, and retrievals. Starting to experience the actual development process of separating front-end and back-end.

Date: 05-11-2025 
Today we learned about the useEffect Hook, which is used to get initial task data from JSON Server. Understood what an array of dependencies is and when side effects are triggered. the data flow and lifecycle of React became clearer.

Date: 06-11-2025 
Today I learned React Router and implemented several pages (e.g. About page). The structure of the project is more complete, and also experience the basic layout of a real front-end project. So far, I've basically mastered the main points of React.



MERN Stack - Express & MongoDB REST API: 

Date: 07-11-2025 
Today, I learned the basic concepts of REST API, understood the role of Express, and completed the initialization of the project, Git setup and environment variable configuration. I practiced creating a basic Express server, writing my first route, and connecting to MongoDB, and I got an initial understanding of controllers, route file splitting, and started to understand the structure of a complete API.

Date: 09-11-2025 
Continued to complete CRUD functionality: created Model, wrote Create / Read / Update / Delete controller logic, and made the API accessible to the front-end via Postman. Learned about the async/await error handling model and Express' error middleware. I gained a deeper understanding of the overall flow of the REST API.


Learn The MERN Stack - JWT Authentication: 

Date: 10-11-2025 
Learn the JWT authentication mechanism, complete the user registration and login function. Implemented password encryption, token generation, login authentication, and protected backend routing. Implemented getMe function to get user information based on Token. Begin to understand the overall flow of the authentication system.

Date: 11-11-2025 
Associate the user system with Goals, so that they can only operate their own Goals. Have a clearer understanding of the protection interface and user rights control. Tested all protected APIs to make sure the authentication process is correct.




Learn The MERN Stack - Frontend Authentication | Redux Toolkit 


Date: 13-11-2025 
Started the frontend section, created the React project and organized the basic file structure. Configure the React Router, Header, Navigation bar, Register and Login page layouts. Got an initial idea of how the front-end and back-end interfaces work together.

Date: 14-11-2025 
Started using Redux Toolkit to manage authentication status. Created authSlice, state, reducers, and thunks to implement the Register and Login requests so that the front-end can successfully communicate with the back-end. Completed the Register / Login form binding and handled the submission logic, becoming more familiar with how Redux works as a whole.




Learn The MERN Stack - Redux Goals & Deply: 


Date: 15-11-2025 
Implemented the Dashboard page, Goal form component, and asynchronous requests from Goals Slice to the backend. The front-end is now able to create, fetch and delete user Goals, while the schedule display and delete button interactions are all working properly. This is the first time I feel the sense of accomplishment when the front-end and back-end are completely connected.

Date: 16-11-2025 
Learning the deployment process, preparing production environment files, setting environment variables, and writing Heroku deployment scripts. Successfully released the whole MERN project on line, and gained practical experience on the deployment process and the way of running cloud environment.





