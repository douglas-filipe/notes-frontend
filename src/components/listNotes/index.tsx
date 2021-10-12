import { Container } from "./listNotes.styles"
import { NavLink } from 'react-router-dom'
import { NoteEdit } from "../noteEdit"
import { useState } from "react"

interface INotes {
    notes: {
        createdAt: String,
        desc: String,
        title: String,
        _id: String
    }
}
//const {id} = useParams<{id: string}>()

export const ListNotes = ({ notes }: INotes) => {
    const [idNote, setIdNote] = useState<String>('')
    const { desc, title, _id } = notes

    const handleClick = (value: String, _id: String) => {
        setIdNote(_id)
    }


    return (
        <>
            <div>

                <Container onClick={() => handleClick(desc, _id)}>
                    <NavLink to={{ pathname: `/note/${_id}` }} activeClassName="selected">
                        {title}
                    </NavLink>
                </Container>
            </div>
                <NoteEdit/>
        </>
    )
}