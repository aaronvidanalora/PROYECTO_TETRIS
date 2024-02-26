import { panel } from "../componentes/panel";
import { orden } from "../funciones/funciones";

// Define una lista para almacenar todas las partidas
let juegos = [];

export const ranking = {
    template: //html
    `
    <header class="d-flex align-items-center justify-content-center">
        <img src="img/logo.png" alt="logo" width="200" class="mt-5" />
    </header>
    <main class="container mt-5 bg-opacity-50 bg-dark p-2">
        <!-- Pantalla tablas y ranking -->
        <div id="info" class="">
            <div id="ranking" class="m-5 p-5 bg-dark">
            </div>
            <div id="partidas" class="m-5 p-5 bg-dark">
            </div>
        </div>
    </main>
    `,
    script: () => {
        function pintaRanking() {
            const ranking = document.querySelector('#ranking');
            // Ordenar los juegos por puntos de mayor a menor
            juegos.sort((a, b) => b.puntos - a.puntos);
            // Generar el HTML de la tabla
            let tablaHTML = //html 
                `<h2 class="text-center text-light">Ranking</h2>
                <table class="table table-dark align-middle">
                    <thead>
                        <tr class="bg-dark">
                            
                        </tr>
                    </thead>
                    <tbody>`;
            // Iterar sobre los juegos ordenados
            juegos.forEach((element, index) => {
                if (element.avatar && element.nick && element.puntos && element.fecha) {
                    tablaHTML += //html 
                        `<tr>
                            <td>${index + 1}</td> <!-- Mostrar el número de posición -->
                            <td><img src="${element.avatar}" style= "width: 30px" alt=""></td>
                            <td>${element.nick}</td>
                            <td>${element.puntos}</td>
                            <td>${element.fecha}</td>
                        </tr>`;
                }
            });
        
            tablaHTML += //html 
                `
                    </tbody>
                    <tfoot></tfoot>
                </table>`;
            // Insertar el HTML generado en el elemento de ranking
            ranking.innerHTML = tablaHTML;
        }
        

        function pintaTabla() {
            const partidas = document.querySelector('#partidas');
            let tablaHTML = //html 
                `<h2 class="text-center text-light">Partidas</h2>
                <div class="input-group mb-3">
                    <button id="botonBuscar">BUSCAR</button>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Buscador"
                        aria-label="Buscador"
                        aria-describedby="button-addon2"
                        id="buscadorNick"
                    />
                    <button
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                    >
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nick <i id="nick-header" class="bi bi-arrow-up-square"></i></th>
                            <th>Puntuación <i id="puntos-header" class="bi bi-arrow-up-square"></i></th>
                            <th>Fecha <i id="fecha-header" class="bi bi-arrow-up-square"></i></th>
                        </tr>
                    </thead>
                    <tbody>`;
        
            juegos.forEach(element => {
                if (element.avatar && element.nick && element.puntos && element.fecha) {
                    tablaHTML += //html 
                        `<tr>
                            <td><img src="${element.avatar}" style= "width: 30px" alt=""></td>
                            <td>${element.nick}</td>
                            <td>${element.puntos}</td>
                            <td>${element.fecha}</td>
                        </tr>`;
                }
            });
        
            tablaHTML += //html 
                `
                    </tbody>
                    <tfoot></tfoot>
                </table>`;
        
            partidas.innerHTML = tablaHTML;
        }

        function insertaNuevaPartida(nuevaPartida) {
            console.log("Guardando partida");
            if (nuevaPartida.avatar && nuevaPartida.nick && nuevaPartida.puntos && nuevaPartida.fecha) {
                juegos.push(nuevaPartida);
                console.log(juegos);
                pintaTabla(); // Añade la nueva partida a la tabla
            }
        }

        const fechaActual = new Date();
        const nuevaPartida = {
            avatar: 'https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg',
            nick: panel.nick || '',
            puntos: panel.puntos || '',
            fecha: fechaActual.toLocaleString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
        };
        
        insertaNuevaPartida(nuevaPartida);

        console.log(pintaRanking);
        console.log(pintaTabla);
        pintaTabla();

        const botonBuscar = document.getElementById('botonBuscar');
        botonBuscar.addEventListener('click', buscar);

        function buscar() {
            const inputNick = document.getElementById('buscadorNick').value;
            console.log('nombre buscado: ', inputNick);

            // Filtra las partidas que coinciden con el nombre buscado
            const partidasFiltradas = juegos.filter(partida => partida.nick.toLowerCase().includes(inputNick.toLowerCase()));

            // Pinta la tabla con las partidas filtradas
            pintaTablaFiltrada(partidasFiltradas);
        }

        function pintaTablaFiltrada(partidas) {
            const partidasElement = document.querySelector('#partidas tbody');
            partidasElement.innerHTML = ''; // Limpia la tabla actual

            partidas.forEach(element => {
                if (element.avatar && element.nick && element.puntos && element.fecha) {
                    const filaHTML = `
                        <tr>
                            <td><img src="${element.avatar}" style="width: 30px" alt=""></td>
                            <td>${element.nick}</td>
                            <td>${element.puntos}</td>
                            <td>${element.fecha}</td>
                        </tr>
                    `;
                    partidasElement.innerHTML += filaHTML;
                }
            });
        }

        function orden(campo) {
            const tbodyElement = document.querySelector('#partidas tbody');
            let ordenActual = tbodyElement.dataset.orden || 'asc'; 
            let ordenNuevo = (campo === tbodyElement.dataset.ultimoCampoOrdenado && ordenActual === 'asc') ? 'desc' : 'asc'; 
            tbodyElement.dataset.orden = ordenNuevo; 
            tbodyElement.dataset.ultimoCampoOrdenado = campo; 
            
            switch (campo) {
                case 'nick':
                    console.log('Ordenar por nick');
                    juegos.sort((a, b) => ordenNuevo === 'asc' ? a.nick.localeCompare(b.nick, 'es', { sensitivity: 'base' }) : b.nick.localeCompare(a.nick, 'es', { sensitivity: 'base' }));
                    break;
                case 'puntos':
                    console.log('Ordenar por puntos');
                    if (ordenNuevo === 'asc') {
                        juegos.sort((a, b) => a.puntos - b.puntos);
                    } else {
                        juegos.sort((a, b) => b.puntos - a.puntos);
                    }
                    break;
                case 'fecha':
                    console.log('Ordenar por fecha');
                    juegos.sort((a, b) => {
                        const fechaA = new Date(a.fecha);
                        const fechaB = new Date(b.fecha);
                        if (ordenNuevo === 'asc') {
                            return fechaA - fechaB;
                        } else {
                            return fechaB - fechaA;
                        }
                    });
                    break;
            }
            
            const tablaHTML = generarTablaHTML(juegos);
            tbodyElement.innerHTML = tablaHTML;
        }
        
        
        
        
        const generarTablaHTML = (juegos) => {
            let tablaHTML = '';
            juegos.forEach(element => {
                tablaHTML += `
                    <tr>
                        <td><img src="${element.avatar}" style= "width: 30px" alt=""></td>
                        <td>${element.nick}</td>
                        <td>${element.puntos}</td>
                        <td>${element.fecha}</td>
                    </tr>`;
            });
        
            return tablaHTML;
        };
        
        
        pintaRanking()
        const iconoNick = document.querySelector('#nick-header');
        iconoNick.addEventListener('click', function () {
            console.log('Click en flechaNick');
            orden('nick');
        });
        
        const iconoPoints = document.querySelector('#puntos-header');
        iconoPoints.addEventListener('click', function () {
            console.log('Click en flechaPuntuacion');
            orden('puntos');
        });
        
        const iconoDate = document.querySelector('#fecha-header');
        iconoDate.addEventListener('click', function () {
            console.log('Click en flechaFecha');
            orden('fecha');
        });
        
    }
};
