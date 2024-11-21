import { IAuthService } from "../interface/auth-service.interface";
//import bcrypt from "bcrypt"; -- this is for encrypted passwords in db
import { AccountDTO } from "../../model/account.model";
import jwt from "jsonwebtoken";
import { Response } from "express";
export class AuthService implements IAuthService {
  private readonly jwtSecretKey: string;
  constructor() {
    this.jwtSecretKey = process.env.JWT_SECRET_KEY as string;
  }
  createRefreshToken(account: AccountDTO): string {
    const payload = {
      username: account.USERNAME,
      userType: account.USER_TYPE,
    };
    console.log("secret");
    const token = jwt.sign(payload, this.jwtSecretKey, { expiresIn: "1d" });
    return token;
  }
  createAccessToken(account: AccountDTO): string {
    const payload = {
      username: account.USERNAME,
      userType: account.USER_TYPE,
    };
    const token = jwt.sign(payload, this.jwtSecretKey as string, { expiresIn: "1h" });
    return token;
  }

  validateToken(token: string): boolean {
    try {
      jwt.verify(token, this.jwtSecretKey);
      return true;
    } catch {
      return false;
    }
  }
  async login(password: string, account: AccountDTO): Promise<boolean> {
    if (!account) return false;
    //const isDataCorrect = await bcrypt.compare(password, account.PASSWORD); -- this is for encrypted passwords in db
    const isDataCorrect = password === account.PASSWORD;
    return isDataCorrect;
  }
  async logout(res: Response): Promise<void> {
    res.clearCookie("refreshToken");
    res.clearCookie("accessToken");
  }
}
