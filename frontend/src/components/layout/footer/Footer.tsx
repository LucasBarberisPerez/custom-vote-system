import styles from "./footer.module.scss";
import UserAuth from "./UserAuth";
import { MdHowToVote } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <MdHowToVote /> 
        Copyright &copy; 2024 Vote System by <b>Lucas Barberis Pérez</b>
        <MdHowToVote />
      </p>
      <UserAuth />
    </footer>
  );
}
