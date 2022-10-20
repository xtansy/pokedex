import { useMutation } from "@tanstack/react-query";
import { logInWithGoogle } from "../requests";

export const useLogInWithGoogleMutation = (
    settings?: RequestMutationSettings<typeof logInWithGoogle>
) => {
    return useMutation(
        ["signInWithGoogle"],
        logInWithGoogle,
        settings?.options
    );
};
