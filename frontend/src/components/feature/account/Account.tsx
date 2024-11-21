import { AuthContext } from "../../../lib/context/AuthContextProvider";
import { AccountData } from "../../../lib/model/Account";
import { AccountService } from "../../../lib/service/AccountService";
import styles from "./account.module.scss";
import { useContext } from "react";

export default function Account({ USERNAME, PASSWORD, USER_TYPE }: AccountData) {
  const authContext = useContext(AuthContext);
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const accountService = new AccountService();
      const isAuthenticated = await accountService.login(USERNAME, PASSWORD);
      if (!isAuthenticated) {
        throw new Error("Error logging in");
      }
      authContext?.checkLogin();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return (
    <div className={styles.account_info}>
      <span>
        <b>User:</b> {USERNAME}
      </span>
      <span>
        <b>Type user:</b> {USER_TYPE}
      </span>
      <button onClick={handleClick}>Select User</button>
    </div>
  );
}
