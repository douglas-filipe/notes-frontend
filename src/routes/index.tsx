import { Switch, Route } from "react-router-dom"
import { NoteEdit } from "../components/noteEdit"
import { Dashboard } from "../pages/dashboard"
import Login from "../pages/login"
import Signup from "../pages/signup"

export const Routes = () =>{
    return(
        <Switch>

            <Route path="/" exact>
                <Dashboard/>
            </Route>

            <Route path="/note/:id" exact>
               <NoteEdit/>
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