import { Switch, Route, Redirect } from "react-router-dom"
import { NoteEdit } from "../components/noteEdit"
import { Dashboard } from "../pages/dashboard"
import Login from "../pages/login"
import Signup from "../pages/signup"
import { useAuth } from "../Providers/Auth"

interface iLocalStorage{
    token: String
}

export const Routes = () =>{
    const {userData} = useAuth()
    const {token} = userData

    return(
        <Switch>

            <Route path="/" exact>
                {token === undefined ? <Redirect to="/login"/> : <Dashboard/>}
            </Route>

            <Route path="/note/:id" exact>
                {token === undefined ? <Redirect to="/login"/> : <Dashboard/>}
            </Route>

            <Route path="/login" exact>
                {token === undefined ? <Login/> : <Redirect to="/"/>}
            </Route>

            <Route path="/signup" exact>
                {token === undefined ? <Signup/> : <Redirect to="/"/>}
            </Route>

        </Switch>
    )
}