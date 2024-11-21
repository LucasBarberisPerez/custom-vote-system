import { Application } from "express";
import express from "express";
import cors from "cors";
import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import morgan from "morgan";
import proposalRouter from "../route/proposal-route";
import authRouter from "../route/auth-route";
import AppConfig from "./app.config";
import cookieParser from "cookie-parser";


//import { Server } from "socket.io";
//TODO: Implement socket.io server for vote room (optional).
export class App {
  private readonly app: Application;
  private readonly server: Server<typeof IncomingMessage, typeof ServerResponse>;
  private readonly port: number;
  constructor() {
    this.app = express();
    this.port = AppConfig.getPort();
    this.server = createServer(this.app);
  }

  run() {
    this.initModules();
    this.initRoutes();
  }

  private initModules() {
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(morgan("combined"));
    this.app.use(
      cors({ origin: AppConfig.getOriginUrl(), credentials: true, optionsSuccessStatus: 200 })
    );
    this.server.listen(this.port, () => {
      console.log(`Server listening: http://localhost:${this.port}/`);
      console.log(`Domain for cors: ${AppConfig.getOriginUrl()}`);
    });
  }
  private initRoutes() {
    this.app.use("/api/proposal", proposalRouter);
    this.app.use("/api/auth", authRouter);
  }
}
