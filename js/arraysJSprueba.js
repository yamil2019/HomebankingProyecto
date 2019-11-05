// EJERCICIO DE UN ARRAY CON LA CANTIDAD DE MESES
var meses = ["Enero", "febrero","marzo", "abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
var ingreso = prompt("escriba el mes solicitado");
var S = meses [--ingreso];
console.log(S);
alert(S);


// ejercicio de una lista

var lista = [0,1];
var largo = lista.length;
lista.push(3);// envia al final
lista.pop(); // devuelve

lista.shift(); // quita algo y se define por parametro
lista.unshift(); // agrega algo y se define por parametro

lista.indexOf(); // busca la posicion

var miArreglo = Array(1,2,3);
var otroArray = [1,"mati",null]; //dentro de corchetes defino que va ir
var sacandoArreglo = otroArray[4];
console.log(otroArray[4][1]);  //dentro de corchetes llamo al array se ejecute dependiente la posicion que le demos

// 1 defijo la variable sobre la que voy a iterar
// 2 defino la condicion de corte
// 3 incremento sobre la que estoy iterando

for (var i = 0; i < otroArray.length; i++) {
    console.log("en el for, pepito valdria:", otroArray[1]);
}