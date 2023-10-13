import React, { FC } from "react";
import styles from "./Header.module.css";
import paw from "../../icons/paw-solid.svg";
import user from "../../icons/circle-user-solid.svg";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.logoContainer}>
                <a href="/"><img src={paw} className={styles.Logo} alt="main logo of the page"></img></a>
            </div>
            <p className={styles.siteName}>Say woof!</p>
            <div className={styles.userActions}>
                <img src={user} className={styles.UserIcon} alt="icon for user"></img>
            </div>
        </div>
    );
};

export default Header;
