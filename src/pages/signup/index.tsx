import { Link } from "react-router-dom"
import { Container } from "./signup.styles"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { useAuth } from "../../Providers/Auth"

interface formData {
    username: String,
    email: String,
    password: String
}

const Signup = () => {

    const {reqRegister} = useAuth()

    const schemaSignup = yup.object().shape({
        email: yup.string().email('Email inválido').required('*Campo obrigatório'),
        username: yup.string().required('*Campo obridatório'),
        password: yup.string().required('*Campo obrigatório')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaSignup)
    })


    const onSubmitRegister = (data: formData) => {
        reqRegister(data)
    }


    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmitRegister)}>
                <h2>Crie sua conta</h2>

                <label htmlFor="username">Nome:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="fulano"
                    {...register('username')}
                />

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

                <button type="submit">Enviar</button>

                <p>Já possui conta? <span><Link to="/login">Entre</Link></span></p>
            </form>
        </Container>
    )
}

export default Signup