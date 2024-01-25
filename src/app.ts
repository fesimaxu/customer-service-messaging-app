import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import errorHandler from "./middleware/errorHandler";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());


app.use(errorHandler);

mongoose
  .connect(`${process.env.DATABASE_URL}`)
  .then(() => {
    console.log("Database Connected !");
    app.listen(PORT);
    console.log(`Server running on port 8080`);
    //swaggerDocs(app, 8080);
  })
  .catch((e) => {
    console.log("failed to connect to database", e);
  });

export default app;
