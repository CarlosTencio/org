import React from "react";
import './InputText.css';


const InputText = (props) => {
    //destructuring
const {type ="text"}=props;

    const handleChange = (e) => {
        props.updateValue(e.target.value);
    }
    return (
        <div className={`input input-${type}`}>
            <label>{props.titulo}</label>
            <input 
                placeholder={props.placeholder}
                required={props.required}
                value={props.valor}
                onChange={handleChange} 
                type={type}/>
        </div>

    );

}

export default InputText;