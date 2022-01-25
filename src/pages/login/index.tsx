import { Link } from "react-router-dom"
import { Container } from "./login.styles"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { useAuth } from "../../Providers/Auth"

interface formDataLogin {
    email: String,
    password: String
}



const Login = () => {

    const { reqLogin } = useAuth()

    const schemaLogin = yup.object().shape({
        email: yup.string().email('Email inválido').required('*Campo obrigatório'),
        password: yup.string().required('*Campo obrigatório')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaLogin)
    })


    const onSubmitLogin = async(data: formDataLogin) => {
        reqLogin(data)
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <h2>Entre em sua conta</h2>

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    placeholder="email@exemplo.com"
                    {...register('email')}
                />

                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="*****"
                    {...register('password')}
                />

                <button type="submit">Entrar</button>
                <p>Não possui conta? <span><Link to="/signup">Cadastre-se</Link></span></p>
            </form>
        </Container>
    )
}


export default Login