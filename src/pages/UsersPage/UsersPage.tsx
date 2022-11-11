import styles from "./UsersPage.module.css";

import { useUsersCollection } from "../../utils/firebase/hooks";
import { ProfileCard } from "../../common";

export const UsersPage = () => {
    const { data, isLoading } = useUsersCollection();

    const loading = !data || isLoading;

    if (loading) return null;

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.users}>
                    {data.map((user, i) => {
                        return (
                            <div key={i} className={styles.users_block}>
                                <ProfileCard key={i} user={user} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
