import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
    user: User;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
    return (
        <div className={styles.profile_info}>
            <div>
                {user.photoURL ? (
                    <img
                        className={styles.profile_img}
                        src={user.photoURL}
                        alt="userPhoto"
                    />
                ) : (
                    <img src="http://dummyimage.com/120" alt="safeUserPhoto" />
                )}
            </div>
            <div className={styles.profile_info_user}>
                <h2>{user.displayName}</h2>
                <p>{user.email}</p>
            </div>
        </div>
    );
};
