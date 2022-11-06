import { useMutation } from "@tanstack/react-query";
import { updateDocument } from "../requests";

interface useUpdateUserProps {
    collection: "users";
    id: User["uid"];
    data: Partial<User>;
}

export const useUpdateUser = (
    settings?: RequestMutationSettings<typeof updateDocument>
) => {
    return useMutation(
        ["updateUser"],
        (params: RequestParams<useUpdateUserProps>) =>
            updateDocument(params.collection, params.id, params.data),
        settings?.options
    );
};
