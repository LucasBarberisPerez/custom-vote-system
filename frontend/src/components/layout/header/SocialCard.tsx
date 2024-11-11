
import style from "./header.module.scss";
import { ReactNode } from "react";
interface SocialCardProps {
  icon: ReactNode;
  title: string;
  url: string;
}
export default function SocialCard({ icon, title, url }: SocialCardProps) {
  return (
    <a href={url} className={style.header_link}>
      {icon}
      <h2 className={style.header_title}>{title}</h2>
    </a>
  );
}
