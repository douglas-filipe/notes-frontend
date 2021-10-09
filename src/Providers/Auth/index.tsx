import { createContext, useState, useContext, ReactNode } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import api from "../../services/api";


interface AuthProviderProp {
    children: ReactNode
}

interface AuthProviderData {
    userData: {
        token: String,
        user: {
            _id: String,
            username: String,
            email: String
        }
    },
    reqRegister: (data: formData) => void,
    reqLogin: (data: formData) => void
}

interface formData {
    username: String,
    email: String,
    password: String
}


const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({ children }: AuthProviderProp) => {

    const userData = JSON.parse(localStorage.getItem("@notes/user") || "")

    const history = useHistory()

    const reqRegister = async (data: formData) => {
        try {
            const response = await api.post("/user/register", {
                username: data.username,
                email: data.email,
                password: data.password
            })
            await console.log(response)
            await toast.success('Conta criada!')
            history.push('/login')
        } catch (e) {
            toast.error('Email já cadastrado')
        }

    }

    const reqLogin = async (data: formData) => {
        try {

            const response = await api.post("/user/login", {
                email: data.email,
                password: data.password
            })
            await toast.success('Sucesso ao entrar!!')
            await localStorage.setItem("@notes/user", JSON.stringify(response.data))

        } catch (e) {
            toast.error('Email ou senha inválidos')
        }
    }


    return (
        <AuthContext.Provider value={{ userData, reqRegister, reqLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)