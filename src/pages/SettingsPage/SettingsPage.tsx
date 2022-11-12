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
            <div className="container">
                <div className={styles.settingsPage_content}>
                    <Image
                        variant="small-round-avatar"
                        src={user.photoURL}
                        alt="userPhoto"
                    />
                    <svg
                        onClick={() => setImgModalVisible(true)}
                        className="w-8 h-8 text-blue-500 mt-[-10px] cursor-pointer animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 11l7-7 7 7M5 19l7-7 7 7"
                        ></path>
                    </svg>
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
                    <SettingsModal
                        settingsParams={settingsParams}
                        onClose={onClose}
                    />
                    <ImgLoadModal visible={imgModalVisible} onClose={onClose} />
                </div>
            </div>
        </div>
    );
};
