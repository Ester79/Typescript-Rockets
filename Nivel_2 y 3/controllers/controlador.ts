// FUNCIONES CON LAS QUE INTERACTUA EL USUARIO


// se crean dos variables, una con 3 propulsores y las potencias máximas y otra variable con 6 propulsores y las potencias máximas de cada propulsor
var potencias1 = [10, 30, 80];
var potencias2 = [30, 40, 50, 50, 30, 10];

// se tienen dos variables de clase Cohete, una para cada uno de los dos cohetes 
var cohete1: Cohete;
var cohete2: Cohete;
// se tiene otra variable de tipo array en la que se subirá y almacenará la información de los cohetes que se vayan creando
var cohetes: Cohete[] = new Array(); //infinitos cohetes



/****************************INTERACCIONES QUE PUEDE HACER EL USUARIO CON LA INTERFAZ*********************/

// CREAR COHETES. En este caso se han definido los dos cohetes predeterminados
function crearCohete1() {
    cohete1 = new Cohete('32WESSDS', potencias1); //parámetros que recibe la variable 'cohete1' de la clase 'Cohete'
    console.log(cohete1);
    cohetes.push(cohete1); //subir cohete1 al array de cohetes
    let CR1 = document.getElementById("CodR1");
    if(CR1){
        CR1.innerHTML = cohete1.codigo;
    }
    let MaxPW1:any = document.getElementById("MaxPWR1");
    if(MaxPW1){
        MaxPW1.innerHTML = cohete1.potenciaTotalMaxima();
    }  
    let boosters1:any = document.getElementById("boostersR1");
    if(boosters1){
        boosters1.innerHTML = potencias1;
    }
}

function crearCohete2() {
    cohete2 = new Cohete('LDSFJA32', potencias2);
    console.log(cohete2);
    cohetes.push(cohete2); //subir cohete al array de cohetes
    let CR2 = document.getElementById("CodR2");
    if(CR2){
        CR2.innerHTML = cohete2.codigo;
    }
    let MaxPW2:any = document.getElementById("MaxPWR2");
    if(MaxPW2){
        MaxPW2.innerHTML = cohete2.potenciaTotalMaxima();
    }  
    let boosters2:any = document.getElementById("boostersR2");
    if(boosters2){
        boosters2.innerHTML = potencias2;
    }
}


// ACCELERAR COHETES. 
function accelera1() {
    cohete1.accelerar(); //el cohete1 llama al método 'accelerar' de la clase 'Cohete'
    imprime1(); // llama a la función para imprimir por pantalla los datos
    advertenciaR1();
}

function accelera2() {
    cohete2.accelerar();
    imprime2();
    advertenciaR2();
}


// FRENAR COHETES. Misma dinámica que 'accelerar' pero llamando al métod 'frenar' de la clase 'Cohete'
function frena1() {
    cohete1.frenar();
    imprime1();
    advertenciaR1();
}

function frena2() {
    cohete2.frenar();
    imprime2();
    advertenciaR2();
}


// MOSTRAR DATOS POR PANTALLA. 
function imprime1() {
    let info = document.getElementById("infoR1");
    if (info) {
        info.innerHTML = cohete1.mostrarInfo();
    }
}

function imprime2() {
    let info = document.getElementById("infoR2");
    if (info) {
        info.innerHTML = cohete2.mostrarInfo();
    }
}

function imprimirTodos() {
    let info = document.getElementById("todos");
    if (info) {
        info.innerHTML = "";
        for (let i = 0; i < cohetes.length; i++) {
            info.innerHTML += cohetes[i].mostrarInfo() + "<br><br>";
        }
    }
}

function refreshTodos() {
    let refresh = document.getElementById("todos");
    if (refresh) {

        refresh.innerHTML = cohete1.mostrarInfo() +  "<br><br>" + cohete2.mostrarInfo();

    }
}

// MOSTRAR AVISOS
function advertenciaR1() {
    let mensaje = document.getElementById("avisoR1");
    let maxima = cohete1.potenciaTotalMaxima();
    let actual = cohete1.potenciaTotalActual();
    let control = maxima - 20;
    if(mensaje){
        mensaje.classList.remove("send");
        mensaje.classList.remove("stop");
        mensaje.classList.remove("ready");
        mensaje.classList.remove("control");
        if (actual ==  maxima ) {
            mensaje.innerHTML = "SENDING INTO SPACE!!";
            mensaje.classList.add("send");
        } else if(actual >= control){
            mensaje.innerHTML = "Ready to send";
            mensaje.classList.add("ready");

        }else if(actual == 0){
            mensaje.innerHTML = "STOPPED";
            mensaje.classList.add("stop");
        }else{
            mensaje.innerHTML = "Under control";
            mensaje.classList.add("control");
        }
    }
}

function advertenciaR2() {
    let mensaje = document.getElementById("avisoR2");
    let maxima = cohete2.potenciaTotalMaxima();
    let actual = cohete2.potenciaTotalActual();
    let control = maxima - 20;
    if(mensaje){
        mensaje.classList.remove("send");
        mensaje.classList.remove("stop");
        mensaje.classList.remove("ready");
        mensaje.classList.remove("control");
        if (actual ==  maxima ) {
            mensaje.innerHTML = "SENDING INTO SPACE!!";
            mensaje.classList.add("send");
        } else if(actual >= control){
            mensaje.innerHTML = "Ready to send";
            mensaje.classList.add("ready");

        }else if(actual == 0){
            mensaje.innerHTML = "STOPPED";
            mensaje.classList.add("stop");
        }else{
            mensaje.innerHTML = "Under control";
            mensaje.classList.add("control");
        }
    }
}










