import { Request, Response, NextFunction } from "express";

export interface IProposalController {
  getLatest(req: Request, res: Response): Promise<void>;
  getAll(req: Request, res: Response): Promise<void>;
  create(req: Request, res: Response ): Promise<void>;
}
