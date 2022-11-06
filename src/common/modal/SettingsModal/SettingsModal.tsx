import styles from "./SettingsModal.module.css";

import { Modal, ModalProps } from "../Modal/Modal";
import { SettingsModalContent } from "./SettingsModalContent/SettingsModalContent";

interface SettingsModalProps extends Pick<ModalProps, "onClose"> {
    settingsParams: SettingsParamsProps | null;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
    settingsParams,
    onClose,
}) => {
    return (
        <Modal visible={!!settingsParams} onClose={onClose}>
            {!!settingsParams && (
                <SettingsModalContent
                    settings={settingsParams}
                    onClose={onClose}
                />
            )}
        </Modal>
    );
};
