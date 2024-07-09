import React from 'react';
import './Form.css';
import InputText from '../InputText/InputText.jsx';
import ListOptions from '../List/List.jsx';
import Bottom from '../Bottom/Bottom.jsx';

const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <InputText titulo="Nombre" placeholder="Nombre" />
                <InputText titulo="Puesto" placeholder="Puesto"/>
                <InputText titulo="Foto" placeholder="Enlace de foto"/>
                <ListOptions/>
                <Bottom text="Crear"/>

            </form>
        </section>

    );

}

export default Form;