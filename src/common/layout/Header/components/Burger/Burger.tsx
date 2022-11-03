import classnames from "classnames";

import styles from "./Burger.module.css";

interface BurgerProps {
    onClick: () => void;
    isActive: boolean;
}

export const Burger: React.FC<BurgerProps> = ({ onClick, isActive }) => (
    <div
        onClick={onClick}
        className={classnames(styles.burger, { [styles.active]: isActive })}
    >
        <div />
        <div />
        <div />
    </div>
);
