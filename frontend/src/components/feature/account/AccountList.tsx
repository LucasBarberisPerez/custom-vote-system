import { useState } from "react";
import { AccountService } from "../../../lib/service/AccountService";

//I know this is a crime, but I don't care this is a demo...
export default async function AccountList() {
  //TODO: Add account list
  const [accountList, setAccountList] = useState<[]>([]);
  const accountService = new AccountService();
  const accList = await accountService.getAccountList();
  setAccountList(accList);
  console.log(AccountList);
  return <div>{accountList}</div>;
}
