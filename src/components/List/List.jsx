import './List.css';
const ListOptions = (props) => {
    //metodo map ->arreglo.map( (teams,index)=>{
    //return <option></option>
    //}) 


    const manejarCambio = (e) => {
        props.updateTeam(e.target.value);
    }

    return (
        <div className="list-option">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {props.teams.map((team, index) => {
                    return <option key={index} value={team}>{team}</option>
                })}
            </select>
        </div>
    );
}

export default ListOptions;