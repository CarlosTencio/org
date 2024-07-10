import './Team.css';

const Team = (props) => {
 return (
    <section className="team">
        <h3>{props.team}</h3>
        <div className="colaboradores"></div>
    </section>
 )
}

export default Team;