import dotenv from "dotenv";
dotenv.config(); //dotenv won't work if some import loads first - only if you use it in some module.
import { App } from "./infrastructure/app";

const app = new App();
app.run();