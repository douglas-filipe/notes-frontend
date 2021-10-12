import { Container, Header } from "./noteEdit.styles"
import { useParams } from "react-router-dom"
import api from "../../services/api"
import { FormEvent, ReactNode, useEffect, useState } from "react"
import { useAuth } from "../../Providers/Auth"

interface iNote {
    desc: String,
    title: String,
    _id: String,
    createdAt: String
}

export const NoteEdit = () => {

    const { userData: { token, user: { _id: userId } } } = useAuth()
    const [current, setCurrent] = useState<string>('')

    useEffect(() => {
        reqNoteOne()
    }, [])

    /*
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement> , valor: string) => {
        setCurrent(e.target.value)
        console.log(valor)
    }*/

    const { id } = useParams<{ id: string }>()

    const update = () => {
        api.put(`/notes/${id}`, {
            title: current
        }, { headers: { 'token': `${token}` } })
    }


    const reqNoteOne = async () => {
        const response = await api.get<iNote>(`/notes/${id}`,
            { headers: { 'token': `${token}` } }
        )
        setCurrent(response.data.title as string)
    }

    
    return (
        <Container>
            <Header onChange={update}>

                <input onChange={(e) => setCurrent(e.target.value)} type="text" value={current} />

            </Header>
            
            <p onClick={update}>Save</p>

        </Container>
    )
}