import React from 'react';
import './Form.css';
import InputText from '../InputText/InputText.jsx';
import ListOptions from '../List/List.jsx';
import Bottom from '../Bottom/Bottom.jsx';
import { useState } from 'react';


const Form = (props) => {

const [name, setName] = useState("");
const [position, setPosition] = useState("");
const [photo, setPhoto] = useState("");

const [team,updateTeam] = useState("");//Array de objetos que contiene la información de los colaboradores

const { addCollaborator} = props;

    const handleSend= (event) => {
        event.preventDefault();//Evita que se recargue la página
        let sendData = {name: name, position: position, photo: photo,team: team};
        props.addCollaborator(sendData);
    }

    return (
        <section className='form'>
            <form onSubmit={handleSend}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <InputText titulo="Nombre" placeholder="Nombre"  required valor={name} updateValue={setName}/>
                <InputText titulo="Puesto" placeholder="Puesto"  required valor={position} updateValue={setPosition}/>
                <InputText titulo="Foto" placeholder="Enlace de foto" required valor={photo} updateValue={setPhoto}/>
                { /* //si no mando required es porque no es obligatorio llenarlo o si lo pongo ={false} */}
                <ListOptions 
                valor={team} 
                updateTeam={updateTeam} 
                teams={props.teams}/>
                <Bottom text="Crear" />

            </form>
        </section>

    );

}

export default Form;