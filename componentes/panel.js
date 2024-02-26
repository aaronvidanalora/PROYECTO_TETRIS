import { models } from "./models";
import { ModeloPieza } from "../funciones/clases";
import { juego } from "../vistas/juego";
import { vistaGuardar } from "../vistas/vistaGuardar";
import { ranking } from "../vistas/ranking";

export const panel = {
  matriz: [
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],

  nuevaPieza: null,
  cambiarPieza: null,
  piezaGuardada: null,
  nivel: 1,
  limpiar: 1,
  tiempo: 0,
  pintaPanel:()=>{
    const IDpanel = document.querySelector('#panel');
    IDpanel.innerHTML = ''

    const colores = ['black', 'black', 'rgb(64, 230, 64)', 'rgb(255, 255, 0)', 'purple', 'red', 'aqua', 'rgb(255, 182, 47)', 'rgb(255, 190, 201)']
    
    //Bucle sobre cada fila menos la ultima
    for(let fila = 1; fila < panel.matriz.length -1; fila++){
        let divFilas = '<div class="fila d-flex justify-content-center">';
        //bucle sobre cada columna de la fila en la que estamos
        for(let columna = 0; columna < panel.matriz[fila].length; columna ++){
        let divCeldas = ''
        //se mira si es 0 que no hay nada, o es diferente de 0 que es una pieza
            if(panel.matriz[fila][columna] == 0){
                //metemos una celda vacia
                divCeldas += '<div class="celda bg-dark border border-secondary"></div>';
            }else{
                //si entra es que es una pieza
                const colorIndex = panel.matriz[fila][columna];
                //metemos el color correspondiente
                divCeldas = `<div class="celda border border-secondary" style="background-color: ${colores[colorIndex]};"></div>`;
            }   
            //metemos las celdas en las filas
            divFilas += divCeldas
        }
        //Ceramos las filas
        divFilas += '<div>'
        //vamos metiendo las filas al panel
        IDpanel.innerHTML += divFilas   
    }
    const puntos = document.querySelector('#puntos');
    puntos.innerHTML = panel.puntos
  },


  borrarPieza:() =>{
    if(panel.nuevaPieza){
       //miramos las filas de pieza
        for( let i=0; i < panel.nuevaPieza.altura; i++){
            // miramos las columnas de la pieza
            for( let x=0; x < panel.nuevaPieza.longitud; x++){
                //miramos el elemento en la posicion que esta en ese momento
                const elemento = panel.nuevaPieza.matriz[i][x];
                if(elemento){// si no es 0 es que hay una parte de la pieza
                    //ponemos en 0 para borrar la pieza
                    panel.matriz[i + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = 0
                }
            }
       } 
       panel.pintaPanel()
    }
  },
  


  limpiarFila() {
    let filasLimpiadas = 0
      
    //bucle por las filas del panel
    for(let fila = 0; fila < panel.matriz.length -1; fila ++){
      //mirar si la fila esta llena que no haya ningun 0
      if(panel.matriz[fila].every(celda => celda !== 0)){
          //borramos la fila si esta llena
          panel.matriz.splice(fila, 1)
          //metemos una fila vacia arriba del todo que esta llena de 0
          panel.matriz.unshift(Array(10).fill(0))
          filasLimpiadas++
          //paramos para que solo se limpie una fila
          break;
      }
    }
    if(filasLimpiadas > 0){
        panel.puntos += 100
        const limpiar = document.querySelector('#limpiar')
        limpiar.innerHTML = panel.limpiar;
        panel.limpiar += 1
        panel.pintaPanel()
    }
},

  jugar:()=>{
    panel.matriz = [
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
    panel.puntos = 0
    panel.limpiar = 1
    panel.nivel = 1
    panel.tiempo = 0
    panel.pintaPanel()
    panel.controlTeclas()
    panel.nuevaPieza = panel.crearNuevaPieza()
    panel.insertarPieza()
    panel.iniciarMovimiento()
    panel.cambiarPieza() 
  },

  
  crearNuevaPieza:()=>{
    // genero numero aleatorio entre 0 y 6 para coger un modelo de pieza
    const aleatorioModelo = Math.floor(Math.random() * 7);
    //obtener el ancho de la pieza
    const ancho = models[aleatorioModelo].matriz[0].length

    //calcular el ancho posible para meter la pieza
    const maximoX = 10 - ancho
    //genero numero aleatorio entre 0 y el maximo para que salga en una posicion random
    const aleatorioX = Math.floor(Math.random () * (maximoX + 1))

    //creamos la pieza con la clase
    const pieza = new ModeloPieza(aleatorioModelo, aleatorioX, 1, 0)
    panel.nuevaPieza = pieza
    return pieza
},


finalizarPartida: () => {
  console.log('Partida Finalizada');
  const mostrarGuardar = document.querySelector('#juego');
  if (mostrarGuardar) {
      mostrarGuardar.innerHTML = vistaGuardar.template;
      //parar el movimiento del juego
      clearInterval(panel.movimientoInterval);
      const btnGuardar = document.querySelector('#btnGuardar');
      const btnCancelar = document.querySelector('#btnCancelar');
      
      // Resto del código para los botones btnGuardar y btnCancelar
      btnGuardar.addEventListener('click', () => {
          const inputNick = document.querySelector('#nick').value;
          panel.nick = inputNick;
          const vistaRanking = document.querySelector('main');
          vistaRanking.innerHTML = ranking.template;
          ranking.script();
      });
      
      btnCancelar.addEventListener('click', () => {
          mostrarGuardar.innerHTML = juego.template;
          panel.reiniciarMatriz();
          panel.pintaPanel();
          panel.iniciarMovimiento();
      });
  } else {
      console.error('El elemento #juego no se encontró en el DOM.');
  }
},


 

     
  



insertarPieza: ()=>{
  let meterPieza = true;

  //bucle sobre la nueva pieza
  for ( let i = 0; i < panel.nuevaPieza.altura; i++){
      for(let j = 0; j < panel.nuevaPieza.longitud; j++){
        //verificar si es diferente de 0 la matriz de la nueva pieza
        if(panel.nuevaPieza.matriz[i][j] === (panel.nuevaPieza.modelo + 2)){
            //compruebo si la posicion esta vacia para meter la pieza
            if(panel.matriz[panel.nuevaPieza.y + i][panel.nuevaPieza.x + j] > 0){
                meterPieza = false //si no hay espacio
                break; // romper bucle
            }
        }
      }
      if(!meterPieza){
          break;
      }
  }

  // si hay espacio inserto la pieza
  if(meterPieza){
      for(let i = 0; i < panel.nuevaPieza.altura ; i++){ //filas
          for( let j = 0; j < panel.nuevaPieza.longitud; j++) {  //columnas
              //insertar la pieza
              if(panel.nuevaPieza.matriz[i][j] === (panel.nuevaPieza.modelo + 2)){
                  panel.matriz[panel.nuevaPieza.y +i][panel.nuevaPieza.x + j] = panel.nuevaPieza.matriz[i][j]
              }
          }
      }
  } else {
      panel.finalizarPartida() // si no se puede meter piezas finaliza la partida
  }
},
puntos: 0,

  moverIzq(){
    for(let y = 0; y < panel.nuevaPieza.altura; y++){
        //compruebo si la posicion de la izquierda hay algo o no
        if(panel.matriz[panel.nuevaPieza.y + y][panel.nuevaPieza.x -1] !== 0){
            return; //salir si esta ocupada
        }
    }   
    panel.borrarPieza();
    // Actualiza la posición x de la pieza moviéndola hacia la izquierda
    panel.nuevaPieza.x -= 1;
    panel.puntos += 10;
    panel.insertarPieza();
    panel.pintaPanel();
  },

  moverDra() {
    for (let y = 0; y < panel.nuevaPieza.altura; y++) {
        //compruebo si la posicion de la derecha hay algo o no
        if (panel.matriz[panel.nuevaPieza.y + y][panel.nuevaPieza.x + panel.nuevaPieza.longitud] !== 0) {
            return; // Sale de la función si encuentra una posición ocupada
        }
    }
  
    panel.borrarPieza();
    panel.nuevaPieza.x += 1;
    // Incrementa los puntos en 10 al mover la pieza hacia la derecha
    panel.puntos += 10;
    panel.insertarPieza();
    panel.pintaPanel();
  },

  bajar: () => {
    // Finaliza la partida si la nueva pieza está en la primera fila y hay contenido debajo
    if (panel.nuevaPieza.y == 1) {
        let cabePieza = false;
        // Miro si hay algo debajo de la nueva pieza
        for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
            if (panel.matriz[panel.nuevaPieza.y + panel.nuevaPieza.altura][panel.nuevaPieza.x + x] > 0) {
                cabePieza = true;
                break;
            }
        }
  
        // Si hay algo debajo, finaliza la partida
        if (cabePieza) {
            panel.finalizarPartida();
            return;
        }
    }
  
        // si no pasa el limite del panel
    if ((panel.nuevaPieza.y + panel.nuevaPieza.altura) < 21) {
        panel.borrarPieza(); 
        panel.nuevaPieza.y++; 
        panel.puntos += 10; 
  
        //Colision con otras piezas
        for (let y = 0; y < panel.nuevaPieza.altura; y++) {
            for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
                // Si hay colision, deshace el movimiento hacia abajo
                if (panel.nuevaPieza.matriz[y][x] && panel.matriz[y + panel.nuevaPieza.y][x + panel.nuevaPieza.x]) {
                    panel.nuevaPieza.y--; // Revierte el movimiento hacia abajo
                    panel.insertarPieza(); 
                    panel.pintaPanel(); 
                    panel.limpiarFila(); 
                    panel.nuevaPieza = panel.crearNuevaPieza(); 
                    return;
                }
            }
        }
        panel.insertarPieza(); 
        panel.pintaPanel(); 
    } else {
        panel.limpiarFila(); 
        panel.nuevaPieza = panel.crearNuevaPieza(); 
    }
  },

siguienteNivel: () => {
  if (panel.puntos >= 5000) {
    panel.reiniciarMatriz();
    panel.borrarPieza()
    panel.pintaPanel();
    const spanNivel = document.querySelector('#nivel');
    spanNivel.innerHTML=panel.nivel 
    panel.nivel += 1
  }
},

reiniciarMatriz: () => {
  panel.borrarPieza()
  // Reinicia la matriz asignando una nueva matriz vacía
  panel.matriz = [
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
  // Reinicia los puntos
  panel.puntos = 0;
  panel.limpiar = 0;
  panel.nuevaPieza = null
  // Crea una nueva pieza y la inserta en el panel
  panel.nuevaPieza = panel.crearNuevaPieza();
  panel.insertarPieza();
},

minutos: 0,
segundos: 0,


 

iniciarMovimiento: () => {
   
  panel.movimientoInterval = setInterval(() => {
      panel.bajar(); 
      panel.siguienteNivel(); 

      // Incrementa el tiempo 
      panel.tiempo++;
      panel.minutos = Math.floor(panel.tiempo / 60);
      panel.segundos = panel.tiempo % 60;

      //Agregar un 0 para mantener formato si son menores que 10
      panel.minutos = panel.minutos < 10 ? "0" + panel.minutos : panel.minutos;
      panel.segundos = panel.segundos < 10 ? "0" + panel.segundos : panel.segundos;

      
      document.querySelector('#minutos').innerHTML = panel.minutos;
      document.querySelector('#segundos').innerHTML = panel.segundos;
  }, 2000); 
},

cambiarPieza() {
   
  panel.borrarPieza();

  // Guarda la pieza actual en una variable 
  const piezaTemporal = panel.nuevaPieza;

  if (panel.piezaGuardada === null) {
    // Se guarda la pieza guardada si hay y si no la actual
    panel.piezaGuardada = piezaTemporal;
    // Creo una nueva pieza y la inserto
    panel.nuevaPieza = panel.crearNuevaPieza();
  } else {
    // Si hay una pieza guardada las intercambio
    panel.nuevaPieza = panel.piezaGuardada; 
    panel.piezaGuardada = piezaTemporal; 
  }


  panel.insertarPieza();


  panel.pintaPiezaGuardada();
  panel.pintaPanel();
},

pintaPiezaGuardada: () => {

  const IDpiezaSiguiente = document.querySelector('.piezaSiguiente2');
  IDpiezaSiguiente.innerHTML = ''; 

  const colores = ['', '', 'rgb(64, 230, 64)', 'rgb(255, 255, 0)', 'rgb(211, 39, 211)', 'red', 'aqua', 'rgb(255, 182, 47)', 'rgb(255, 190, 201)'];

  // bucle sobre cada fila de la pieza guardada
  for (let fila = 0; fila < panel.piezaGuardada.matriz.length; fila++) {
      let divFilas = '<div class="fila d-flex justify-content-center">'; 

      // bucle sobre cada columna de la pieza guardada
      for (let columna = 0; columna < panel.piezaGuardada.matriz[fila].length; columna++) {
          let divCeldas = '';

          // mira si el espacio esta vacio
          if (panel.piezaGuardada.matriz[fila][columna] == 0) {
              // si es 0 pinto una celda vacia
              divCeldas += '<div class="celda bg-dark border-secondary"></div>';
          }

          // si es mayor o igual a 2 es que es una pieza entra al if
          if (panel.piezaGuardada.matriz[fila][columna] >= 2) {
              //le pongo el color que le corresponde
              let color = panel.piezaGuardada.matriz[fila][columna];
              divCeldas = `<div class="celda tipo${color}" style="background-color: ${colores[color]};"></div>`;
          }

          // Agrega el div de la celda al div de la fila actual
          divFilas += divCeldas;
      }
      
      
      divFilas += '</div>';
      IDpiezaSiguiente.innerHTML += divFilas;
  }

},



controlTeclas: () => {
  document.addEventListener('keydown', panel.teclas);
},
teclas: (event) => {
  const mostrarGuardar = document.querySelector('#juego');
  const vistaGuardarActiva = mostrarGuardar.innerHTML === vistaGuardar.template;

  switch(event.key) {
      case 'ArrowUp':
        if (!vistaGuardarActiva) panel.borrarPieza();
          event.preventDefault();
          panel.nuevaPieza.girar();
          panel.insertarPieza();
          panel.pintaPanel();
          break;
      case 'ArrowDown':
          if (!vistaGuardarActiva) panel.bajar();
          event.preventDefault();
          break;
      case 'ArrowLeft':
          if (!vistaGuardarActiva) panel.moverIzq();
          event.preventDefault();
          break;
      case 'ArrowRight':
          if (!vistaGuardarActiva) panel.moverDra();
          event.preventDefault();
          break;
      case 'c':
          if (!vistaGuardarActiva) panel.cambiarPieza();
          event.preventDefault();
          break;
      default:
          break;
  }
},



limpiarEventListener : () => {
  document.removeEventListener('keydown', panel.teclas);
},

};