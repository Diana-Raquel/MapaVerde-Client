import classes from './Header.module.scss';
import logo from '../../assets/mundo.png';
import Button from '../Button/Button';

import { useNavigate, Link } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={classes["Header"]} >
      <div className={classes["Title"]} onClick={() => navigate("/inicio")}>
        <figure>
          <img src={logo} />
        </figure>

        <h1> MAPA VERDE </h1>
      </div>
      <ul className={classes["nav-items"]}>
        <li className={classes["nav-link"]} onClick={() => navigate("/inicio")}>Inicio</li>
        <li className={classes["nav-link"]} onClick={() => navigate("/mapas")}>Mapas</li>
        <li className={classes["nav-link"]} onClick={() => navigate("/")}>Eventos</li>
        <li className={classes["nav-link"]} onClick={() => navigate("/proyectos")}>Proyectos</li>
        <li className={classes["nav-link"]} onClick={() => navigate("/about")}>Sobre nosotros</li>
      </ul>

      <div className={classes["Buttons"]}>

              <Button onClick={() => navigate("/auth/signin")}> Iniciar Sesión </Button>
              <Button onClick={() => navigate("/auth/signup")}> Registrarse </Button>

        
      </div>
    </header>
  );
}

export default Header;