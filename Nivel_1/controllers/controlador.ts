// FUNCIONES CON LAS QUE INTERACTUA EL USUARIO


// se crean dos variables, una con 3 propulsores y las potencias máximas y otra variable con 6 propulsores y las potencias máximas de cada propulsor
var potencias1 = [10,30,80];
var potencias2 = [30,40,50,50,30,10];

// se tienen dos variables de clase Cohete, una para cada uno de los dos cohetes 
var cohete1:Cohete;
var cohete2:Cohete;
// se tiene otra variable de tipo array en la que se subirá y almacenará la información de los cohetes que se vayan creando
var cohetes:Cohete[]= new Array(); //infinitos cohetes



/****************************INTERACCIONES QUE PUEDE HACER EL USUARIO CON LA INTERFAZ*********************/

// CREAR COHETES. En este caso se han definido los dos cohetes predeterminados
function crearCohete1(){
    cohete1 = new Cohete('32WESSDS', potencias1); //parámetros que recibe la variable 'cohete1' de la clase 'Cohete'
    console.log(cohete1);
    cohetes.push(cohete1); //subir cohete1 al array de cohetes
}

function crearCohete2(){
    cohete2 = new Cohete('LDSFJA32', potencias2 );
    console.log(cohete2);
    cohetes.push(cohete2); //subir cohete al array de cohetes
}


// ACCELERAR COHETES. 
function accelera1() {
    cohete1.accelerar(); //el cohete1 llama al método 'accelerar' de la clase 'Cohete'
    imprime1(); // llama a la función para imprimir por pantalla los datos
}

function accelera2() {
    cohete2.accelerar();
    imprime2();
}


// FRENAR COHETES. Misma dinámica que 'accelerar' pero llamando al métod 'frenar' de la clase 'Cohete'
function frena1() {
    cohete1.frenar();
    imprime1();
} 

function frena2() {
    cohete2.frenar();
    imprime2();
} 


// MOSTRAR DATOS POR PANTALLA. 
function imprime1() {
    let info = document.getElementById("infoR1");
    if(info){
        info.innerHTML = cohete1.mostrarInfo() ;
    }
}

function imprime2() {
    let info = document.getElementById("infoR2");
    if(info){
        info.innerHTML = cohete2.mostrarInfo();
    }
}

function imprimirTodos(){
    let info = document.getElementById("todos");
    if(info){
        info.innerHTML = "";
        for(let i=0; i < cohetes.length; i++){
            info.innerHTML += cohetes[i].mostrarInfo() + "<br><br>";
        }
    }
}

function refreshTodos(){
    let refresh = document.getElementById("todos");
    if(refresh){
        
        refresh.innerHTML = cohete1.mostrarInfo() + "<br><br>" + cohete2.mostrarInfo();
        
    }
}










