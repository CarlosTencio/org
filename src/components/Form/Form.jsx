import React, { useState } from 'react';
import './Form.css';
import InputText from '../InputText/InputText.jsx';
import ListOptions from '../List/List.jsx';
import Bottom from '../Bottom/Bottom.jsx';

const Form = ({ addCollaborator, addTeam, teams }) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [photo, setPhoto] = useState("");
    const [team, updateTeam] = useState("");

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");

    const handleSend = (event) => {
        event.preventDefault();
        const sendData = { name, position, photo, team };
        addCollaborator(sendData);
    };

    const handleNewTeam = (event) => {
        event.preventDefault();
        addTeam({ titulo: title, colorPrimario: color });
    };

    return (
        <section className='form'>
            <form onSubmit={handleSend}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <InputText titulo="Nombre" placeholder="Nombre" required valor={name} updateValue={setName} />
                <InputText titulo="Puesto" placeholder="Puesto" required valor={position} updateValue={setPosition} />
                <InputText titulo="Foto" placeholder="Enlace de foto" required valor={photo} updateValue={setPhoto} />
                <ListOptions valor={team} updateTeam={updateTeam} teams={teams} />
                <Bottom text="Crear" />
            </form>

            <form onSubmit={handleNewTeam}>
                <h2>Rellena el formulario para crear el equipo</h2>
                <InputText titulo="Titulo" placeholder="Titulo" required valor={title} updateValue={setTitle} />
                <InputText titulo="Color" placeholder="Color" required valor={color} updateValue={setColor} type="color" />
                <Bottom text="Crear" equipo />
            </form>
        </section>
    );
};

export default Form;
