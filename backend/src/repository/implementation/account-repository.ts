import { IDatabase } from "../../database/interface/database.interface";
import { Account, AccountDTO } from "../../model/account.model";
import { IAccountRepository } from "../interface/account-repository.interface";

export class AccountRepository implements IAccountRepository {
  constructor(private readonly database: IDatabase) {}

  async getByUsername(username: string): Promise<AccountDTO | null> {
    const sql = "SELECT * FROM ACCOUNT where username=?";
    try {
      return await this.database.findOne<AccountDTO>(sql, [username]);
    } catch (error) {
      throw new Error(`Error getting account data for username ${username}: ${error}`);
    }
  }
  async create(account: Account): Promise<void> {
    const { username, password, registerDate, userType } = account;
    const sql =
      "INSERT INTO ACCOUNT (USERNAME, PASSWORD, REGISTER_DATE, USER_TYPE) VALUES (?, ?, ?, ?);";
    try {
      await this.database.execute(sql, [username, password, registerDate, userType]);
    } catch (error) {
      console.error("Error creating account:", error);
    }
  }
  async getAll(): Promise<AccountDTO[]> {
    const sql = "SELECT * FROM ACCOUNT;";
    try {
      return await this.database.query<AccountDTO>(sql);
    } catch (error) {
      throw new Error(`Error getting all accounts: ${error}`);
    }
  }
}
