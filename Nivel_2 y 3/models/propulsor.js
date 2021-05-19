"use strict";
var Propulsor = /** @class */ (function () {
    function Propulsor(potenciaMaxima) {
        this.potenciaActual = 0; //Potencia actual inicializa a cero siempre. Estado antes de accelerar o frenar
        this.potenciaMaxima = potenciaMaxima;
    }
    // MÉTODOS PROPIOS DEL PROPULSOR
    // subir potencia de 10 en 10
    Propulsor.prototype.incrementaPotencia = function () {
        if (this.potenciaActual < this.potenciaMaxima) {
            this.potenciaActual += 10; //incrementa 10 la potencia actual
            console.log("incrementando potencia " + this.potenciaActual);
        }
    };
    // subir potencia de 10 en 10
    Propulsor.prototype.reducePotencia = function () {
        if (this.potenciaActual > 0) {
            this.potenciaActual -= 10; //reduce en 10 la potencia actual
            console.log("reduciendo potencia " + this.potenciaActual);
        }
    };
    // mostrar información del propulsor en pantalla
    Propulsor.prototype.infoPropulsor = function () {
        return this.potenciaActual + "/" + this.potenciaMaxima;
    };
    return Propulsor;
}());
