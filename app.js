//bloque de variable interna(numeroSecreto)-- funcion global generarNumeroSecreto
let numeroSecreto= 0;
let intentos= 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){//iNGRESA POR PARAMETRO DOS ELEMENTO
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){          //funcion trae ID del input
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {   //valida tanto el valor como el tipo ===
        asignarTextoElemento('p',`Acertaste el Numero Secreto!! en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El Numero secreto es menor');
        } else {
            asignarTextoElemento('p','El Numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
    
}
function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}
function reiniciarJuego(){
    limpiarCaja();
    //Indica mensaje de intervalo de numero
    condicionIniciales();
    //Genera nuevo numero secreto

    //Inicializa el numero de intentos
    //Deshabilita el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
 
condicionIniciales();
function generarNumeroSecreto(){//GENERA UN NUMERO ALEATORIO
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //Si ya salieron todos los numero sorteados(1 al 10)
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles en su rango');
    } else {
        //si el numero generado esta includo en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            //Busca en la lista el n°, llama a si mismo la misma funcion 
            return generarNumeroSecreto();
        } else {//agrega al final del array
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
} 
//llamo a la funcion e ingreso los parametros
function condicionIniciales(){
asignarTextoElemento('h1','Juego del numero secreto!');
asignarTextoElemento('p',`Ingresa un numero del 1 al ${numeroMaximo}!`);
numeroSecreto = generarNumeroSecreto();
intentos=1;
}
