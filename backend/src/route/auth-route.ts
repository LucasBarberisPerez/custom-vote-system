import { Router } from "express";
import multer from "multer";
import { IAuthController } from "../controller/interface/auth-controller.interface";
import { AuthController } from "../controller/implementation/auth-controller";
import { IDatabase } from "../database/interface/database.interface";
import { SqliteDatabase } from "../database/implementation/sqlite-database";
import { IAuthService } from "../service/interface/auth-service.interface";
import { IAccountRepository } from "../repository/interface/account-repository.interface";
import { AccountRepository } from "../repository/implementation/account-repository";
import { AuthService } from "../service/implementation/auth-service";

const authRouter = Router();
const database: IDatabase = new SqliteDatabase();
const accountRepository: IAccountRepository = new AccountRepository(database);
const authService: IAuthService = new AuthService();
const authController: IAuthController = new AuthController(accountRepository, authService);

authRouter.post("/authenticate", multer().none(), (req, res) =>
  authController.authenticate(req, res)
);
authRouter.post("/logout", multer().none(), (req, res) => authController.logout(req, res));

authRouter.get("/accounts", (req, res) => authController.getAll(req, res));

export default authRouter;
