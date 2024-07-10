import './MyOrg.css';

const MyOrg = (props) => {
//Función para cerrar el formulario usando un  hooks para manejar estado, ese hook es useState
//useState es un hook que nos permite manejar el estado de un componente funcional, en este caso, el estado de un formulario
//const [isOpen, setIsOpen] = useState(VALOR INICIAL DEL ESTADO);

    return(
        <section className='org-section'>
            <h3 className='title'>Mi organización</h3>
            <img src="/img/add.png" alt='ButtomCloseForm' onClick={props.changeDisplay}></img>
        </section>
    )
}

export default MyOrg;