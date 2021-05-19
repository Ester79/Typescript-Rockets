

class Propulsor { // Cada propulsor tiene una potencia máxima y una actual. La actual varía en función de si acceleramos o frenamos el cohete
    potenciaActual: number;
    potenciaMaxima: number;

    constructor(potenciaMaxima:number){ //cada propulsor recibe como parámetro su potencia máxima
        this.potenciaActual = 0; //Potencia actual inicializa a cero siempre. Estado antes de accelerar o frenar
        this.potenciaMaxima = potenciaMaxima;
    }

    // MÉTODOS PROPIOS DEL PROPULSOR

    // subir potencia de 10 en 10
    incrementaPotencia():void{ //función que no devuelve nada
        if(this.potenciaActual < this.potenciaMaxima){
            this.potenciaActual += 10; //incrementa 10 la potencia actual
            console.log("incrementando potencia " + this.potenciaActual );
        }
        
    }

    // subir potencia de 10 en 10
    reducePotencia():void{ // función no devuelve nada
        if(this.potenciaActual > 0){
            this.potenciaActual -= 10; //reduce en 10 la potencia actual
            console.log("reduciendo potencia " + this.potenciaActual);
        }
    }

    // mostrar información del propulsor en pantalla
    infoPropulsor():string{ // función que devuelve una string
        return this.potenciaActual + "/" + this.potenciaMaxima;
        }

}
