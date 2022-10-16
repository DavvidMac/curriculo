import "./App.css";
import Avatar from "./Components/Avatar/Avatar";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import History from "./Components/History/History";
import Hobby from "./Components/Hobby/Hobby";
import Period from "./Components/Period/Period";
import Profile from "./Components/Profile/Profile";
import Skill from "./Components/Skill/Skill";

function App() {
  return (
    <>
      <div className="BodyApp">
        <div className="BodyBlueArea">
          <Avatar />
          <Profile />
          <Contact />
          <Hobby />
        </div>
        <div className="BodyWhiteArea">
          <div style={{ marginTop: "50px", width: "80%",marginLeft:"20px" }}>
            <History icone={"SuitCase"} campo={"Empregos"} />
            <div>
              <ul style={{marginLeft:'30px'}}>
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
            <History icone={"Hat"} campo={"Formação"} />
            <div>
              <ul style={{marginLeft:'30px'}}>
                <li>
                  <Period
                    Date={"2010-2013"}
                    Local={"Escola Estatual Manoel Machado Franco"}
                    Work={"Ensino Médio"}
                    Description={""}
                  />
                </li>
                <li>
                  <Period
                    Date={"2014-2016"}
                    Local={"Escola Tecnica Vale do Aço"}
                    Work={"Tecnico em informática"}
                    Description={""}
                  />
                </li>
              </ul>
            </div>
            <History icone={"Book"} campo={"Habilidades"} />
            <Skill />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
