import styles from "./Setting.module.css";

interface SettingProps {
    label: string;
    value: User["displayName"] | User["city"] | User["email"] | User["uid"];
}

export const Setting: React.FC<SettingProps> = ({ label, value }) => {
    return (
        <div className={styles.setting}>
            <p className={styles.setting_label}>{label}</p>
            <h2 className={styles.setting_value}>{value}</h2>
        </div>
    );
};
