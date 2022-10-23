import React from "react";
import "./Curriculo.css";
import Avatar from "../.././Components/Avatar/Avatar";
import Contact from "../.././Components/Contact/Contact";
import Footer from "../.././Components/Footer/Footer";
import History from "../.././Components/History/History";
import Hobby from "../.././Components/Hobby/Hobby";
import Period from "../.././Components/Period/Period";
import Profile from "../.././Components/Profile/Profile";
import Skill from "../.././Components/Skill/Skill";
const Curriculo = ({
  photo,
  nome,
  profissao,
  profile,
  contact,
  facebook,
  instagram,
  gitHub,
  listHobbies,
  jobs,
  graduation,
  rust,
  js,
  react,
  Html5,
  Python,
  Css3,
  java,
}) => {
  return (
    <>
      <div className="BodyApp">
        <div className="BodyBlueArea">
          <Avatar photo={photo} nome={nome} profissao={profissao} />
          <Profile profile={profile} />
          <Contact
            contact={contact}
            facebook={facebook}
            instagram={instagram}
            gitHub={gitHub}
          />
          <Hobby listHobbies={listHobbies} />
        </div>
        <div className="BodyWhiteArea">
          <div style={{ marginTop: "50px", width: "80%", marginLeft: "20px" }}>
            <History icone={"SuitCase"} campo={"Empregos"} />
            <div>
              <ul style={{ marginLeft: "30px" }}>
                {jobs?.map((item, index) => (
                  <li key={index}>
                    <Period
                      Date={item.ficha}
                      Local={item.empresa}
                      Work={item.cargo}
                      Description={item.descricao}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <History icone={"Hat"} campo={"Formação"} />
            <div>
              <ul style={{ marginLeft: "30px" }}>
                {graduation?.map((item, index) => (
                  <li key={index}>
                    <Period
                      Date={item.ano}
                      Local={item.instituicao}
                      Work={item.curso}
                      Description={item.obs}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <History icone={"Book"} campo={"Habilidades"} />
            <Skill
              rust={rust}
              js={js}
              react={react}
              Html5={Html5}
              Python={Python}
              Css3={Css3}
              java={java}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Curriculo;
