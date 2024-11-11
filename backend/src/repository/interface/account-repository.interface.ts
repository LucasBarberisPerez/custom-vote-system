import { Account, AccountDTO } from "../../model/account.model";

export interface IAccountRepository {
  getByUsername(username: string): Promise<AccountDTO | null>;
  create(user: Account): Promise<void>;
}
