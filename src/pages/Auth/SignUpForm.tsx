import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./Auth.module.css";
import { Button } from "../../common/buttons";
import { Input } from "../../common/fields";
import {
    emailSchema,
    nameSchema,
    passwordSchema,
    citySchema,
} from "../../utils/constants";
import { useRegisterWithEmailAndPasswordMutation } from "../../utils/firebase/hooks";
import { useStore } from "../../utils/contexts";
import { ROUTES } from "../../utils/constants/";

interface SignUpProps extends User {
    password: string;
}

export const SignUpForm = () => {
    const navigate = useNavigate();
    const { changeSession } = useStore();

    const { register, handleSubmit, formState, setError } =
        useForm<SignUpProps>();

    const { isSubmitting, errors } = formState;

    const { mutate, isLoading: registerWithEmailAndPasswordMutationLoading } =
        useRegisterWithEmailAndPasswordMutation({
            options: {
                onSuccess: () => {
                    changeSession({ isAuth: true });
                    navigate(ROUTES.POKEMONS);
                },
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
            },
        });

    const onSubmit = handleSubmit((user) => mutate(user));

    const isLoading =
        isSubmitting || registerWithEmailAndPasswordMutationLoading;

    return (
        <section>
            <h1 className={styles.title}>Sign Up</h1>
            <form onSubmit={onSubmit}>
                <Input
                    disabled={isLoading}
                    {...register("name", nameSchema)}
                    error={errors.name?.message}
                    placeholder="Name"
                />

                <Input
                    disabled={isLoading}
                    error={errors.email?.message}
                    {...register("email", emailSchema)}
                    placeholder="E-mail"
                />
                <Input
                    error={errors.city?.message}
                    {...register("city", citySchema)}
                    placeholder="City"
                />
                <Input
                    disabled={isLoading}
                    error={errors.password?.message}
                    {...register("password", passwordSchema)}
                    type="password"
                    placeholder="Password"
                />
                <Button type="submit" loading={isLoading}>
                    Sign Up
                </Button>
            </form>
        </section>
    );
};
