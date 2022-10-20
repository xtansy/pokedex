import { useAuthState } from "../../utils/firebase/hooks";

export const ProfilePage = () => {
    const { user } = useAuthState();

    return (
        <div>
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <p>{user?.uid}</p>
        </div>
    );
};
