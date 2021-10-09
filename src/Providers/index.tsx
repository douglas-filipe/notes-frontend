import { ReactNode } from "react";
import { AuthProvider } from "./Auth";

interface ProviderProps{
    children: ReactNode
}

export const Providers = ({children}: ProviderProps) => {
    return(
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}