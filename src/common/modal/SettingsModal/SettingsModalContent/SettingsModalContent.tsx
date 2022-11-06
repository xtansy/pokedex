import { Button } from "../../../buttons";
import { useForm } from "react-hook-form";
import styles from "./SettingsModalContent.module.css";

import { useUpdateUser } from "../../../../utils/firebase/hooks";
import { useStore } from "../../../../utils/contexts";
import { Input } from "../../../fields";
import { citySchema, nameSchema } from "../../../../utils/constants";
import { ModalProps } from "../../Modal/Modal";

interface SettingsModalContentProps extends Pick<ModalProps, "onClose"> {
    settings: SettingsParamsProps;
}

const validateSchema = {
    city: citySchema,
    displayName: nameSchema,
};
export const SettingsModalContent: React.FC<SettingsModalContentProps> = ({
    settings,
    onClose,
}) => {
    const { register, handleSubmit, formState } = useForm<SettingsParamsProps>({
        defaultValues: { value: settings.value, type: settings.type },
        mode: "onBlur",
    });
    const { isSubmitting, errors } = formState;

    const id = useStore().user.uid;

    const { mutate, isLoading } = useUpdateUser({
        options: {
            onSuccess: () => {
                onClose();
            },
        },
    });

    const onSubmit = handleSubmit(({ type, value }) => {
        mutate({
            collection: "users",
            id,
            data: {
                [type]: value,
            },
        });
    });
    const loading = isLoading || isSubmitting;

    return (
        <div className={styles.settingsContent}>
            <h3 className={styles.settingsContent_title}>Change Your data</h3>
            <form onSubmit={onSubmit} className={styles.settingsContent_form}>
                <Input
                    disabled={loading}
                    error={errors.value?.message}
                    {...register("value", validateSchema[settings.type])}
                />
                <Button loading={loading} type="submit" variant="outlined">
                    Change
                </Button>
                <Button disabled={loading} onClick={onClose}>
                    Cancel
                </Button>
            </form>
        </div>
    );
};
