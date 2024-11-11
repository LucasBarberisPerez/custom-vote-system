import styles from "./section.module.scss";
export default function Feature() {
 
  
  return (
    <section className={styles.feature}>
      <div className={styles.feature_description}>
        <h1>Features</h1>
        <ul>
          <li>Users can create - vote - see polls</li>
          <li>Proposals can be created</li>
          <li>Users can see the results of polls</li>
        </ul>
      </div>
      <div className={styles.button_section}>
        <a href="/polls" className={styles.button}>Get started</a>
        <a href="https://github.com/LucasBarberisPerez/custom-vote-system" className={styles.button}>Source code</a>
      </div>
    </section>
  );
}
