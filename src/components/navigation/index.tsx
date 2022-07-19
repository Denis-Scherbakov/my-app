import { Navmenu } from "./Navmenu";
import { ChatSvg } from "../../images/navigation/ChatSvg";
import { ExitSvg } from "../../images/navigation/ExitSvg";
import { HomeSvg } from "../../images/navigation/HomeSvg";
import { MarketSvg } from "../../images/navigation/MarketSvg";
import { SearchSvg } from "../../images/navigation/SearchSvg";
import { SettingsSvg } from "../../images/navigation/SettingsSvg";
import styles from ".//Navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive(!isActive);

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navBarWrapper}>
        <ul className={styles.topBar}>
          <li className={styles.navAnchor}>
            <Link to="/">
              <HomeSvg />
            </Link>
          </li>
          <li>
            <button className={styles.navButton} onClick={toggle}>
              <MarketSvg />
            </button>
          </li>
          <li className={styles.navAnchor}>
            <a href="localhost:3000">
              <SearchSvg />
            </a>
          </li>
        </ul>
        <ul>
          <li className={styles.navAnchor}>
            <a href="localhost:3000">
              <SettingsSvg />
            </a>
          </li>
          <li>
            <button className={styles.navButton}>
              <ChatSvg />
            </button>
          </li>
          <li className={styles.navAnchor}>
            <a href="localhost:3000">
              <ExitSvg />
            </a>
          </li>
        </ul>
      </nav>
      {isActive && <Navmenu />}
    </div>
  );
}
