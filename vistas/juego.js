import { panel } from "../componentes/panel";
import { ModeloPieza } from "../funciones/clases";
export const juego = {
    template: //html
    `
  <!-- Pantalla del juego -->

  <div id="juego">
  <div class="row">
    <!-- Panel izquierda -->
    <div
      class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
    >
      <h4>Nivel: <span id="nivel"></span></h4>
      <h4>Tiempo: <span id="minutos">0</span>:<span id="segundos">00</span></h4>
      <h4>Lineas: <span id="limpiar"></span></h4>
      <h4>Puntos: <span id="puntos"></span></h4>
    </div>
    <!-- Panel central -->
    <div class="col-4 d-flex justify-content-center">
      <div id="panel" class="p-5">
       
      </div>
    </div>
    					<!-- Panel derecha -->
              <div
              class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
            >
              
              <hr />
              
                <div id="piezaGuardada">
                        <h4>Pieza guardada:</h4>
                        <div class="piezaGuardada">
                            <div class="piezaSiguiente2 m-2">
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    `,
    script:()=>{
      panel.jugar()
        
      
    }
}