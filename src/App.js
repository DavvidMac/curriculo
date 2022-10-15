import "./App.css";
import Avatar from "./Components/Avatar/Avatar";
import History from "./Components/History/History";
import Period from "./Components/Period/Period";
import WebDeveloper from "./Components/WebDeveloper/WebDeveloper";

function App() {
  return (
    <div className="BodyApp">
      <div className="BodyBlueArea">
        <Avatar />
        <WebDeveloper />
      </div>
      <div className="BodyWhiteArea">
        <div >
          <History icone={"icone de Mala"} campo={"Empregos"} />
          <div>
            <ul>
              <li>
                <Period
                  Date={"2016-2022"}
                  Local={"Prefeitura"}
                  Work={"Vigia"}
                  Description={
                    "Atuei durante este periodo com exito em minhas atividades"
                  }
                />
              </li>
            </ul>
          </div>
          <History icone={"icone de Livros"} campo={"Formação"} />
          <div>
            <ul>
              <li>
                <Period
                  Date={"2016-2013"}
                  Local={"Escola Estatual Manoel Machado Franco"}
                  Work={"Ensino Médio"}
                  Description={""}
                />
              </li>
              <li>
                <Period
                  Date={"2015-2016"}
                  Local={"Escola Tecnica Vale do Aço"}
                  Work={"Tecnico em informática"}
                  Description={""}
                />
              </li>
            </ul>
          </div>
          <History icone={"icone de Estrela"} campo={"Habilidades"} />
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
