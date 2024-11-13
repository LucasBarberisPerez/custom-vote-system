import styles from "./loading.module.scss";

interface Props {
    loadingText:string
}
export default function Loading({loadingText}: Props) {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}></div>
      <h2>{loadingText}</h2>
    </div>
  )
}
