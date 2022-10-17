import React from "react";
import "./Formulario.css";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  setGraduation
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
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <label className="labelInputimg">
        {photo ? (
          <img
            width={"150px"}
            alt="Avatar"
            className=""
            src={URL.createObjectURL(photo)}
          />
        ) : (
          <FaUser />
        )}
        <input
          name="Picture"
          className="CadastroInputFile"
          type="file"
          placeholder="Photo"
          onChange={(e) => setPhoto(e.target.files[0])}
        ></input>
      </label>
      <label>
        Nome:
        <input
          className=""
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></input>
      </label>
      <label>
        Profissão:
        <input
          className=""
          type="text"
          placeholder="Profissão"
          value={profissao}
          onChange={(e) => setProfissao(e.target.value)}
        ></input>
      </label>
      <label>
        Perfil:
        <textarea
          className=""
          type="text"
          placeholder="Descrição"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        ></textarea>
      </label>
      <label>
        Telefone
        <input
          className=""
          type="text"
          placeholder="Telefone"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        ></input>
      </label>
      <label>
        Facebook
        <input
          className=""
          type="text"
          placeholder="Facebook"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        ></input>
      </label>
      <label>
        Instagram
        <input
          className=""
          type="text"
          placeholder="Instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        ></input>
      </label>
      <label>
        GitHub
        <input
          className=""
          type="text"
          placeholder="GitHub"
          value={gitHub}
          onChange={(e) => setGitHub(e.target.value)}
        ></input>
      </label>
      <label>
        Hobbie
        <input
          className=""
          type="text"
          placeholder="Hobby"
          value={hobbie}
          onChange={(e) => setHobbie(e.target.value)}
        ></input>
        <button onClick={handleAddHobies}>add</button>
      </label>
      <ul>
        {listHobbies?.map((hob, index) => (
          <li key={index}>{hob}</li>
        ))}
      </ul>
      <label>
        Ficha
        <input
          className=""
          type="text"
          placeholder="Anoentrada-anoSaida"
          value={ficha}
          onChange={(e) => setFicha(e.target.value)}
        ></input>
      </label>
      <label>
        Empresa
        <input
          className=""
          type="text"
          placeholder="Empresa"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
        ></input>
      </label>
      <label>
        Cargo
        <input
          className=""
          type="text"
          placeholder="Cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        ></input>
      </label>
      <label>
        Descrição
        <input
          className=""
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></input>
        <button onClick={handleAddJob}>add</button>
      </label>
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
      <label>
        Formação
        <input
          className=""
          type="text"
          placeholder="Formação"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        ></input>
      </label>
      <label>
        Instituição
        <input
          className=""
          type="text"
          placeholder="Instituição"
          value={instituicao}
          onChange={(e) => setInstituicao(e.target.value)}
        ></input>
      </label>
      <label>
        Curso
        <input
          className=""
          type="text"
          placeholder="Curso"
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
        ></input>
      </label>
      <label>
        Obs
        <input
          className=""
          type="text"
          placeholder="Obs"
          value={obs}
          onChange={(e) => setObs(e.target.value)}
        ></input>
        <button onClick={handleAddGraduation}>add</button>
      </label>
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
      <Link to="/Curriculo">Add</Link>
    </div>
  );
};

export default Formulario;
