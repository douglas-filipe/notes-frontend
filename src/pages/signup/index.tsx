import { Link } from "react-router-dom"
import { Container } from "./signup.styles"

const Signup = () => {
    return (
        <Container>
            <form>
                <h2>Crie sua conta</h2>
                <label htmlFor="username">Nome:</label>
                <input type="text" id="username" placeholder="fulano" />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" placeholder="email@exemplo.com" />
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" placeholder="*****" />
                <button type="submit">Entrar</button>
                <p>Já possui conta? <span><Link to="/login">Entre</Link></span></p>
            </form>
        </Container>
    )
}

export default Signup