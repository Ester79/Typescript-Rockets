"use strict";
// FUNCIONES CON LAS QUE INTERACTUA EL USUARIO
// se crean dos variables, una con 3 propulsores y las potencias máximas y otra variable con 6 propulsores y las potencias máximas de cada propulsor
var potencias1 = [10, 30, 80];
var potencias2 = [30, 40, 50, 50, 30, 10];
// se tienen dos variables de clase Cohete, una para cada uno de los dos cohetes 
var cohete0;
var cohete1;
// se tiene otra variable de tipo array en la que se subirá y almacenará la información de los cohetes que se vayan creando
var cohetes = new Array(); //infinitos cohetes
/****************************INTERACCIONES QUE PUEDE HACER EL USUARIO CON LA INTERFAZ*********************/
// CREAR COHETES. En este caso se han definido los dos cohetes predeterminados
function crearCohete1() {
    cohete0 = new Cohete('32WESSDS', potencias1); //parámetros que recibe la variable 'cohete1' de la clase 'Cohete'
    console.log(cohete0);
    cohetes[0] = cohete0; //subir cohete1 al array de cohetes
    var CR1 = document.getElementById("CodR1");
    if (CR1) {
        CR1.innerHTML = cohete0.codigo;
    }
    var MaxPW1 = document.getElementById("MaxPWR1");
    if (MaxPW1) {
        MaxPW1.innerHTML = cohete0.potenciaTotalMaxima();
    }
    var boosters1 = document.getElementById("boostersR1");
    if (boosters1) {
        boosters1.innerHTML = potencias1;
    }
}
function crearCohete2() {
    cohete1 = new Cohete('LDSFJA32', potencias2);
    console.log(cohete1);
    cohetes[1] = cohete1; //subir cohete al array de cohetes
    var CR2 = document.getElementById("CodR2");
    if (CR2) {
        CR2.innerHTML = cohete1.codigo;
    }
    var MaxPW2 = document.getElementById("MaxPWR2");
    if (MaxPW2) {
        MaxPW2.innerHTML = cohete1.potenciaTotalMaxima();
    }
    var boosters2 = document.getElementById("boostersR2");
    if (boosters2) {
        boosters2.innerHTML = potencias2;
    }
}
// ACCELERAR COHETES. 
function accelera(id) {
    cohetes[id].accelerar(); //el cohete1 llama al método 'accelerar' de la clase 'Cohete'
    imprime(id); // llama a la función para imprimir por pantalla los datos
    advertencia(id);
}
// FRENAR COHETES. Misma dinámica que 'accelerar' pero llamando al métod 'frenar' de la clase 'Cohete'
function frena(id) {
    cohetes[id].frenar();
    imprime(id);
    advertencia(id);
}
// MOSTRAR DATOS POR PANTALLA. 
function imprime(id) {
    var info = document.getElementById("infoR" + id);
    if (info) {
        info.innerHTML = cohetes[id].mostrarInfo();
    }
}
function imprimirTodos() {
    var info = document.getElementById("todos");
    if (info) {
        info.innerHTML = "";
        for (var i = 0; i < cohetes.length; i++) {
            info.innerHTML += cohetes[i].mostrarInfo() + "<br><br>";
        }
    }
}
function refreshTodos() {
    var refresh = document.getElementById("todos");
    if (refresh) {
        refresh.innerHTML = cohete0.mostrarInfo() + "<br><br>" + cohete1.mostrarInfo();
    }
}
// MOSTRAR AVISOS
function advertencia(id) {
    var mensaje = document.getElementById("avisoR" + id);
    var maxima = cohetes[id].potenciaTotalMaxima();
    var actual = cohetes[id].potenciaTotalActual();
    var control = maxima - 20;
    if (mensaje) {
        mensaje.classList.remove("send");
        mensaje.classList.remove("stop");
        mensaje.classList.remove("ready");
        mensaje.classList.remove("control");
        if (actual == maxima) {
            mensaje.innerHTML = "SENDING INTO SPACE!!";
            mensaje.classList.add("send");
        }
        else if (actual >= control) {
            mensaje.innerHTML = "Ready to send";
            mensaje.classList.add("ready");
        }
        else if (actual == 0) {
            mensaje.innerHTML = "STOPPED";
            mensaje.classList.add("stop");
        }
        else {
            mensaje.innerHTML = "Under control";
            mensaje.classList.add("control");
        }
    }
}
