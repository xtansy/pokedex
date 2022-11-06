import styles from "./SettingsModal.module.css";

import { Modal } from "../Modal/Modal";
import { SettingsModalContent } from "./SettingsModalContent/SettingsModalContent";

interface SettingsModalProps {
    settingsParams: SettingsParamsProps | null;
    onClose: () => void;
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
