import { useMutation } from "@tanstack/react-query";
import { addDocument } from "../requests";

type Collection = "pokemons";

interface useAddDocumentMutationProps {
    collection: Collection;
    data: any;
}

export const useAddDocumentMutation = (
    settings?: RequestMutationSettings<typeof addDocument>
) => {
    return useMutation(
        ["addDocumentMutation"],
        (data: RequestParams<useAddDocumentMutationProps>) =>
            addDocument(data.collection, data.data),
        settings?.options
    );
};
