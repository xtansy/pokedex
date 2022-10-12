import styles from "./Auth.module.css";
import { useForm } from "react-hook-form";

import { Button } from "../../common/buttons";
import { Input } from "../../common/fields";
import {
    emailSchema,
    nameSchema,
    passwordSchema,
    citySchema,
} from "../../utils/constants";
import {
    useLogInWithEmailAndPasswordMutation,
    useRegisterWithEmailAndPasswordMutation,
} from "../../utils/api/firebase/hooks";

interface SignUpProps extends User {
    password: string;
}

interface SignInProps {
    email: User["email"];
    password: string;
}

export const SignUpForm = () => {
    const { register, handleSubmit, formState } = useForm<SignUpProps>();
    const { isSubmitting, errors } = formState;

    const { mutate, data } = useRegisterWithEmailAndPasswordMutation();

    const onSubmit = handleSubmit((user) => mutate(user));

    console.log(data);
    return (
        <form onSubmit={onSubmit}>
            <Input
                {...register("firstName", nameSchema)}
                error={errors.firstName?.message}
                placeholder="First Name"
            />
            <Input
                {...register("lastName", nameSchema)}
                error={errors.lastName?.message}
                placeholder="Last Name"
            />
            <Input
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
                error={errors.password?.message}
                {...register("password", passwordSchema)}
                type="password"
                placeholder="Password"
            />
            <Button type="submit">Sign Up</Button>
        </form>
    );
};

export const SignInForm = () => {
    const { register, handleSubmit, formState } = useForm<SignInProps>();
    const { isSubmitting, errors } = formState;
    const { mutate } = useLogInWithEmailAndPasswordMutation();

    const onSubmit = handleSubmit((user) => mutate(user));
    return (
        <form onSubmit={onSubmit}>
            <Input
                error={errors.email?.message}
                {...register("email", emailSchema)}
                placeholder="E-mail"
            />

            <Input
                error={errors.password?.message}
                {...register("password", passwordSchema)}
                type="password"
                placeholder="Password"
            />
            <Button type="submit">Sign Up</Button>
        </form>
    );
};

export const Auth = () => {
    const isAuth = false;

    return (
        <div className={styles.register}>
            {isAuth ? <SignInForm /> : <SignUpForm />}
        </div>
    );
};
