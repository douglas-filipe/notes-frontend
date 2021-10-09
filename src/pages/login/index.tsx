import { Link } from "react-router-dom"
import { Container } from "./login.styles"

const Login = () => {

    return (
        <Container>
            <form>
                <h2>Entre em sua conta</h2>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" placeholder="email@exemplo.com" />
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" placeholder="*****" />
                <button type="submit">Entrar</button>
                <p>Não possui conta? <span><Link to="/signup">Cadastre-se</Link></span></p>
            </form>
        </Container>
    )
}


export default Login