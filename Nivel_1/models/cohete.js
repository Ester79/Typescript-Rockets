"use strict";
// clase de tipo Cohete
var Cohete = /** @class */ (function () {
    function Cohete(codigo, potencias) {
        this.codigo = codigo;
        this.propulsores = []; // array de propulsores. El cohete puede contener más de 1 propulsor
        // bucle para crear tantos propulsores como potencias nos pasan.
        for (var i = 0; i < potencias.length; i++) {
            var prop = new Propulsor(potencias[i]); // se crea un nuevo objeto de la clase Propulsor con las potencias máximas por propulsor
            this.propulsores.push(prop); //se añaden las potencias máximas de cada propulsor al array propulsores
        }
    }
    // MÉTODOS PROPIOS DEL COHETE y estados
    // Suma de las potencias máximas del cohete
    Cohete.prototype.potenciaTotalMaxima = function () {
        var potenciaAcumulada = 0; //Al inicio es 0
        for (var i = 0; i < this.propulsores.length; i++) { // recorrer toda la longitud del array para sumar las potencias máximas
            potenciaAcumulada += this.propulsores[i].potenciaMaxima;
        }
        return potenciaAcumulada;
    };
    // Suma de la potencia en el momento, de cada propulsor según se va accelerando o frenando
    Cohete.prototype.potenciaTotalActual = function () {
        var potenciaActualAcumulada = 0;
        for (var i = 0; i < this.propulsores.length; i++) {
            potenciaActualAcumulada += this.propulsores[i].potenciaActual;
        }
        return potenciaActualAcumulada;
    };
    // el cohete puede accelerar o frenar
    // el método accelerar recorre el array de propulsores y aplica la función de 'incrementaPotencia' de la clase 'Propulsor' a cada propulsor
    Cohete.prototype.accelerar = function () {
        for (var i = 0; i < this.propulsores.length; i++) { // se recorre el arry de propulsores
            this.propulsores[i].incrementaPotencia(); // se llama al método 'incrementePotencia' en cada uno de los propulsores. Este método incrementará en 10 la potencia actual de cada propulsor
        }
    };
    // en el método frenar se aplica la misma lógica que en accelerar, pero se llama al método 'reducePotencia' de la clase 'Propulsor' y se resta de 10 en 10 la potencia actual de cada propulsor
    Cohete.prototype.frenar = function () {
        for (var i = 0; i < this.propulsores.length; i++) {
            this.propulsores[i].reducePotencia();
        }
    };
    // método mostrar información del cohete
    Cohete.prototype.mostrarInfo = function () {
        var infoPropulsores = "";
        for (var i = 0; i < this.propulsores.length; i++) {
            infoPropulsores += this.propulsores[i].infoPropulsor() + ", ";
        }
        return "Code: " + this.codigo + "<br>" + "Current/Maximum power Propellers " + infoPropulsores + "<br>" + "Maximum Power:" + this.potenciaTotalMaxima() + "<br>" + "Current Power:" + this.potenciaTotalActual();
    };
    return Cohete;
}());
