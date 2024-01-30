import { FacebookLogo, GoogleLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Travels</h1>
      <nav className={styles.nav_menu}>
        <ul className={styles.nav_menu_itens}>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">posts</a>
          </li>
          <li>
            <a href="#">pages</a>
          </li>
          <li>
            <a href="#">purchase</a>
          </li>
        </ul>
      </nav>
      <nav className={styles.nav_links}>
        <ul className={styles.nav_menu_links}>
          <li>
            <a href="#">
              <FacebookLogo size={20} color="#0A0B0E" />
            </a>
          </li>
          <li>
            <a href="#">
              <GoogleLogo size={20} color="#0A0B0E"/>
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramLogo size={20} color="#0A0B0E"/>
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterLogo size={20} color="#0A0B0E"/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
