import { Switch, Route } from "react-router-dom"
import Login from "../pages/login"
import Signup from "../pages/signup"

export const Routes = () =>{
    return(
        <Switch>

            <Route path="/" exact>
                <h1>Home</h1>
            </Route>

            <Route path="/login" exact>
                <Login/>
            </Route>

            <Route path="/signup" exact>
                <Signup/>
            </Route>

        </Switch>
    )
}