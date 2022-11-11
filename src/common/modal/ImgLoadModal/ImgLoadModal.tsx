import styles from "./ImgLoadModal.module.css";

import { Button } from "../../buttons";
import { Modal, ModalProps } from "../Modal/Modal";
import { useUpdateUser, useUploadImage } from "../../../utils/firebase/hooks";
import { useStore } from "../../../utils/contexts";
import { Typography } from "../../";

type ImgLoadModalProps = Omit<ModalProps, "children">;

export const ImgLoadModal: React.FC<ImgLoadModalProps> = ({
    onClose,
    visible,
}) => {
    const { user } = useStore();

    const { mutate: updateUserMutate } = useUpdateUser();

    const { uploadFile, progresspercent, loading } = useUploadImage(
        `avatar_${user.uid}`
    );

    const onUploadFile = async (e: any) => {
        const targetFile = e.target.files[0];
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
        <Modal onClose={onClose} visible={visible}>
            <div className={styles.imgModalContent}>
                <label>
                    {!loading ? (
                        <Typography Tagname="h2" variant="sub-title">
                            Upload Your photo
                        </Typography>
                    ) : (
                        <Typography Tagname="h2" variant="sub-title">
                            {progresspercent}%
                        </Typography>
                    )}
                    <input
                        className={styles.imgModalContent_input}
                        type="file"
                        onChange={onUploadFile}
                    />
                </label>
                <Button disabled={loading} loading={loading} onClick={onClose}>
                    CANCEL
                </Button>
            </div>
        </Modal>
    );
};
