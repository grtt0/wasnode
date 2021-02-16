// import modules
import express from "express";
// import dotenv from "dotenv";
import compression from "compression";
import cors from "cors";
import bodyParser from "body-parser";
import { serverPort, mongoUri } from "../config/app.js";
import { TodoRoutes } from "./routes/TodoRoutes.js";
// import mongoose, { mongo } from "mongoose";
// import { UserRoutes } from "./routes/user.routes";

class Server {
  //   public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    // this.mongo();
  }
  //   public config(): void {
  config() {
    // dotenv.config();
    this.app.set("port", serverPort);
    this.app.set("mongodb_uri", mongoUri);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(compression());
    this.app.use(cors());
  }
  //   public routes(): void {
  routes() {
    // this.app.use("/api/user", new UserRoutes().router);
    this.app.use("/api/todos", new TodoRoutes().router);
  }
  //   public start(): void {
  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log(
        "[API] is running at http://localhost:%d",
        this.app.get("port")
      );
    });
  }

  //   private mongo(): void {
  mongo() {
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("[Mongo] Connection Established");
    });
    connection.on("reconnected", () => {
      console.log("[Mongo] Connection Reestablished");
    });
    connection.on("disconnected", () => {
      console.log("[Mongo] Connection Disconnected");
      console.log("Trying to reconnect to Mongo...");
      setTimeout(() => {
        mongoose.connect(this.app.get("mongodb_uri"), {
          autoReconnect: true,
          keepAlive: true,
          socketTimeoutMS: 3000,
          connectTimeoutMS: 3000,
        });
      }, 3000);
    });
    connection.on("close", () => {
      console.log("[Mongo] Connection Close");
    });
    connection.on("error", (error) => {
      console.log("[Mongo] Connection ERROR: " + error);
    });

    const run = async () => {
      await mongoose.connect(this.app.get("mongodb_uri"), {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      });
    };

    run().catch((error) => console.error(error));
  }
}

export default Server;
