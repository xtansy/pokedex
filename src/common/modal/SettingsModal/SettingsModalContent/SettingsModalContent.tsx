import { Button } from "../../../buttons";

import { useUpdateUser } from "../../../../utils/firebase/hooks";
import { useStore } from "../../../../utils/contexts";

interface SettingsModalContentProps {
    settings: SettingsParamsProps;
    onClose: () => void;
}

export const SettingsModalContent: React.FC<SettingsModalContentProps> = ({
    settings,
    onClose,
}) => {
    const id = useStore().user.uid;

    const { mutate } = useUpdateUser();

    const onClickUpdate = () => {
        mutate({
            collection: "users",
            id,
            data: {
                [settings.type]: "xtansy2",
            },
        });
    };

    return (
        <div>
            <h3>Change Your data</h3>
            <input type="text" placeholder={settings.value} />
            <div>
                <Button onClick={onClickUpdate} variant="outlined">
                    Change
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </div>
        </div>
    );
};
