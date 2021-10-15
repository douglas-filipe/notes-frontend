import { Container, Header, Icons, NoteEditSection, Save } from "./noteEdit.styles"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAuth } from "../../Providers/Auth"
import { BiArrowBack } from 'react-icons/bi'
import { RiEdit2Fill } from 'react-icons/ri'
import { MdMoreVert } from "react-icons/md"
import { IoMdSave } from 'react-icons/io'
import api from "../../services/api"

interface iNote {
    desc: String,
    title: String,
    _id: String,
    createdAt: String
}

export const NoteEdit = () => {

    const { userData: { token, user: { _id: userId } } } = useAuth()

    const [title, setTitle] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [previousTitle, setPreviousTitle] = useState<string>('')
    const [previousDesc, setPreviousDesc] = useState<string>('')

    useEffect(() => {
        reqNoteOne()
    }, [])


    const { id } = useParams<{ id: string }>()

    const update = () => {
        api.put(`/notes/${id}`, {
            title: title,
            desc: desc
        }, { headers: { 'token': `${token}` } })
        reqNoteOne()
    }


    const reqNoteOne = async () => {
        const response = await api.get<iNote>(`/notes/${id}`,
            { headers: { 'token': `${token}` } }
        )
        
        setTitle(response.data.title as string)
        setDesc(response.data.desc as string)
        setPreviousTitle(response.data.title as string)
        setPreviousDesc(response.data.desc as string)

    }


    return (
        <Container>
            <Header>
                <Link to="/">
                    <BiArrowBack className="Back" />
                </Link>
                <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} />
                <Icons>
                    <RiEdit2Fill className="Edit" />
                    <MdMoreVert className="More" />
                </Icons>
            </Header>

            <NoteEditSection>

                <textarea value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>

            </NoteEditSection>
            
            

                {title === previousTitle && desc === previousDesc ?
                
                <Save className="Hidden">

                </Save>
                :

                <Save>
                    <IoMdSave onClick={update}/>
                </Save>
                
                }

            

        </Container>
    )
}