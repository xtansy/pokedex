import styles from "./UsersPage.module.css";

import { useUsersCollection } from "../../utils/firebase/hooks";
import { ProfileCard } from "../../common";
import { LoadingPage } from "../";

export const UsersPage = () => {
    const { data, isLoading } = useUsersCollection();

    const loading = !data || isLoading;

    if (loading) return <LoadingPage />;

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
