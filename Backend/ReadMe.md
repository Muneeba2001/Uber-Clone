# Uber Clone

This is a complete working application of an Uber clone.

## Project Structure

## Backend

### Installation

1. Clone the repository.
2. Navigate to the `Backend` directory.
3. Install the dependencies:

    ```sh
    npm install
    ```

4. Create a `.env` file in the [`Backend`](Backend ) directory and add the following environment variables:

    ```env
    PORT=your_port
    DB_CONNECT=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

### Scripts

- `start`: Starts the application.
- `dev`: Starts the application in development mode with `nodemon`.

### Usage

To start the application, run:

npm run start

- User Model
The userModel is defined in user.js and includes the following fields and methods:

- Fields
fullName: An object containing firstName and lastName, both of which are required strings with a minimum length of 3 characters.
email: A required, unique string with a minimum length of 3 characters.
password: A required string that is not selected by default.
socketId: An optional string.

- Methods
generateAuthToken(): Generates a JSON Web Token (JWT) for the user.
comparePassword(password): Compares a given password with the user's hashed password.
hashPassword(password): Hashes a given password.

- API Endpoints
User Routes
POST /register: Registers a new user.

URL: http://localhost:3002/register
Request Body:
```sh
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}