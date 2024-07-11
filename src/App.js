import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Form from './components/Form/Form.jsx';
import MyOrg from './components/MyOrg/MyOrg.jsx';
import Team from './components/Team/Team.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  const [showForm, updateShow] = useState(true);
const [collaborators, updateCollaborators] = useState([]);
  //ternario para mostrar u ocultar el formulario= condiciones ? si es verdadero : si es falso
  // condicion && seMuestra


  const changeDisplay = () => {
    updateShow(!showForm);
  }

  const addCollaborator = (collaborator) => {
    console.log("nuevo",collaborator);
    //spread operator para agregar un nuevo colaborador al array, es una copia del array original
    updateCollaborators([...collaborators,collaborator]);

  }

  //equipos
  const teams = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front end",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ];

  return (
    <div>
      <Header />
      {/* {showForm ? <Form /> : <></>} */}
      {showForm && <Form
       teams={teams.map((equipo)=>equipo.titulo)}
       addCollaborator={addCollaborator}
       />}


      <MyOrg changeDisplay={changeDisplay} />
      {
        teams.map((equipo) => <Team 
         datos={equipo}
         key={equipo.titulo}
         collaborators={collaborators.filter(collaborator=>collaborator.team===equipo.titulo)}/>)
      }

<Footer/>

    </div>
  );
}

export default App;
