import './Colaborador.css'

const Colaborador = (props) => {
    const {name,position,photo,team} = props.data;
  const {colorPrimario} = props;
    return (
        <div className="colaborador" >
          <div className='encabezado' style={{backgroundColor:colorPrimario}}>
            <img src={photo} alt={name} />
          </div>
          <div>
            <h4>{name}</h4>
            <h5>{position}</h5>
          </div>
        </div>
    )
}

export default Colaborador;