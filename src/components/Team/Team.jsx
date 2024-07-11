import './Team.css';
import Colaborador from '../Colaborador/Colaborador';

const Team = (props) => {
    //destructurucaion de objetos
    const { colorPrimario, colorSecundario, titulo } = props.datos;
    const { collaborators } = props;
    return <> { 
        collaborators.length > 0 &&
        <section className="team" style={{ backgroundColor: colorSecundario }}>
            <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
            <div className="colaboradores">
                {
                    collaborators.map((colaborador, index) => <Colaborador 
                    key={index}
                     data={colaborador} 
                     colorPrimario={colorPrimario}/>)
                }
            </div>
        </section>
    }</>
}

export default Team;