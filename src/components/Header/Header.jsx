import classes from './Header.module.scss';
import logo from '../../assets/mundo.png';
import Button from '../Button/Button';

import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';

const Header = () => {
  const { logout, user } = useUserContext();
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
      {
          !user ?
            <>
              <Button onClick={() => navigate("/auth/signin")}> Sign in </Button>
              <Button onClick={() => navigate("/auth/signup")}> Sign up </Button>
            </> :
            <>
              <Button onClick={() => { logout() }}> Sign out </Button>
            </>
        }
      </div>
    </header>
  );
}

export default Header;