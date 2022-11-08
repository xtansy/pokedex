import styles from "./PokemonModal.module.css";

import { PokemonContentModal } from "./PokemonContentModal/PokemonContentModal";
import { Modal, ModalProps } from "../";

interface PokemonModalProps extends Omit<ModalProps, "children"> {
    id: Pokemon["id"] | null;
}

export const PokemonModal: React.FC<PokemonModalProps> = ({
    onClose,
    visible,
    id,
}) => {
    return (
        <Modal onClose={onClose} visible={visible}>
            {id && <PokemonContentModal id={id} onClose={onClose} />}
        </Modal>
    );
};
