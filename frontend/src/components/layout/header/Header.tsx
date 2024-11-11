import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import style from "./header.module.scss";
import SocialCard from "./SocialCard";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.header_section}>
        <h1>Vote system</h1>
      </div>
      <div className={style.header_section}>
        <SocialCard icon={<FaGithub />} title="Github" url="https://github.com/lucasbarberisperez/" />
        <SocialCard icon={<FaLinkedin />} title="Linkedin" url="https://www.linkedin.com/in/lucas-barberis-pérez-9281352a7/" />
        <SocialCard icon={<MdOutlineContactPage />} title="Website" url="https://lucasbarberisperez.github.io/portfolio/" />
      </div>
    </header>
  );
}
