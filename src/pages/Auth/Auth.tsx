import styles from "./Auth.module.css";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

export const Auth = () => {
    const isAuth = false;

    return (
        <div className={styles.register}>
            <div className={styles.card}>
                <div className={styles.cover} />
                {isAuth ? <SignInForm /> : <SignUpForm />}
            </div>
        </div>
    );
};
