import { Container, Search, Main, Notes } from "./dashboard.styles";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { BiExit, BiSearchAlt } from "react-icons/bi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaPlusCircle } from "react-icons/fa";
import { NoteEdit } from "../../components/noteEdit";
import { AiFillCloseCircle } from "react-icons/ai";
import { Loading } from "../../components/loading";
import moment from "moment";

interface INotes {
  createdAt: String;
  desc: String;
  title: String;
  _id: String;
}

interface iLocalStorage {
  token: String;
  user: {
    _id: String;
  };
}

export const Dashboard = () => {
  const history = useHistory();

  const userData: iLocalStorage = JSON.parse(
    localStorage.getItem("@notes/token") || "{}"
  );
  const {
    token,
    user: { _id: userId },
  } = userData;

  const [notes, setNotes] = useState<INotes[]>([] as INotes[]);
  const [notesSearch, setSearchNotes] = useState<INotes[]>([] as INotes[]);
  const [noteSearchAlone, setNoteSearchAlone] = useState<string>("");
  const [visible, setVisible] = useState<Boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      await reqNotes();
      setLoading(true);
    };
    load();
  }, [token]);

  const reqNotes = async () => {
    try {
      const response = await api.get(`/notes`, {
        headers: { token: `${token}` },
      });
      await setNotes(response.data);
      setVisible(false);
    } catch {
      await localStorage.removeItem("@notes/token");
      window.location.reload()
    }
  };

  const reqSearchNotes = async () => {
    const response = await api.get(
      `/notes/search`,
      { params: { query: noteSearchAlone } }
      //{ headers: { 'token': `${token}` } },
    );
    setSearchNotes(response.data);
  };

  const reqNewNote = async () => {
    try {
      const response = await api.post(
        "/notes",
        { title: "Título", desc: "Nota", author: userId },
        { headers: { token: `${token}` } }
      );
      const converting = await JSON.stringify(response.data);
      const descomprimindo = await JSON.parse(converting);
      await reqNotes();
      await history.push(`/note/${descomprimindo["_id"]}`);
    } catch {
      await localStorage.removeItem("@notes/token");
      window.location.reload()
    }
  };

  const logout = async () => {
    await localStorage.removeItem("@notes/token");
    window.location.reload();
  };

  const { id } = useParams<{ id: string }>();

  const formatData = (date: String) => {
    const data = moment(date as string).format("DD/MM/YYYY");
    return data;
  };

  return (
    <Main>
      {loading ? (
        <>
          <header className="Header">
            <HiOutlineMenuAlt3
              className="Menu"
              onClick={() => setVisible(true)}
            />
            <BiExit onClick={logout} />
          </header>
          <Container visible={visible}>
            <Notes visible={visible}>
              <AiFillCloseCircle
                className="Close"
                onClick={() => setVisible(false)}
              />
              <h1>Suas notas</h1>
              <h3 onClick={reqNewNote}>
                <FaPlusCircle />
                <p>Adicionar</p>
              </h3>

              {notes.map((n) => {
                return (
                  <NavLink
                    onClick={() => setVisible(false)}
                    to={{ pathname: `/note/${n._id}` }}
                    activeClassName="selected"
                  >
                    <p>{n.title.substring(0, 20)}...</p>
                    <p>{formatData(n.createdAt)}</p>
                  </NavLink>
                );
              })}
            </Notes>
          </Container>

          {id === undefined ? (
            <h1 className="SelectNote">
              Selecione uma nota ou adicione uma ao lado
            </h1>
          ) : (
            <NoteEdit id={id} reqNotes={reqNotes} />
          )}
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </Main>
  );
};

/** Ainda vou continuar
 * <Search onChange={reqSearchNotes}>
                        <div className="Input">
                            <BiSearchAlt />
                            <input type="text" placeholder="Pesquise aqui" value={noteSearchAlone} onChange={(e) => setNoteSearchAlone(e.target.value)}/>
                        </div>
                    </Search>
 * 
 */
