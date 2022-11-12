import { Spinner } from "../../common";
import styles from "./LoadingPage.module.css";

export const LoadingPage = () => {
    return (
        <div className={styles.loading_wrapper}>
            <Spinner width="20" height="20" />
        </div>
    );
};
