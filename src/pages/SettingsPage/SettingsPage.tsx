import styles from "./SettingsPage.module.css";
import { useState } from "react";

import { useStore } from "../../utils/contexts";
import { Setting } from "./Setting/Setting";
import { SettingsModal, ImgLoadModal, Image } from "../../common";

export const SettingsPage = () => {
    const { user } = useStore();

    const [settingsParams, setSettingsParams] =
        useState<SettingsParamsProps | null>(null);

    const [imgModalVisible, setImgModalVisible] = useState<boolean>(false);

    const onClose = () => {
        setSettingsParams(null);
        setImgModalVisible(false);
    };

    return (
        <div className={styles.settingsPage}>
            <Image
                variant="small-round-avatar"
                src={user.photoURL}
                alt="userPhoto"
            />
            <div className={styles.settingsPage_inlineWrapper}>
                <Setting label={"User id"} value={user.uid} />
                <Setting label={"Email"} value={user.email} />
                <Setting
                    label={"Your name"}
                    value={user.displayName}
                    onClick={() => {
                        setSettingsParams({
                            type: "displayName",
                            value: user.displayName,
                        });
                    }}
                />
                <Setting
                    label={"City"}
                    value={user.city}
                    onClick={() => {
                        setSettingsParams({
                            type: "city",
                            value: user.city ?? "",
                        });
                    }}
                />
            </div>
            <SettingsModal settingsParams={settingsParams} onClose={onClose} />
            <ImgLoadModal visible={imgModalVisible} onClose={onClose} />
        </div>
    );
};
