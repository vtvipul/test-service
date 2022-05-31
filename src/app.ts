import express, { Application } from "express";
import { questionRouter } from "./routes/questions.routes";
import { dataSource } from "./database/connection";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });

// connecting to data source
dataSource
	.initialize()
	.then(() => {
		console.log("Connected to database!");
	})
	.catch((err) => console.error(err));

// creating application
const app: Application = express();

// adding middlewares
app.use(express.json());

app.use("/api/v1", questionRouter);

export { app };
