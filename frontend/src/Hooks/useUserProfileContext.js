import { UserProfileContext } from "../Context/UserProfileContext";
import { useContext } from "react";

export const useUserProfileContext = () => {
    const context = useContext( UserProfileContext )

    if (!context) {
        throw Error('useUserProfileContext must be used inside an UserProfileProvider')
    }

    return context
}
