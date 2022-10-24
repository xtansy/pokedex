import styles from "./PokemonEvolutionChain.module.css";
import { useRequestEvolutionQuery } from "./../../../utils/api";
import { PokemonShortCard } from "../PokemonShortCard/PokemonShortCard";

interface PokemonEvolutionChainProps {
    pokemonName: Pokemon["name"];
    chainID: number;
}

const generateEvolutionChain = (
    chainLink: ChainLink,
    chain: { name: Pokemon["name"] }[] = []
) => {
    chain.push({ name: chainLink.species.name });

    if (chainLink.evolves_to.length) {
        chainLink.evolves_to.forEach((item) => {
            generateEvolutionChain(item, chain);
        });
    }

    return chain;
};

export const PokemonEvolutionChain: React.FC<PokemonEvolutionChainProps> = ({
    chainID,
    pokemonName,
}) => {
    const { data: evolutionChainData, isLoading: evolutionChainLoading } =
        useRequestEvolutionQuery({ id: chainID });

    const isEvolutionChainData = !evolutionChainLoading && !!evolutionChainData;

    if (!isEvolutionChainData) return null;

    const evolutionChain = generateEvolutionChain(
        evolutionChainData.data.chain
    );

    return (
        <>
            <h2 className={styles.evolution_title}>Evolution Chain</h2>
            <div className={styles.evolution}>
                {evolutionChain.map((item, i) => {
                    return (
                        <PokemonShortCard
                            key={i}
                            idOrName={item.name}
                            isActive={pokemonName === item.name}
                        />
                    );
                })}
            </div>
        </>
    );
};
