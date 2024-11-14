import { Request, Response } from "express";

export interface IAuthController {
    authenticate(req: Request, res: Response):Promise<void>;
    logout(req: Request, res: Response):Promise<void>;
    getAll(req: Request, res: Response):Promise<void>;
}
