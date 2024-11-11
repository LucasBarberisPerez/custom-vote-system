import styles from "./section.module.scss";
export default function About() {
  return (
    <section className={styles.about}>
      <h1>About</h1>
      <p>
        This demo voting app is built for ease of use. Recruiters can explore voting features with
        just a few clicks, no full registration needed. Simple, intuitive, and quick to navigate.
      </p>
      
    </section>
  );
}
