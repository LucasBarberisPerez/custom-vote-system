import { Response } from "express";
import { AccountDTO } from "../../model/account.model";

export interface IAuthService {
  createAccessToken(account: AccountDTO): string;
  createRefreshToken(account: AccountDTO): string;
  validateToken(token: string): boolean;
  login(password: string, account: AccountDTO): Promise<boolean>;
  logout(res: Response): Promise<void>;
}
