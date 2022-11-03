import {
    StorageError,
    uploadBytesResumable,
    UploadMetadata,
    UploadResult,
    UploadTaskSnapshot,
} from "firebase/storage";
import { useState } from "react";
import { ref } from "firebase/storage";
import { storage } from "../instance";
import { getDownloadURL } from "firebase/storage";

export const useUploadImage = (imgName: string) => {
    const [error, setError] = useState<StorageError>();
    const [snapshot, setSnapshot] = useState<UploadTaskSnapshot>();
    const [progresspercent, setProgresspercent] = useState(0);
    const storageRef = ref(storage, imgName);

    const uploadFile = async (
        data: Blob | Uint8Array | ArrayBuffer,
        metadata?: UploadMetadata | undefined
    ): Promise<UploadResult & { url: string }> => {
        return new Promise((resolve, reject) => {
            setError(undefined);
            const uploadTask = uploadBytesResumable(storageRef, data, metadata);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    setSnapshot(snapshot);
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgresspercent(progress);
                },
                (error) => {
                    setError(error);
                    reject(error);
                },
                async () => {
                    setSnapshot(undefined);
                    const url = await getDownloadURL(storageRef);
                    resolve({
                        metadata: uploadTask.snapshot.metadata,
                        ref: uploadTask.snapshot.ref,
                        url,
                    });
                }
            );
        });
    };

    return { uploadFile, error, snapshot, progresspercent };
};
