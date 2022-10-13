import { useForm } from "react-hook-form";
import styles from "./Auth.module.css";

import { Button } from "../../common/buttons";
import { Input } from "../../common/fields";
import { emailSchema, passwordSchema } from "../../utils/constants";
import { useLogInWithEmailAndPasswordMutation } from "../../utils/api/firebase/hooks";

interface SignInProps {
    email: User["email"];
    password: string;
}

export const SignInForm = () => {
    const { register, handleSubmit, formState } = useForm<SignInProps>();
    const { isSubmitting, errors } = formState;
    const { mutate, isLoading: logInWithEmailAndPasswordMutationLoading } =
        useLogInWithEmailAndPasswordMutation();

    const isLoading = isSubmitting || logInWithEmailAndPasswordMutationLoading;

    const onSubmit = handleSubmit((user) => mutate(user));
    return (
        <section>
            <h1 className={styles.title}>Login</h1>
            <form onSubmit={onSubmit}>
                <Input
                    disabled={isLoading}
                    error={errors.email?.message}
                    {...register("email", emailSchema)}
                    placeholder="E-mail"
                />

                <Input
                    disabled={isLoading}
                    error={errors.password?.message}
                    {...register("password", passwordSchema)}
                    type="password"
                    placeholder="Password"
                />
                <Button type="submit" loading={isLoading}>
                    Sign In
                </Button>
            </form>
        </section>
    );
};