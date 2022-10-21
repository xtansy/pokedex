import { useMutation } from "@tanstack/react-query";
import { logout } from "../requests";

export const useLogoutMutation = (
    settings?: RequestMutationSettings<typeof logout>
) => {
    return useMutation(["logout"], () => logout(), settings?.options);
};
