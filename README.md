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
- **Containerization:** Docker

## Getting Started

To get started with the Smart Brain App, follow these steps:

1. Clone the repository:

   ```
   git@github.com:musaddango/smart-brain.git
   ```

2. Install dependencies for frontend (backend is containerized and run on docker):

   ```
   # Install frontend dependencies
   cd smart-brain-app/frontend
   npm install
   ```

3. Setting up PostgreSQL database:
   - This is containerized and in the docker-compose configuration.
   
4. Setting up Redis:
   - This is containerized and in the docker-compose configuration.

5. Obtain API keys:
   - Sign up for a Clarifai API key and add it to the backend configuration.
   
6. Start the development servers:
   - Before starting the servers, ensure docker is installed on your machine as being that it's required for the backend and its services (Postgres and Redis DB) to work.

   ```
   # Start backend server
   cd ../backend
   docker-compose build
   
   # Start frontend server
   cd ../frontend
   npm start
   ```

8. Access the application:
   - Open your browser and navigate to the frontend server (eg. `http://localhost:3000`) to use the Smart Brain App.


## License

This project is licensed under the [MIT License](LICENSE).

