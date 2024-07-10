import React from "react";
import './InputText.css';


const InputText = (props) => {

    const handleChange = (e) => {
        props.updateValue(e.target.value);
    }
    return (
        <div className="input-Text">
            <label>{props.titulo}</label>
            <input type="text"
                placeholder={props.placeholder}
                required={props.required}
                value={props.valor}
                onChange={handleChange} />
        </div>

    );

}

export default InputText;