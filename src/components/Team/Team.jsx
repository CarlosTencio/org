import './Team.css';
import Colaborador from '../Colaborador/Colaborador';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    //destructurucaion de objetos
    const { colorPrimario, colorSecundario, titulo ,id} = props.datos;
    const { collaborators,deleteCollaborator,updateColor,likeCollaborator } = props;


    return <> { 
        collaborators.length > 0 &&
        <section className="team" style={{ backgroundColor: hexToRgba(colorPrimario, 0.6)}}>
            <input type="color" className='color' 
            value={colorPrimario}
            onChange={(event)=>{
                updateColor(event.target.value,id);
            }}
             />
            <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
            <div className="colaboradores">
                {
                    collaborators.map((colaborador, index) => <Colaborador 
                    key={index}
                     data={colaborador} 
                     colorPrimario={colorPrimario}
                     deleteCollaborator={deleteCollaborator}
                     likeCollaborator={likeCollaborator}
                     />)
                }
            </div>
        </section>
    }</>
}

export default Team;