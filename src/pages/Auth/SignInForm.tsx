import { useForm } from "react-hook-form";
import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";

import { Button } from "../../common/buttons";
import { Input } from "../../common/fields";
import { emailSchema, passwordSchema } from "../../utils/constants";
import { useLogInWithEmailAndPasswordMutation } from "../../utils/firebase/hooks";
import { useStore } from "../../utils/contexts";
import { ROUTES } from "../../utils/constants";

interface SignInProps {
    email: User["email"];
    password: string;
}

export const SignInForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState, setError } =
        useForm<SignInProps>();
    const { isSubmitting, errors } = formState;
    const { mutate, isLoading: logInWithEmailAndPasswordMutationLoading } =
        useLogInWithEmailAndPasswordMutation({
            options: {
                onError: (err: Error) => {
                    setError(
                        "email",
                        {
                            type: "custom",
                            message: "Custom Error",
                        },
                        {
                            shouldFocus: true,
                        }
                    );
                },
                onSuccess: () => {
                    navigate(ROUTES.POKEMONS);
                },
            },
        });

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
