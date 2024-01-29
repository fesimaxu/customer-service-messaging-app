# Customer Service Web APP

Backend for the customer service web app.

## 🔧 Tech Stack

- NodeJS
- ExpressJS
- Mongoose
- Socket.io: Chat functionality
- Input Validation: Express validator
- Documentation: implemented with swagger docs

## 📝 Requirements

This project requires nodeJS version >= 14 and npm package manager.

## 📁 Project Configuration

The project is divided into:

- Controller: found in `src/controller` folder. Coordinates the interaction between the UI and the backend services.
- Middlewares: found in `src/middlewares` folder. Logic to process incoming HTTP requests and perform tasks such as authentication, validation, etc.
- Model: found in `src/model` directory. Database Schema of the events app.
- Routes: found in `src/routes` directory. URL endpoints and their corresponding method/action.


## 💻 Running Locally

1. Clone this repository by running:
   ```bash
   git clone https://github.com/fesimaxu/customer-service-messaging-app
   cd customer-service-messaging-app
   ```
2. Install the dependencies:
   ```bash
    yarn
   ```
3. Using the `.env.example` template, create a `.env` file and fill in the values for each environment variables:
   ```bash
   cp .env.example .env 
   ```
4. To compile the typescript to javascript:
   ```bash
   yarn tsc 
   ```

## 🗃️ Database SetUp

This project uses Mongoose Module for the database. Database Schema can be found in the Documentation section.
**NOTE**: You need to setup a using Messaging csv Dataset , the default database name is: `localhost/config`. DB schemas are automatically synced

### Starting App

- Linux
Start the server in dev mode:
  ```bash
  yarn start 
  ```


## 🌐 Endpoints

- POST `/api/v1/add-agent` -> Add Agent
- GET `/api/v1/get-agents` -> Get All Agents
- POST `/api/v1/send-message` -> Send Message
- DELETE `/api/v1/messages` -> All User Messages

## WebSocket Endpoints
- Message `agentLogin` -> Activate agents online
- Emitter `activeAgent` -> Send active agents to customer
- Message `customerMessage` -> Receives customer message, sen to online agents
- Emitter `directMessage` -> Private chat customer
- Message `agentLogout` -> Logout agents
- Emitter `activeAgent` -> Activate agents offline


## 📩 Requests

- Accepts JSON only.
- Request body should **only** contain the specified values and follow the database schema.
- Example request:
  ```json
  {
    "userId": "208",
    "message": "hello world"
  }
  ```

## 📂 Response

Returns JSON.

## ⚠️ Response Status

- 200 - OK: User or resource has been successfully updated.
- 201 - Created: User or resource has been successfully created.
- 400 - Bad Request:
  - Request body has more than the specified attribute.
  - Invalid content-Type.
- 403 - Unauthorized: A user is not authenticated
- 404 - User or Resource Not Found.
- 500 - Internal Server Error.

## 💻 Testing

Tests can be done with jest and supertest:

```bash
yarn run test
```

Alternatively, online API testing tools such as Postman can be used to test the endpoints.

## 📄 License

This project uses the MIT License as found in [LICENSE](/LICENSE)

## 📖 Documentation

Documentation can be found [SWAGGERDOCS](https://customer-service-web-app.onrender.com/docs)

## 🔗 Links

[Live Base URL](https://customer-service-web-app.onrender.com)

[Database Schema]()

## 🤝 The DEVELOPER

Built by Igwe Uchenna Felix
[AUTHORS](/AUTHORS)

