import styles from "./Setting.module.css";

interface SettingProps {
    label: string;
    value: User["displayName"] | User["city"] | User["email"] | User["uid"];
    onClick?: () => void;
}

export const Setting: React.FC<SettingProps> = ({ label, value, onClick }) => {
    return (
        <div className={styles.setting}>
            <div className={styles.setting_content}>
                <p className={styles.setting_label}>{label}</p>
                <h2 className={styles.setting_value}>{value}</h2>
            </div>
            {onClick && (
                <svg
                    onClick={onClick}
                    className="h-8 w-8 text-blue-500"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <line x1="5" y1="12" x2="19" y2="12" />{" "}
                    <line x1="15" y1="16" x2="19" y2="12" />{" "}
                    <line x1="15" y1="8" x2="19" y2="12" />
                </svg>
            )}
        </div>
    );
};
