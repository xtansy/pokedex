import { useMutation } from "@tanstack/react-query";
import { logInWithEmailAndPassword } from "../requests";

interface useLogInWithEmailAndPasswordMutationProps {
    email: User["email"];
    password: string;
}

export const useLogInWithEmailAndPasswordMutation = (
    settings?: RequestMutationSettings<typeof logInWithEmailAndPassword>
) => {
    return useMutation(
        ["signIn"],
        (user: RequestParams<useLogInWithEmailAndPasswordMutationProps>) =>
            logInWithEmailAndPassword(user.email, user.password)
    );
};
