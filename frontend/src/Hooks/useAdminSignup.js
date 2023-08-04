import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useAdminSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const url = "https://calgary-scope.onrender.com"

    

    const signup = async (email, password, firstName, lastName, employeeNumber) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(url + '/api/admin/signup', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password, firstName, lastName, employeeNumber})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            //saving the admin to local storage
            localStorage.setItem('admin', JSON.stringify(json))

            //update auth context
            dispatch({type: 'ADMINLOGIN', payload: json})

            setIsLoading(false)

        }
    }

    return { signup, isLoading, error}
}