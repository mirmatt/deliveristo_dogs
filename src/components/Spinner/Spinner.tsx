import React, { FC } from "react";
import styles from "./Spinner.module.css"
import spinnerIcon from "../../icons/3-dots-bounce.svg"

const Spinner: FC = () => {
	return (<div className={styles.SpinnerContainer}>
		<img className={styles.Spinner} src={spinnerIcon}></img>
	</div>)
}

export default Spinner