import { useAuth } from "../../Providers/Auth"
import { Container, Search, Main, Notes } from "./dashboard.styles"
import api from "../../services/api"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { NavLink } from "react-router-dom"
import { BiSearchAlt } from 'react-icons/bi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineMail, AiOutlinePlusCircle } from 'react-icons/ai'
import { FaPlusCircle } from 'react-icons/fa'

interface INotes {
    createdAt: String,
    desc: String,
    title: String,
    _id: String
}

interface iLocalStorage{
    token: String,
    user: {
        _id: String
    }
}

export const Dashboard = () => {

    const history = useHistory()


    const userData:iLocalStorage = JSON.parse(localStorage.getItem("@notes/token") || "{}")
    const {token, user: {_id: userId}} = userData

    const [notes, setNotes] = useState<INotes[]>([] as INotes[])
    const [oneUser, setOneUser] = useState<INotes[]>([] as INotes[])


    useEffect(() => {
        reqNotes()
    }, [token])

    const reqNotes = async () => {
        const response = await api.get(`/notes`,
            { headers: { 'token': `${token}` } }
        )
        setNotes(response.data)
    }

    const reqNewNote = async () => {
        const response = await api.post("/notes",
            { title: "Título", desc: "Nota", author: userId },
            { headers: { 'token': `${token}` } })
        const converting = await (JSON.stringify(response.data))
        const descomprimindo = await JSON.parse(converting)
        await history.push(`/note/${descomprimindo['_id']}`)
        reqNotes()
    }

    const logout = async () => {
        await localStorage.clear()
        history.push("/login")
    }


    const { id } = useParams<{ id: string }>()


    return (
        <Main>
            <Container>
                <Search>
                    <div className="Input">
                        <BiSearchAlt />
                        <input type="text" placeholder="Pesquise aqui" />
                    </div>
                    <HiOutlineMenuAlt3 className="Menu" />
                </Search>

                <Notes>
                    {notes.map(n => {
                        return <NavLink to={{ pathname: `/note/${n._id}` }} activeClassName="selected">
                            <p>{n.desc.substring(0, 20)}...</p>
                            <p>{n.createdAt}</p>
                        </NavLink>
                    })}
                </Notes>

                <FaPlusCircle className="Plus" onClick={reqNewNote}></FaPlusCircle>

            </Container>
        </Main>
    )
}

/**
 * 
 * 
                <div onClick={logout}>Sair</div>

 */