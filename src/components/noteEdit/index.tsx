import {
  Container,
  Header,
  Icons,
  NoteEditSection,
  Save,
} from "./noteEdit.styles";
import { useHistory } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../Providers/Auth";
import { IoMdSave } from "react-icons/io";
import api from "../../services/api";
import { AiFillDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import { Loading } from "../loading";

interface iNote {
  desc: String;
  title: String;
  _id: String;
  createdAt: String;
}

interface NoteProps {
  id: string;
  reqNotes: () => void;
}

export const NoteEdit = ({ id, reqNotes }: NoteProps) => {
  const {
    userData: {
      token,
      user: { _id: userId },
    },
  } = useAuth();

  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [previousTitle, setPreviousTitle] = useState<string>("");
  const [previousDesc, setPreviousDesc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    const loadNote = async () => {
      await reqNoteOne();
      setLoading(true);
    };
    loadNote();
  }, [id]);

  const update = async () => {
    try {
      await api.put(
        `/notes/${id}`,
        {
          title: title,
          desc: desc,
        },
        { headers: { token: `${token}` } }
      );
      await reqNoteOne();
      reqNotes();
    } catch {
      await localStorage.removeItem("@notes/token");
      window.location.reload();
    }
  };

  const reqDeleteNote = async () => {
    try {
      await api.delete(`/notes/${id}`, { headers: { token: `${token}` } });
      await history.push("/");
      toast.success("Nota deletada");
      reqNotes();
    } catch {
      await localStorage.removeItem("@notes/token");
      window.location.reload();
    }
  };

  const reqNoteOne = async () => {
    try {
      const response = await api.get<iNote>(`/notes/${id}`, {
        headers: { token: `${token}` },
      });

      setTitle(response.data.title as string);
      setDesc(response.data.desc as string);
      setPreviousTitle(response.data.title as string);
      setPreviousDesc(response.data.desc as string);
    } catch {
      await localStorage.removeItem("@notes/token");
      window.location.reload();
    }
  };

  return (
    <Container>
      {loading ? (
        <>
          <Header>
            <input
              placeholder="Defina o título"
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              value={title}
            />
            <Icons>
              <AiFillDelete className="Delete" onClick={reqDeleteNote} />
            </Icons>
          </Header>

          <NoteEditSection>
            <textarea
              placeholder="Digite sua nota aqui"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </NoteEditSection>

          {title === previousTitle && desc === previousDesc ? (
            <Save className="Hidden"></Save>
          ) : (
            <Save>
              <IoMdSave onClick={update} />
            </Save>
          )}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};
