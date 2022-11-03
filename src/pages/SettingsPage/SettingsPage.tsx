import { useState } from "react";

import { useStore } from "../../utils/contexts";
import { useUploadImage } from "../../utils/firebase/hooks";
import styles from "./SettingsPage.module.css";
import { useUpdateUser } from "../../utils/firebase/hooks";

export const SettingsPage = () => {
    const [fileObj, setFile] = useState<
        { url: string; file: File } | undefined
    >();
    const { user } = useStore();

    const { uploadFile, error, progresspercent, snapshot } = useUploadImage(
        `avatar_${user.uid}`
    );

    const { mutate: updateUserMutate } = useUpdateUser();

    const onUploadFile = async (e: any) => {
        const targetFile = e.target.files[0];
        setFile({
            url: URL.createObjectURL(targetFile),
            file: targetFile,
        });
        const { url } = await uploadFile(targetFile, {
            contentType: "image/png",
        });
        updateUserMutate({
            collection: "users",
            id: user.uid,
            data: { photoURL: url },
        });
    };

    return (
        <div className={styles.settingsPage}>
            <div className={styles.settingsPage_imgWrapper}>
                <label>
                    {!fileObj && user.photoURL && (
                        <img src={user.photoURL} alt="photoUser" />
                    )}

                    {!fileObj && !user.photoURL && (
                        <img
                            src="http://dummyimage.com/120"
                            alt="safeUserPhoto"
                        />
                    )}

                    {fileObj && <img src={fileObj.url} alt="photoUser" />}
                    <input
                        type="file"
                        onChange={onUploadFile}
                        className={styles.settingsPage_fileInput}
                    />
                </label>
            </div>
            <h1>{user.displayName}</h1>
        </div>
    );
};
