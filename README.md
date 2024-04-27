# Skygoal Backend Task by Parath Safaya

This repository contains the code for a backend task completed by Parath Safaya for Skygoal. The project implements user authentication with functionalities like sign-up,login,forget-password, reset password and authorization functionalities using Node.js, Express.js, and MongoDB. It also includes security measures to handle web vulnerabilities effectively.User can add, delete and view the images according to his/her authorization."admin" authorized user can do all three thing while "user" authorized user can only view.

## Project Structure

```plaintext
StockApp_Backend/
|-- config/
|   |-- dbConnection.js
|   |-- loggerModel.js
|-- controllers/
|   |-- imageControllers.js
|   |-- userDetails.js
|   |-- userController.js
|-- middleware/
|   |-- errorHandling.js
|   |-- validateTokenHandler.js
|   |-- userAuth.js
|-- models/
|   |-- imageModel.js
|   |-- userModel.js
|-- routes/
|   |-- imageRoutes.js
|   |-- userDRoutes.js
|   |-- userRoutes.js
|-- test/
|   |-- app.test.js
|-- Dockerfile
|-- index.js
```

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd StockApp_Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables by creating a `.env` file in the root directory:

   ```plaintext
   PORT = <PORT>
   CONNECTION_STRING = <CONNECTION_STRING>
   ACCESS_TOKEN_SECRET = <ACCESS_TOKEN_SECRET>
   EMAIL_USER = <EMAIL_USER>
   EMAIL_PASSWORD = <EMAIL_PASSWORD>
   ADMIN_PASS = <ADMIN_PASS>

   ```

4. You can also run this using Docker conatainer:

   ```bash
   docker build -t skygoal_Backend_Task .
   docker run -it -e PORT = <PORT> -e CONNECTION_STRING = <CONNECTION_STRING> -e ACCESS_TOKEN_SECRET = <ACCESS_TOKEN_SECRET> -e EMAIL_USER = <EMAIL_USER>  -e EMAIL_PASSWORD = <EMAIL_PASSWORD> -e ADMIN_PASS = <ADMIN_PASS> -p 3000:<PORT> skygoal_backend_task
   ```

5. or Run the application:

   ```bash
   npm start
   ```
   
6. Run Swagger Documentation on:

   ```plaintext
   http://localhost:3000/api-docs/
   ```

7. Test the application
  ```plaintext
  npm test
  ```

## API Usage

###  Images API

- **POST /api/images/add**
  - ADD an image and caption
  
    Example:
    ```plaintext
    GET POST /api/images/add
    ```

- **DELETE /api/images/delete/{id}
  - Delete an image
    Example:
    ```plaintext
    DELETE /api/images/delete/{id}
    ```

- **GET /api/images/view**
  - See the images along with caption
  
    Example:
    ```plaintext
    GET /api/images/view
    ```

### User Details API

- **GET /api/user-details/:email**
  - Get detail of a user uniquely identified by email
    Example:
    ```plaintext
    GET /api/user-details/safayaparath@gmail.com
    ```

### Users API

- **POST /api/users/register**
  - Register a new user.

    Example:
    ```plaintext
    POST /api/users/register
    Body: { "username": "john_doe", "email": "john@example.com", "password": "password123" ,"adminpass": "abcdef"}
    ```

- **POST /api/users/login**
  - Login a user.

    Example:
    ```plaintext
    POST /api/users/login
    Body: { "email": "john@example.com", "password": "password123" }
    ```

- **POST /api/users/forget-password**
  - Get current user information. (Requires user authentication)

    Example:
    ```plaintext
    POST /api/users/current
    Body: { "email": "john@example.com" }
    ```
    
- **POST /api/users/reset-password/{token}**
  - Get current user information. (Requires user authentication)

    Example:
    ```plaintext
    POST /api/users/reset-password/{token}
    Body: { "password": "newpassword" }
    ```

## Important Note

This README.md file provides instructions on how to set up and use the Skygoal Backend Task by Parath Safaya. It includes information on installation, API usage, Docker container setup, Swagger API documentation, and important notes.
