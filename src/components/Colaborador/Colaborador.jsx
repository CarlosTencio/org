import './Colaborador.css'
import {AiFillCloseCircle,AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
const Colaborador = (props) => {
  const { name, position, photo, team,id,fav } = props.data;
  const { colorPrimario,deleteCollaborator,likeCollaborator } = props;


  return (
    <div className="colaborador" >
      <AiFillCloseCircle className='eliminar' onClick={()=>deleteCollaborator(id)}/>
      <div className='encabezado' style={{ backgroundColor: colorPrimario }}>
        <img src={photo} alt={name} />
      </div>
      <div className='info'>
        <h4>{name}</h4>
        <h5>{position}</h5>

        {fav ? <AiFillHeart color='red' onClick={()=> likeCollaborator(id)}/> : <AiOutlineHeart onClick={()=> likeCollaborator(id)}/>}

      </div>
    </div>
  )
}

export default Colaborador;