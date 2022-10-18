import { message } from 'antd'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from 'src/utils/firebase/frontend'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'

export interface UserRequest {
    email: string
    password: string
}

export type UserRole = 'admin' | 'user' | null

const useAuth = () => {
    const login = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err: any) {
            console.error(err)
            message.error(err.message)
        }
    }

    const [user, loading, error] = useAuthState(auth)

    const getUserToken = async () => {
        const token = await user?.getIdToken()
        if (window) {
            localStorage.setItem('token', token || '')
        }
    }

    useEffect(() => {
        if (user) {
            getUserToken()
        }
    }, [user])

    const logout = async () => {
        await signOut(auth)
    }

    return { login, logout, user, loading, error }
}

export default useAuth
