import { createContext, useState, useContext, ReactNode } from "react";
import api from "../../services/api";


interface AuthProviderProp{
    children: ReactNode
}

interface AuthProviderData{
    userId: string,
    token: string
}

interface formData{
    username: String,
    email: String,
    password: String
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({children}: AuthProviderProp)=>{
    const [userId, setUserId] = useState(localStorage.getItem("@notes/id") || "")
    const token = localStorage.getItem("@notes/token") || ""

    const reqRegister = (data: formData) => {
        api.post("/user/register")
    }


    return(
        <AuthContext.Provider value={{userId, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)