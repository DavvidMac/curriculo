import "./App.css";
import Avatar from "./Components/Avatar/Avatar";
import Contact from "./Components/Contact/Contact";
import History from "./Components/History/History";
import Hobby from "./Components/Hobby/Hobby";
import Period from "./Components/Period/Period";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="BodyApp">
      <div className="BodyBlueArea">
        <Avatar />
        <Profile />
        <Contact/>
        <Hobby/>
      </div>
      <div className="BodyWhiteArea">
        <div style={{marginTop:"30px",width:"80%"}}>
          <History  icone={"SuitCase"} campo={"Empregos"}/>
          <div>
            <ul>
              <li>
                <Period
                  Date={"2016-2022"}
                  Local={"Prefeitura Municipal de Ipaba"}
                  Work={"Vigia"}
                  Description={
                    "Atuei durante este periodo com exito em minhas atividades"
                  }
                />
              </li>
            </ul>
          </div>
          <History icone={"Hat"}  campo={"Formação"} />
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
          <History icone={"Book"}  campo={"Habilidades"} />
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
