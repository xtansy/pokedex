import styles from "./Modal.module.css";
import classnames from "classnames";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
    visible: boolean;
}

export const Modal: React.FC<ModalProps> = ({ children, visible, onClose }) => {
    const classes = classnames(styles.modal, {
        [styles.modal_active]: visible,
    });

    return (
        <div className={classes}>
            <div className={styles.modal_overlay} onClick={onClose} />
            <div className={styles.modal_container}>{children}</div>
        </div>
    );
};
