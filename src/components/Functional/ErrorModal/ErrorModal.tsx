import React, { FC, useEffect } from "react";
import styles from "./ErrorModal.module.css";

interface ErrorModalProps {
    errorParam: string | boolean;
    setError: Function;
}

const ErrorModal: FC<ErrorModalProps> = (props) => {
    useEffect(() => {
        if (props.errorParam) {
            const errorTimeout = setTimeout(() => {
                props.setError(false);
            }, 2000);
            return () => {
                clearTimeout(errorTimeout);
            };
        } else {
			return
		}
    }, [props.errorParam]);

    return <div className={styles.ErrorModal}>
		<p className={styles.errorText}>{props.errorParam}</p>
	</div>;
};

export default ErrorModal;
