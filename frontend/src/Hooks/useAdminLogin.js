import { useState } from 'react'
import { useAuthContext} from './useAuthContext'

export const useAdminLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const url = "https://calgary-scope.onrender.com"

    const login = async (email, password, employeeNumber) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/admin/login', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password, employeeNumber})
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

    return { login, isLoading, error}
}