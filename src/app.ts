import express from "express";
import { createServer } from "http";
import logger from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { HttpError } from "http-errors";
import socketConfig from "./websocket/config";
import { BASE_URL } from "./utils/endpoints";
import messagingRoutes from "./routes/message";
import agentRoutes from "./routes/agent";
import swaggerDocs from "./utils/swagger";
import errorHandler from "./middleware/errorHandler";

dotenv.config();

const app = express();
const server = createServer(app);

const PORT = process.env.PORT;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


app.use(BASE_URL, messagingRoutes);
app.use(BASE_URL, agentRoutes);


app.use(errorHandler);

mongoose
  .connect(`${process.env.DATABASE_URL}`)
  .then(() => {
    console.log("Database Connected !");
  })
  .catch((e) => {
    console.log("failed to connect to database", e);
  });

    // Websocket Connection
    socketConfig(server)
    .then(() => {
      console.log("websocket is connected");
    })
    .catch((err: HttpError) => {
      console.log(err);
    });


  server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
    swaggerDocs(app, 3050);
  });


export default server;
