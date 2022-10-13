import { useMutation } from "@tanstack/react-query";
import { registerWithEmailAndPassword } from "../requests";

interface useRegisterWithEmailAndPasswordMutationProps extends User {
    password: string;
}

export const useRegisterWithEmailAndPasswordMutation = (
    settings?: RequestMutationSettings<typeof registerWithEmailAndPassword>
) => {
    return useMutation(
        ["signUp"],
        (user: RequestParams<useRegisterWithEmailAndPasswordMutationProps>) =>
            registerWithEmailAndPassword(user, user.password),
        settings?.options
    );
};
