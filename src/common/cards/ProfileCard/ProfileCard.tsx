import styles from "./ProfileCard.module.css";

import { useNavigate } from "react-router-dom";

import { Image, Typography } from "../../";
interface ProfileCardProps {
    user: User;
    onCloseBurgerMenu?: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
    user,
    onCloseBurgerMenu,
}) => {
    const navigate = useNavigate();

    const onClickPokemon = (id: Pokemon["id"]) => {
        navigate(`/pokemon/${id}`);
        onCloseBurgerMenu && onCloseBurgerMenu();
    };

    return (
        <div>
            <div className={styles.profile_info}>
                <Image src={user.photoURL} />
                <div className={styles.profile_info_user}>
                    <Typography variant="title-regular" Tagname="h2">
                        {user.displayName}
                    </Typography>
                    <Typography variant="sub-body" Tagname="p">
                        {user.email}
                    </Typography>
                </div>
            </div>
            <div className={styles.user_pokemons}>
                {user.pokemons.map((pokemon, i) => {
                    return (
                        <div
                            onClick={() => onClickPokemon(pokemon.id)}
                            key={i}
                            className={styles.user_pokemons_item}
                        >
                            <Image
                                src={pokemon.image}
                                variant="small-pokemon"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
