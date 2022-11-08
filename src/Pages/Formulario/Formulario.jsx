import React from "react";
import "./Formulario.css";
import { Link } from "react-router-dom";
import Inputx from "../../Components/Inputx/Inputx";
import FormBox from "../../Components/FormBox/FormBox";
import InputImg from "../../Components/InputImg/InputImg";
import Ability from "../../Components/Abilities/Ability";

const Formulario = ({
  photo,
  setPhoto,
  nome,
  setNome,
  profissao,
  setProfissao,
  profile,
  setProfile,
  contact,
  setContact,
  facebook,
  setFacebook,
  instagram,
  setInstagram,
  gitHub,
  setGitHub,
  listHobbies,
  setListHobbies,
  jobs,
  setJobs,
  graduation,
  setGraduation,
  rust,
  setRust,
  js,
  setJs,
  react,
  setReact,
  Html5,
  setHtml5,
  Python,
  setPython,
  Css3,
  setCss3,
  java,
  setJava,
  Cpp,
  setCpp,
}) => {
  const [hobbie, setHobbie] = React.useState("");

  const [ficha, setFicha] = React.useState("");
  const [empresa, setEmpresa] = React.useState("");
  const [cargo, setCargo] = React.useState("");
  const [descricao, setDescricao] = React.useState("");

  const [ano, setAno] = React.useState("");
  const [instituicao, setInstituicao] = React.useState("");
  const [curso, setCurso] = React.useState("");
  const [obs, setObs] = React.useState("");

  function handleAddHobies() {
    setListHobbies([...listHobbies, hobbie]);
    setHobbie("");
  }
  function handleAddJob() {
    setJobs([...jobs, { ficha, empresa, cargo, descricao }]);
    setFicha("");
    setEmpresa("");
    setCargo("");
    setDescricao("");
  }
  function handleAddGraduation() {
    setGraduation([...graduation, { ano, instituicao, curso, obs }]);
    setAno("");
    setInstituicao("");
    setCurso("");
    setObs("");
  }
  function save() {
    window.localStorage.setItem("nome", nome);
    window.localStorage.setItem("profissao", profissao);
    window.localStorage.setItem("profile", profile);
    window.localStorage.setItem("contact", contact);
    window.localStorage.setItem("facebook", facebook);
    window.localStorage.setItem("instagram", instagram);
    window.localStorage.setItem("gitHub", gitHub);
    window.localStorage.setItem("listHobbies", JSON.stringify(listHobbies));
    window.localStorage.setItem("jobs", JSON.stringify(jobs));
    window.localStorage.setItem("graduation", JSON.stringify(graduation));
  }
  return (
    <div className="FormBody">
      <h1 className="FormTitulo">Formulario</h1>
      <FormBox titulo={"Usuário"}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <InputImg photo={photo} setPhoto={setPhoto} />
          <div
            style={{
              marginTop: "30px",
              marginLeft: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Inputx
              label={"Nome:"}
              pHolder={"Nome"}
              valor={nome}
              setValor={setNome}
            />
            <Inputx
              label={"Profissão:"}
              pHolder={"Profissão"}
              valor={profissao}
              setValor={setProfissao}
            />
          </div>
        </div>
      </FormBox>
      <FormBox titulo={"Perfil"}>
        <textarea
          className=""
          type="text"
          placeholder="Descrição"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        ></textarea>
      </FormBox>
      <FormBox titulo={"Social"}>
        <Inputx
          label={"Telefone:"}
          pHolder={"Telefone"}
          valor={contact}
          setValor={setContact}
        />
        <Inputx
          label={"Facebook:"}
          pHolder={"Facebook"}
          valor={facebook}
          setValor={setFacebook}
        />
        <Inputx
          label={"Instagram:"}
          pHolder={"Instagram"}
          valor={instagram}
          setValor={setInstagram}
        />
        <Inputx
          label={"GitHub:"}
          pHolder={"GitHub"}
          valor={gitHub}
          setValor={setGitHub}
        />
      </FormBox>
      <FormBox titulo={"Hobbies"}>
        <Inputx
          label={"Hobbie:"}
          pHolder={"Hobbie"}
          valor={hobbie}
          setValor={setHobbie}
        />
        <button className="Formulariobutton" onClick={handleAddHobies}>
          add
        </button>
        <ul>
          {listHobbies?.map((hob, index) => (
            <li key={index}>{hob}</li>
          ))}
        </ul>
      </FormBox>
      <FormBox titulo={"Ultimos empregos"}>
        <Inputx
          label={"Ficha:"}
          pHolder={"Ficha"}
          valor={ficha}
          setValor={setFicha}
        ></Inputx>
        <Inputx
          label={"Empresa:"}
          pHolder={"Empresa"}
          valor={empresa}
          setValor={setEmpresa}
        ></Inputx>
        <Inputx
          label={"Cargo:"}
          pHolder={"Cargo"}
          valor={cargo}
          setValor={setCargo}
        ></Inputx>
        <Inputx
          label={"Descrição:"}
          pHolder={"Descrição"}
          valor={descricao}
          setValor={setDescricao}
        />
        <button className="Formulariobutton" onClick={handleAddJob}>
          add
        </button>
        <ul>
          {jobs?.map((item, index) => (
            <li key={index}>
              <p>
                Data entrada e saida={item.ficha}
                Local={item.empresa}
                Work={item.cargo}
                Description={item.descricao}
              </p>
            </li>
          ))}
        </ul>
      </FormBox>
      <FormBox titulo={"Formação"}>
        <Inputx
          label={"Formação:"}
          pHolder={"Formação"}
          valor={ano}
          setValor={setAno}
        ></Inputx>
        <Inputx
          label={"Instituição:"}
          pHolder={"Instituição"}
          valor={instituicao}
          setValor={setInstituicao}
        ></Inputx>
        <Inputx
          label={"Curso:"}
          pHolder={"Curso"}
          valor={curso}
          setValor={setCurso}
        ></Inputx>
        <Inputx
          label={"Obs:"}
          pHolder={"Obs"}
          valor={obs}
          setValor={setObs}
        ></Inputx>
        <button className="Formulariobutton" onClick={handleAddGraduation}>
          add
        </button>
        <ul>
          {graduation?.map((item, index) => (
            <li key={index}>
              <p>
                Data entrada e saida={item.ano}
                Local={item.instituicao}
                Work={item.curso}
                Description={item.obs}
              </p>
            </li>
          ))}
        </ul>
      </FormBox>
      <FormBox>
        <Ability
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
          Cpp={Cpp}
          setCpp={setCpp}
        />
      </FormBox>
      <Link to="/Curriculo" onClick={save}>
        Add
      </Link>
    </div>
  );
};

//how convert file image to string64?

export default Formulario;
