import { Spinner } from "../../Spinner/Spinner";
import styles from "./LoadingContentModal.module.css";

export const LoadingContentModal = () => {
    return (
        <div className={styles.content}>
            <Spinner width="20" height="20" />
        </div>
    );
};
