import { useMutation } from "@tanstack/react-query";
import { addDocument } from "../requests";

type Collection = "pokemons";

interface useAddDocumentPokemonMutationProps {
    collection: Extract<Collection, "pokemons">;
    data: PokemonDocument;
}

type useAddDocumentMutationProps = useAddDocumentPokemonMutationProps;

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
