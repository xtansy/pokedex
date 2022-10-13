import styles from "./Button.module.css";
import classnames from "classnames";

type ButtonVariant = "contained" | "outlined" | "text";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
    variant?: ButtonVariant;
    loading?: boolean;
    startIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "contained",
    loading,
    startIcon,
    ...props
}) => {
    const classes = classnames(styles.button, styles[variant], {
        [styles.button_loading]: loading,
    });
    return (
        <button {...props} className={classes}>
            {!loading && children}
            {loading && "загрузка..."}
        </button>
    );
};
