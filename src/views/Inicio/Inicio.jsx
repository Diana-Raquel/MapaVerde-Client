import classes from './Inicio.module.scss'


const Inicio = () => {
    return (
        <div>
            <section className={classes["hero"]} >
                <h1>Mira los eventos preparados para ti!</h1>
            </section>

            <section className={classes["somos-proya"]} >
                <div className={classes["container"]}>
                    <div className={classes["img-container"]}></div>
                    <div className={classes["texto"]}>

                        <h2>Somos <span className={classes["color-acento"]}>Mapa Verde!</span></h2>
                        <p>Página creada para que personas de todo El Salvador pueda realizar eventos srealizados con el medio ambiente!</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Inicio;