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
 
  React.useEffect(()=>{
    if(window.localStorage.getItem('nome')!==null){
      setNome(window.localStorage.getItem('nome'))
    }
    if(window.localStorage.getItem('profissao')!==null){
      setProfissao(window.localStorage.getItem('profissao'))
    }
    if(window.localStorage.getItem('profile')!==null){
      setProfile(window.localStorage.getItem('profile'))
    }
    if(window.localStorage.getItem('contact')!==null){
      setContact(window.localStorage.getItem('contact'))
    }
    if(window.localStorage.getItem('facebook')!==null){
      setFacebook(window.localStorage.getItem('facebook'))
    }
    if(window.localStorage.getItem('instagram')!==null){
      setInstagram(window.localStorage.getItem('instagram'))
    }
    if(window.localStorage.getItem('gitHub')!==null){
      setGitHub(window.localStorage.getItem('gitHub'))
    }
    if(window.localStorage.getItem('listHobbies')!==null){
      setListHobbies(JSON.parse(window.localStorage.getItem('listHobbies')))
    }
    if(window.localStorage.getItem('jobs')!==null){
      setJobs(JSON.parse(window.localStorage.getItem('jobs')))
    }
    if(window.localStorage.getItem('graduation')!==null){
      setGraduation(JSON.parse((window.localStorage.getItem('graduation'))))
    }
   },[])
  
  
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
