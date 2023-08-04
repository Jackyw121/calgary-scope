import { useContext } from "react";
import { formContext } from "../Context/formContext";

export const useFormContext = () => {
    const context = useContext( formContext )

    if (!context) {
        throw Error('useFormContext must be used inside an FormContextProvider')
    }

    return context
}