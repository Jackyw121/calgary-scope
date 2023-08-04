import { createContext, useReducer } from "react";

export const formContext = createContext()

export const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FORMS' :
            return {
                forms: action.payload
            }
        case 'CREATE_FORM':
            return {
                forms: [action.payload, ...state.forms]
            }
        case 'DELETE_FORM':
            return {
                forms: state.forms.filter((f) => f._id !== action.payload._id)
            } 
        default:
            return state
    }
}

export const FormContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, {
        forms: null
    })


return (
    <formContext.Provider value={{...state, dispatch}}>
        { children }
    </formContext.Provider>
)

}