# smart-brain-app

The Smart Brain App is a web application designed to detect faces in images using advanced AI technology. It utilizes React.js on the front end, Express.js on the back end, and a PostgreSQL database to store user information and image data.

## Features

- **Face Detection:** The app uses the Clarifai face detection API to detect single or multiple faces in images.
- **User Authentication:** Users can sign up for an account or log in using their credentials to access the app's features.
- **Session Management:** JSON Web Tokens (JWT) are used for session management, ensuring secure access to routes while providing a seamless user experience.
- **Caching:** Redis database is used for caching, optimizing performance by storing frequently accessed data.
- **Unit Testing:** The Jest testing library is employed for unit testing, ensuring the reliability and stability of the application.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Express.js
- **Database:** PostgreSQL
- **Face Detection API:** Clarifai
- **Caching:** Redis
- **Session Management:** JSON Web Token (JWT)

## Getting Started

To get started with the Smart Brain App, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/smart-brain-app.git
   ```

2. Install dependencies for both frontend and backend:

   ```
   # Install frontend dependencies
   cd smart-brain-app/frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Set up PostgreSQL database:
   - Create a PostgreSQL database and configure the connection in the backend.
   
4. Set up Redis:
   - Install and configure Redis for caching in the backend.

5. Obtain API keys:
   - Sign up for a Clarifai API key and add it to the backend configuration.
   
6. Start the development servers:

   ```
   # Start frontend server
   cd ../frontend
   npm start

   # Start backend server
   cd ../backend
   npm start
   ```

7. Access the application:
   - Open your browser and navigate to `http://localhost:3000` to use the Smart Brain App.


## License

This project is licensed under the [MIT License](LICENSE).

