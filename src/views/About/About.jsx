import classes from './About.module.scss'

const About = () => {
  return (
    <div>
      <div className={classes["about-section" ]}>
        <div className={classes["inner-container"]}>
          <h1>Sobre nosotros</h1>
          <p className={classes["text" ]} >
            Grupo de estudiantes dedicados y comprometidos a la vida verde! Queremos fomentar el uso de centros de reciclajes para salvar a nuestro planeta!
          </p>
          <div className={classes["skills "]} >
            <span>Vida Verde</span>
            <span>Reducir, Reutilizar y Reciclar. </span>
            <span>Mapa Verde</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;