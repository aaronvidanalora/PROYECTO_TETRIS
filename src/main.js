import { header } from "../componentes/header";
import { home } from "../vistas/home";
import { ranking } from "../vistas/ranking";
import { juego } from "../vistas/juego";
import './estilo.css';

// Coloca el contenido del header
document.querySelector('header').innerHTML = header.template;
// Ejecuta el script del header
header.script();

// Coloca el contenido de la vista home
document.querySelector('main').innerHTML = home.template;
// Ejecuta el script de la vista home
home.script();
ranking.script();
// Ejecuta el script del juego
juego.script();
