import { Request, Response } from "express";
import { IAuthController } from "../interface/auth-controller.interface";
import { IAccountRepository } from "../../repository/interface/account-repository.interface";
import { IAuthService } from "../../service/interface/auth-service.interface";

export class AuthController implements IAuthController {
  constructor(
    private readonly accountRepository: IAccountRepository,
    private readonly authService: IAuthService
  ) {}
  async authenticate(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;
      const account = await this.accountRepository.getByUsername(username);
      if (!account) {
        throw new Error("incorrect username or password");
      }
      
      const isAuthenticated = await this.authService.login(password, account);

      if (!isAuthenticated) {
        throw new Error("incorrect username or password");
      }
      const refreshToken = this.authService.createRefreshToken(account);
      const accessToken = this.authService.createAccessToken(account);
      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.cookie("access_token", accessToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 2 * 60 * 60 * 1000,
      });
      res.status(200).json({ msg: "User authenticated successfully" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.name, msg: error.message });
      }
    }
  }

  async logout(req: Request, res: Response): Promise<void> {
    try {
      const accessToken = req.cookies("access_token");
      const refreshToken = req.cookies("refresh_token");
      if (!accessToken || !refreshToken) {
        throw new Error("No cookies found");
      }
      res.clearCookie("refreshToken");
      res.clearCookie("accessToken");
      res.status(200).json({ msg: "User logged out successfully" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.name, msg: error.message });
      }
    }
  }
}