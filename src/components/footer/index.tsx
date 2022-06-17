import styles from ".//footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        © 1992-2020 Честный Агент © Все права защищены.
      </p>
      <p className={styles.footerText}>8(495)150-21-12</p>
    </footer>
  );
}
