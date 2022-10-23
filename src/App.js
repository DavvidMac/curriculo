import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Curriculo from "./Pages/Curriculo/Curriculo";
import Formulario from "./Pages/Formulario/Formulario";

function App() {
  const [photo, setPhoto] = React.useState(null);
  const [nome, setNome] = React.useState("");
  const [profissao, setProfissao] = React.useState("");
  const [profile, setProfile] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [facebook, setFacebook] = React.useState("");
  const [instagram, setInstagram] = React.useState("");
  const [gitHub, setGitHub] = React.useState("");
  const [listHobbies, setListHobbies] = React.useState([]);
  const [jobs, setJobs] = React.useState([]);
  const [graduation, setGraduation] = React.useState([]);
  const [js, setJs] = React.useState(false);
  const [react, setReact] = React.useState(false);
  const [Html5, setHtml5] = React.useState(false);
  const [Python, setPython] = React.useState(false);
  const [Css3, setCss3] = React.useState(false);
  const [java, setJava] = React.useState(false);
  const [rust, setRust] = React.useState(false);

  React.useEffect(() => {
    if (window.localStorage.getItem("nome") !== null) {
      setNome(window.localStorage.getItem("nome"));
    }
    if (window.localStorage.getItem("profissao") !== null) {
      setProfissao(window.localStorage.getItem("profissao"));
    }
    if (window.localStorage.getItem("profile") !== null) {
      setProfile(window.localStorage.getItem("profile"));
    }
    if (window.localStorage.getItem("contact") !== null) {
      setContact(window.localStorage.getItem("contact"));
    }
    if (window.localStorage.getItem("facebook") !== null) {
      setFacebook(window.localStorage.getItem("facebook"));
    }
    if (window.localStorage.getItem("instagram") !== null) {
      setInstagram(window.localStorage.getItem("instagram"));
    }
    if (window.localStorage.getItem("gitHub") !== null) {
      setGitHub(window.localStorage.getItem("gitHub"));
    }
    if (window.localStorage.getItem("listHobbies") !== null) {
      setListHobbies(JSON.parse(window.localStorage.getItem("listHobbies")));
    }
    if (window.localStorage.getItem("jobs") !== null) {
      setJobs(JSON.parse(window.localStorage.getItem("jobs")));
    }
    if (window.localStorage.getItem("graduation") !== null) {
      setGraduation(JSON.parse(window.localStorage.getItem("graduation")));
    }
    if (window.localStorage.getItem("js") !== null) {
      setJs(JSON.parse(window.localStorage.getItem("js")));
    }
    if (window.localStorage.getItem("Html5") !== null) {
      setHtml5(JSON.parse(window.localStorage.getItem("Html5")));
    }
    if (window.localStorage.getItem("Css3") !== null) {
      setCss3(JSON.parse(window.localStorage.getItem("Css3")));
    }
  }, []);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Formulario
                photo={photo}
                setPhoto={setPhoto}
                nome={nome}
                setNome={setNome}
                profissao={profissao}
                setProfissao={setProfissao}
                profile={profile}
                setProfile={setProfile}
                contact={contact}
                setContact={setContact}
                facebook={facebook}
                setFacebook={setFacebook}
                instagram={instagram}
                setInstagram={setInstagram}
                gitHub={gitHub}
                setGitHub={setGitHub}
                listHobbies={listHobbies}
                setListHobbies={setListHobbies}
                jobs={jobs}
                setJobs={setJobs}
                graduation={graduation}
                setGraduation={setGraduation}
                rust={rust}
                setRust={setRust}
                js={js}
                setJs={setJs}
                react={react}
                setReact={setReact}
                Html5={Html5}
                setHtml5={setHtml5}
                Python={Python}
                setPython={setPython}
                Css3={Css3}
                setCss3={setCss3}
                java={java}
                setJava={setJava}
              />
            }
          ></Route>
          <Route
            path="/Curriculo"
            element={
              <Curriculo
                photo={photo}
                nome={nome}
                profissao={profissao}
                profile={profile}
                contact={contact}
                facebook={facebook}
                instagram={instagram}
                gitHub={gitHub}
                listHobbies={listHobbies}
                jobs={jobs}
                graduation={graduation}
                rust={rust}
                setRust={setRust}
                js={js}
                setJs={setJs}
                react={react}
                setReact={setReact}
                Html5={Html5}
                setHtml5={setHtml5}
                Python={Python}
                setPython={setPython}
                Css3={Css3}
                setCss3={setCss3}
                java={java}
                setJava={setJava}
              />
            }
          ></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
