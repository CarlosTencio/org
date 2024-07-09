import './List.css';
const ListOptions = () => {
//metodo map ->arreglo.map( (teams,index)=>{
//return <option></option>
//}) 

    const teams = ["Programación",
        "Front end", 
        "Data Science", 
        "Devops",
        "UX y diseño",
         "Móvil", 
         "Innovación y gestión"];

  return (
        <div className="list-option">
            <label>Equipos</label>
            <select name="" id="">
                {teams.map((team, index) => {
                    return <option key={index}>{team}</option>
                })}
            </select>
        </div>
    );
}

export default ListOptions;