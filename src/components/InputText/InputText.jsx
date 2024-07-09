import React from "react";
import './InputText.css';

const InputText = (props) => {
    return (
        <div className="input-Text">
            <label>{props.titulo}</label>
            <input type="text" placeholder={props.placeholder} />
        </div>

    );

}

export default InputText;