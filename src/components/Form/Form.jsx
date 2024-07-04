import React from 'react';
import './Form.css';
import InputText from '../InputText/InputText.jsx';

const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <InputText />
                <InputText />
                <InputText />
            </form>
        </section>

    );

}

export default Form;