import styles from "./account.module.scss";
import { useFetch } from "../../../lib/hooks/useFetch";
import { AccountData } from "../../../lib/model/Account";
import Loading from "../../common/Loading";
import Account from "./Account";
import { useContext } from "react";
import { AuthContext } from "../../../lib/context/AuthContextProvider";

//I know this is a crime, but I don't care this is a demo...
export default function AccountList() {
  const authContext = useContext(AuthContext);

  if (!authContext?.isAuthenticated) {
    const { data, isFetching } = useFetch<AccountData[]>({ url: "/api/auth/accounts" });
    return (
      <section className={styles.account_section}>
        <h2>Accounts</h2>
        <p>
          This is made for skip the register process, you can choose any account of the list to
          login
        </p>
        <div className={styles.account_container}>
          <div className={styles.account_info}>
            <span>
              <b>User</b> {}
            </span>
            <span>
              <b>Authority</b> {}
            </span>
            <span>
              <b>Action</b>
            </span>
          </div>
          
          {data?.map((account: AccountData, index: number) => (
            <Account key={index} {...account} />
          ))}
        </div>
        {isFetching && <Loading loadingText="Loading accounts..." />}
        {!isFetching && !data && <h2>No accounts found</h2>}
      </section>
    );
  }
  return null;
}
