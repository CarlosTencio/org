import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Form from './components/Form/Form.jsx';
import MyOrg from './components/MyOrg/MyOrg.jsx';
import Team from './components/Team/Team.jsx';


function App() {

  const [showForm, updateShow] = useState(true);

  //ternario para mostrar u ocultar el formulario= condiciones ? si es verdadero : si es falso
  // condicion && seMuestra


  const changeDisplay = () => {
    updateShow(!showForm);
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
      {showForm && <Form />}
      <MyOrg changeDisplay={changeDisplay} />
      <Team team="Programacion" />
      <Team team="Front end" />
      <Team team="Data Science" />
      <Team team="Devops" />
      <Team team="UX y Diseño" />
    </div>
  );
}

export default App;
