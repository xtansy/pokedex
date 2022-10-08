import styles from "./Input.module.css";
import { forwardRef } from "react";
import classNames from "classnames";

export interface InputProps extends React.ComponentPropsWithRef<"input"> {
    error?: string;
}

export const Input: React.FC<InputProps> = forwardRef(
    ({ error, id, placeholder, ...props }, inputRef) => (
        <label htmlFor={id}>
            <span className={styles.label}>{placeholder}</span>
            <input
                ref={inputRef}
                className={classNames(styles.input, {
                    [styles.input_error]: !!error,
                })}
                id={id}
                {...props}
            />
            <span className={styles.error}>{error}</span>
        </label>
    )
);
