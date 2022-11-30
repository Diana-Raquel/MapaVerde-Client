import React from 'react';
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <section>
      <footer >
        <div className={classes["footer-container" ]}>
          <div className={classes["footer-content-container" ]}>
            <h3 className={classes["website-logo" ]} >Mapa Verde</h3>
          </div>
          <div className={classes["footer-menus" ]} >
            <div className={classes["footer-content-container" ]} >
              <span className={classes["menu-title" ]} >Información</span>
              <a href="" className={classes["menu-item-footer" ]}>2118 Thornridge Cir. Syracuse, Connecticut 35624</a>
              <a href="" className={classes["menu-item-footer" ]}>+503 555-0111</a>
              <a href="" className={classes["menu-item-footer" ]}>mapaverde@gmail.com</a>
            </div>
            <div className={classes["footer-content-container" ]}>
              <span className={classes["menu-title" ]} >legal</span>
              <a href="https://policies.google.com/privacy?hl=es" className={classes["menu-item-footer" ]}>Politicas de privacidad</a>
              <a href="https://policies.google.com/technologies/cookies?hl=es" className={classes["menu-item-footer" ]}>Cookies</a>
              <a href="https://support.google.com/youtube/answer/6154232?hl=es" className={classes["menu-item-footer" ]}>Consejo Legal</a>
            </div>
          </div>

          <div className={classes["footer-content-container" ]}>

            <div className={classes["social-container"]} >
              <a className="https://es-la.facebook.com/" class="social-link"></a>
              <a className="https://twitter.com/?lang=es" class="social-link"></a>
              <a className="https://www.instagram.com/" class="social-link"></a>
            </div>
          </div>
        </div>
        <div  className={classes[" copyright-container"]}>
          <span className={classes["copyright"]}>&copy; Todos los Derechos Reservados, 2021 .</span>
        </div>
      </footer>
    </section>

  );
}

export default Footer;