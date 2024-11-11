import { Application } from "express";
import express from "express";
import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import morgan from "morgan";
import proposalRouter from "../route/proposal-route";
import authRouter from "../route/auth-route";

//import { Server } from "socket.io";
//TODO: Implement socket.io server.
export class App {
  private readonly app: Application;
  private readonly server: Server<typeof IncomingMessage, typeof ServerResponse>;
  private readonly port: number;
  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) | 3000;
    this.server = createServer(this.app);
  }

  run() {
    this.initModules();
    this.initRoutes();
  }

  private initModules() {
    this.app.use(express.json());
    this.app.use(morgan("combined"));
    this.server.listen(this.port, () => {
      console.log(`Server listening: http://localhost:${this.port}/`);
    });
  }
  private initRoutes() {
    this.app.use("/api/proposal", proposalRouter);
    this.app.use("/api/auth", authRouter);
  }
}
