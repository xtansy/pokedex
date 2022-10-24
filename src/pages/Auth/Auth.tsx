import { useState } from "react";

import styles from "./Auth.module.css";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
import { Button, GoogleButton } from "../../common";
import { useLogInWithGoogleMutation } from "../../utils/firebase/hooks";

export const Auth = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);

    const buttonText = isSignUp ? "already have account" : "create new account";

    const { mutate } = useLogInWithGoogleMutation();

    return (
        <div className={styles.register}>
            <div className={styles.card}>
                <div className={styles.cover} />
                <div className={styles.card_form}>
                    {!isSignUp && <SignInForm />}
                    {isSignUp && <SignUpForm />}
                    <Button
                        onClick={() => setIsSignUp(!isSignUp)}
                        variant="text"
                        className={styles.card__button}
                    >
                        {buttonText}
                    </Button>
                    <GoogleButton onClick={() => mutate({})}>
                        Sign In with Google
                    </GoogleButton>
                </div>
            </div>
        </div>
    );
};
