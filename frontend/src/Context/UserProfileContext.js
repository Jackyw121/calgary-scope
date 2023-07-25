import { createContext, useReducer } from "react";

export const UserProfileContext = createContext()

export const userProfileReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERPROFILE' :
            return {
                userProfiles: action.payload
            }
        case 'CREATE_USERPROFILE':
            return {
                userProfiles: [action.payload, ...state.userProfiles]
            }
        case 'DELETE_USERPROFILE':
            return {
                userProfiles: state.userProfiles.filter((u) => u._id !== action.payload._id)
            } 
        default:
            return state
    }
}

export const UserProfileContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userProfileReducer, {
        userProfiles: null
    })


return (
    <UserProfileContext.Provider value={{...state, dispatch}}>
        { children }
    </UserProfileContext.Provider>
)

}