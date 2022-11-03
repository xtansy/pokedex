import { useMutation } from "@tanstack/react-query";
import { registerWithEmailAndPassword } from "../requests";

interface useRegisterWithEmailAndPasswordMutationProps {
    password: string;
    user: Omit<SignUpProps, "password">;
}

export const useRegisterWithEmailAndPasswordMutation = (
    settings?: RequestMutationSettings<typeof registerWithEmailAndPassword>
) => {
    return useMutation(
        ["signUp"],
        (params: RequestParams<useRegisterWithEmailAndPasswordMutationProps>) =>
            registerWithEmailAndPassword(params.user, params.password),
        settings?.options
    );
};
