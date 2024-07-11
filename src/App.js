import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Form from './components/Form/Form.jsx';
import MyOrg from './components/MyOrg/MyOrg.jsx';
import Team from './components/Team/Team.jsx';
import Footer from './components/Footer/Footer.jsx';
import { v4 as uuid } from "uuid";

function App() {

  const [showForm, updateShow] = useState(false);
  const [collaborators, updateCollaborators] = useState([{
    id: uuid(),
    team: "Front End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    position: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    team: "Programación",
    photo: "https://github.com/genesysaluralatam.png",
    name: "Genesys Rondón",
    position: "Desarrolladora de software e instructora",
    fav: true
  },
  {
    id: uuid(),
    team: "UX y Diseño",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    position: "Instructora en Alura Latam"
    , fav: true
  },
  {
    id: uuid(),
    team: "Programación",
    photo: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    position: "Head de Alura e Instructor"
    , fav: false
  },
  {
    id: uuid(),
    team: "Innovación y Gestión",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    position: "Dev FullStack",
    fav: false
  }
  ]);

  const [teams, updateTeams] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front end",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }

  ]);
  //ternario para mostrar u ocultar el formulario= condiciones ? si es verdadero : si es falso
  // condicion && seMuestra


  const changeDisplay = () => {
    updateShow(!showForm);
  }

  const addCollaborator = (collaborator) => {
    console.log("nuevo", collaborator);
    //spread operator para agregar un nuevo colaborador al array, es una copia del array original
    updateCollaborators([...collaborators, collaborator]);

  }

  const deleteCollaborator = (id) => {
    const newCollaborators = collaborators.filter((colaborador) => colaborador.id !== id);
    updateCollaborators(newCollaborators);
  }
  //actualizar color de equipo
  const updateColor = (color, id) => {
    const updatedTeams = teams.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    })
    updateTeams(updatedTeams);
  }
  //equipos
  //crear equipo

  const addTeam = (newTeam) => {
    console.log("nuevo", newTeam);
    updateTeams([...teams, { ...newTeam, id: uuid() }]);
  }
  //like
  const likeCollaborator = (id) => {
    const updatedCollaborators = collaborators.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })
    updateCollaborators(updatedCollaborators);
  }


  return (
    <div>
      <Header />
      {/* {showForm ? <Form /> : <></>} */}
      {showForm && <Form
        teams={teams.map((equipo) => equipo.titulo)}
        addCollaborator={addCollaborator}
        addTeam={addTeam}
      />}


      <MyOrg changeDisplay={changeDisplay} />
      {
        teams.map((equipo) => <Team
          datos={equipo}
          key={equipo.id}
          collaborators={collaborators.filter(collaborator => collaborator.team === equipo.titulo)}
          deleteCollaborator={deleteCollaborator}
          updateColor={updateColor}
          likeCollaborator={likeCollaborator}

        />)
      }

      <Footer />

    </div>
  );
}

export default App;
