import { useState } from 'react'
import { useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const url = "https://calgary-scope.onrender.com"

    

    const signup = async (email, password, firstName, lastName) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(url + '/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({email, password, firstName, lastName})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            //saving the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)

        }
    }

    return { signup, isLoading, error}
}