import styles from "./Auth.module.css";
import { useForm } from "react-hook-form";
import { registerWithEmailAndPassword, User } from "../../firebase";

import { Button } from "../../common/buttons";
import { Input } from "../../common/fields";

interface RegisterProps extends User {
    password: string;
}

export const Auth = () => {
    const { register, handleSubmit, formState } = useForm<RegisterProps>();

    const { isSubmitting, errors } = formState;
    const onSubmit = handleSubmit(({ password, ...user }) =>
        registerWithEmailAndPassword(user, password)
    );

    return (
        <div className={styles.register}>
            <form onSubmit={onSubmit}>
                <Input
                    {...register("firstName", {
                        minLength: {
                            value: 7,
                            message: `min length is ${7}`,
                        },
                    })}
                    error={errors.firstName?.message}
                    placeholder="First Name"
                />
                <Input {...register("lastName")} placeholder="Last Name" />
                <Input {...register("email")} placeholder="E-mail" />
                <Input {...register("city")} placeholder="City" />
                <Input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};
