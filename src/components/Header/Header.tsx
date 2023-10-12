import React, { FC } from "react";
import styles from "./Header.module.css";
import paw from "../../icons/paw-solid.svg";
import user from "../../icons/circle-user-solid.svg";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.logoContainer}>
                <img src={paw} className={styles.Logo}></img>
            </div>
            <p className={styles.siteName}>Say woof!</p>
            <div className={styles.userActions}>
                <img src={user} className={styles.UserIcon}></img>
            </div>
        </div>
    );
};

export default Header;
