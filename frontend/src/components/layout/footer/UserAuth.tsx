import { FaUser, FaCheck } from "react-icons/fa6";
import styles from "./footer.module.scss";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../../lib/context/AuthContextProvider";
import { AccountService } from "../../../lib/service/AccountService";
export default function UserAuth() {
  const authContext = useContext(AuthContext);
  console.log("userAuth", authContext?.isAuthenticated);
  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    const acountService = new AccountService();
    await acountService.logout();
    authContext?.checkLogin();
  };

  if (authContext?.isAuthenticated) {
    return (
      <div className={styles.auth} onClick={handleLogout}>
        <FaCheck className={styles.auth_icon_check} />
        <span >Click to logout</span>
        <FaUser />
      </div>
    );
  }

  return (
    <div className={styles.auth}>
      <IoMdClose className={styles.auth_icon_close} />
      <span>Not logged</span>
      <FaUser />
    </div>
  );
}
