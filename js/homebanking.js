//Declaración de variables
var nombreUsuario = "Yamil Diaz";
var saldoCuenta = 1000;
var limiteExtraccion = 5000;
var depositarPlata;
var cantidadDinero;
var cantidadDineroDepositado;
var nuevoLimite;
var servicioAgua = 350;
var servicioTelefono = 425;
var servicioLuz = 210;
var servicioInternet = 570;
var eleccionServicio;
var servicio = "";
var monto;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var montoTransferir;
var codigoSeguridad = 4444;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}


//Funciones que tenes que completar
function sumarDinero(num1, num2) {
    return num1 + num2;

}
function restarDinero(monto) {
    if (monto < saldoCuenta) {
        saldoCuenta = saldoCuenta - monto;
    }

}

function cambiarLimiteDeExtraccion() {
    nuevoLimite = prompt("Ingrese el nuevo limite de extraccion");
    limiteExtraccion = parseInt(nuevoLimite);
    actualizarLimiteEnPantalla(alert("Nuevo limite de extraccion establecido")); // TODO: no enviar alert por parametro

}


function extraerDinero() {
    cantidadDinero = parseInt(prompt("Cantidad de dinero que desea extraer?"));
    console.log("numero valido");
    if (Number.isNaN(parseInt(cantidadDinero)) || cantidadDinero === "" || cantidadDinero === null) {
        alert("Opcion invalida, intentelo de nuevo.");
        return
    }
    if (cantidadDinero % 100 != 0) {
        alert("Este cajero solo entrega billetes de 100");
        return;
    }
    var saldoParaRestar = saldoCuenta;

    if (cantidadDinero > nuevoLimite) {
        console.log("exede su limite");
        alert("Exede su limite de extraccion");
        return;
    } else if (saldoCuenta < cantidadDinero) {
        console.log("no posee saldo");
        alert("no posee esa cantidad de saldo en su cuenta");
        return;
    } else {
        console.log("restar dinero de la cuenta")
        restarDinero(cantidadDinero);
        actualizarSaldoEnPantalla();
        alert("Saldo anterior " + "$" + saldoParaRestar + "\n" + "Dinero extraido " + "$" + cantidadDinero + "\n" + "Saldo actual " + "$" + saldoCuenta);
    }
}

function depositarDinero() {
    cantidadDinero = parseInt(prompt("Cantidad de dinero que desea depositar?"));
    if (Number.isNaN(parseInt(cantidadDinero)) || cantidadDinero === "" || cantidadDinero === null) {
        alert("Opcion invalida, intentelo de nuevo.");
        return;
    }
    var saldoInicial = saldoCuenta;
    saldoCuenta = sumarDinero(saldoCuenta, parseInt(cantidadDinero));
    console.log();
    actualizarSaldoEnPantalla();
    alert("Saldo anterior " + "$" + saldoInicial + "\n" + "Dinero depositado " + "$" + cantidadDinero + "\n" + "Saldo actual " + "$" + saldoCuenta);
        return;
}


function pagarServicio() {
    eleccionServicio = parseInt(prompt("Indique el numero de servicio que desea pagar" + "\n" + "1 - Agua" + "\n" + "2 - Telefono" + "\n" + "3 - Luz" + "\n" + "4 - Internet"));
    if (Number.isNaN(parseInt(eleccionServicio)) || eleccionServicio === "" || eleccionServicio === null) {
        alert("La opcion elegida no es valida");
        return
    }
    var saldoAnterior = saldoCuenta;
    console.log("cargo un numero valido");
    switch (eleccionServicio) {
        case 1:
            servicio = "Agua";
            if (saldoCuenta > servicioAgua) {
                restarDinero(servicioAgua);
                console.log("se resto el dinero del saldo de la cuenta por impuesto del Agua");
                alert("Has pagado el servicio de internet" + "\n" + "Saldo anterior" + "$ " + saldoAnterior + "\n" + "Dinero descontado " + "$" + servicioAgua + "\n" + "Saldo Actual " + "$" + saldoCuenta);
                actualizarSaldoEnPantalla();
            } else {
                alert("saldo insuficiente para realizar la siguiente operacion");
            }
            break;
        case 2:
            servicio = "Telefono";
            if (servicioTelefono < saldoCuenta) {
                restarDinero(servicioTelefono);
                console.log("se resto el dinero del saldo de la cuenta por impuesto del Telefono");
                alert("Has pagado el servicio de internet" + "\n" + "Saldo anterior" + "$ " + saldoAnterior + "\n" + "Dinero descontado " + "$" + servicioTelefono + "\n" + "Saldo Actual " + "$" + saldoCuenta);
                actualizarSaldoEnPantalla();
            } else {
                alert("saldo insuficiente para realizar la siguiente operacionn");
            }
            break;
        case 3:
            servicio = "Luz";
            if (servicioLuz < saldoCuenta) {
                restarDinero(servicioLuz);
                console.log("se resto el dinero del saldo de la cuenta por impuesto de la Luz");
                alert("Has pagado el servicio de internet" + "\n" + "Saldo anterior" + "$ " + saldoAnterior + "\n" + "Dinero descontado " + "$" + servicioLuz + "\n" + "Saldo Actual " + "$" + saldoCuenta);
                actualizarSaldoEnPantalla();
            } else {
                alert("saldo insuficiente para realizar la siguiente operacionnn");
            }
            break;
        case 4:
            servicio = "internet";
            if (servicioInternet < saldoCuenta) {
                restarDinero(servicioInternet);
                console.log("se resto el dinero del saldo de la cuenta por impuesto del Internet");
                alert("Has pagado el servicio de internet" + "\n" + "Saldo anterior" + "$ " + saldoAnterior + "\n" + "Dinero descontado " + "$" + servicioInternet + "\n" + "Saldo Actual " + "$" + saldoCuenta);
                actualizarSaldoEnPantalla();
            } else {
                alert("saldo insuficiente para realizar la siguiente operacionnnn");
            }
            break;

        default:
            alert("no ingreso una de las opciones validadas por el homebanking")
            break;
    }
}

function transferirDinero() {
    montoTransferir = parseInt(prompt("Ingrese el monto que desea transferir"));
    if (montoTransferir > saldoCuenta || montoTransferir === null || Number.isNaN(montoTransferir)) {
        console.log("Ingrese un monto valido");
        alert("No se puede transferir el monto solicitado");
        return
    } else {
        var cuentaAIngresar = parseInt(prompt("Ingrese el numero de cuenta a la que desea transferir"));
        if (cuentaAmiga1 == cuentaAIngresar) {
            restarDinero(montoTransferir);
            alert("Se han transferido: " + "$" + montoTransferir + "\n" + "Cuenta destino: " + cuentaAmiga1);
            actualizarSaldoEnPantalla();
            console.log("cuenta valida 1");
        } else if (cuentaAmiga2 == cuentaAIngresar) {
            restarDinero(montoTransferir);
            alert("Se han transferido: " + "$" + montoTransferir + "\n" + "Cuenta destino: " + cuentaAmiga2);
            actualizarSaldoEnPantalla();
            console.log("cuenta valida 2");
        } else {
            console.log("cuenta no valida");
            alert("Ingreso una cuenta no valida");
        }
    }
}

function iniciarSesion() {
    var ingresarCodigo = parseInt(prompt("Ingrese el codigo de seguridad"));
    if (ingresarCodigo == codigoSeguridad) {
        console.log("ingreso valido");
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones");
    } else if(ingresarCodigo!==codigoSeguridad) {
        saldoCuenta = 0;
        alert("codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
        console.log("ingreso invalido");
        actualizarSaldoEnPantalla();
    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {


    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}


