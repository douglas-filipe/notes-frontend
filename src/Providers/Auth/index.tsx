import { createContext, useContext, ReactNode, useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import api from "../../services/api";

interface AuthProviderProp {
    children: ReactNode
}

interface AuthProviderData {
    reqRegister: (data: formData) => void,
    reqLogin: (data: formDataLogin) => void,
    userData: {
        token: String
        user: {
            _id: String,
            username: String,
            email: String
        }
    }
}

interface formData {
    username: String,
    email: String,
    password: String,
}


interface formDataLogin {
    email: String,
    password: String,
}


const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({ children }: AuthProviderProp) => {

    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("@notes/token") || "{}"))

    const history = useHistory()

    const reqRegister = async (data: formData) => {
        try {
            const response = await api.post("/user/register", {
                username: data.username,
                email: data.email,
                password: data.password
            })
            await toast.success('Conta criada!')
            await history.push('/login')
        } catch (e) {
            toast.error('Email já cadastrado')
        }

    }

    const reqLogin = async (data: formDataLogin) => {
        try {

            const response = await api.post("/user/login", {
                email: data.email,
                password: data.password
            })
            await toast.success('Sucesso ao entrar!!')
            await localStorage.setItem("@notes/token", JSON.stringify(response.data))
            await history.push("/")
            setUserData(JSON.parse(localStorage.getItem("@notes/token") || "{}"))
            
        }catch (e) {
            toast.error('Email ou senha inválidos')
        }
    }


    return (
        <AuthContext.Provider value={{ reqRegister, reqLogin, userData }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)