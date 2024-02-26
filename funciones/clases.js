import { models } from "../componentes/models";

export class ModeloPieza {
    constructor (modelo, x = 0, y = 0, angulo = 0) {
      this.modelo = modelo
      this.angulo = angulo
      this.matriz = models[this.modelo].matriz[this.angulo]
      this.x = x
      this.y = y
      this.longitud = this.matriz[0].length
      this.altura = this.matriz.length
    }
  
    girar () {
      // guarda el angulo actual y la matriz
      const anguloTemporal = this.angulo;
      const matrizTemporal = this.matriz;
  
      // suma el angulo
      this.angulo = this.angulo + 1;
      if (this.angulo > 3) {
          this.angulo = 0;
      }
  
      // Actualiza la matriz con el nuevo angulo
      this.matriz = models[this.modelo].matriz[this.angulo];
      this.longitud = this.matriz[0].length;
      this.altura = this.matriz.length;
  
      // mirar si la posicion de la pieza sobrepasa el panel
      const maxX = 11 - this.longitud; 
      if (this.x > maxX) {
          // si se pasa vuelva a ser la original y no gira
          this.angulo = anguloTemporal;
          this.matriz = matrizTemporal;
          this.longitud = this.matriz[0].length;
          this.altura = this.matriz.length;
      }
  }
}