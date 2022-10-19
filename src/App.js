import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Curriculo from "./Pages/Curriculo/Curriculo";
import Formulario from "./Pages/Formulario/Formulario";

function App() {
  const [photo, setPhoto] = React.useState(null);
  const [nome, setNome] = React.useState('');
  const [profissao, setProfissao] = React.useState('');
  const [profile, setProfile] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [facebook, setFacebook] = React.useState('');
  const [instagram, setInstagram] = React.useState('');
  const [gitHub, setGitHub] = React.useState('');
  const [listHobbies,setListHobbies]=React.useState([])
  const [jobs, setJobs] = React.useState([]);
  const [graduation, setGraduation] = React.useState([]);

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
              />
            }
          ></Route>
          <Route path="/Curriculo" element={<Curriculo 
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
          />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
