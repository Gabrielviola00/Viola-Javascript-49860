/*FUNCION COMPLETAR DATOS*/ 
let BotonActualizarDatos = document.getElementById('actualizar-datos')

let contenedorNombreApellido = document.getElementById('nombre-apellido')
let contenedorContraseña= document.getElementById('contenedor-contraseña')
let contenedorDni= document.getElementById('contenedor-dni')
let contenedorCorreo = document.getElementById('contenedor-correo')

let inputDni = document.getElementById('input-ingresar-dni')
let inputCorreo = document.getElementById('input-ingresar-correo')

BotonActualizarDatos.addEventListener('click', function () {
    const usuarioGuardado = JSON.parse(localStorage.getItem('Usuario'));
    const nombreApellido = usuarioGuardado.nombreApellido
    const contraseña= usuarioGuardado.contraseña
    
    contenedorNombreApellido.textContent = `USUARIO: ${nombreApellido}`
    contenedorContraseña.textContent = `CONTRASEÑA: ${contraseña}`

    contenedorDni.textContent =`DNI: ${inputDni.value}`

     

    let letrasBuscadas = ["@", ".com"];

    if (letrasBuscadas.every(letra => inputCorreo.value.includes(letra)) && inputCorreo.value.length > 8) {
        Swal.fire({
            icon: "éxito",
            title: "SU CORREO ELECTRÓNICO A SIDO REGISTRADO ÉXITOSAMENTE",
            customClass: {
                popup: 'mi-clase-popup'
            
            
        }})
        contenedorCorreo.textContent = `CORREO: ${inputCorreo.value}`;
    } else {

        Swal.fire({
            icon: "error",
            title: 'El correo ingresado es inválido. Debe contener al menos un "@" y ".com", y tener más de 8 caracteres.',
            customClass: {
                popup: 'mi-clase-popup'
            
            
        }})
        contenedorCorreo.textContent = 'EMAIL SIN REGISTRAR';
    }
    
}); 


/*FUNCION COMPLETAR DATOS*/ 




/*FUNCION DEPOSITO Y EXTRACCION DE DINERO */
let contenedorDeposito =document.getElementById('contenedor-deposito')
let contenedorExtraccion =document.getElementById('contenedor-extraccion')

let botonDeposito = document.getElementById('boton-depositar')
let botonExtraccion = document.getElementById('boton-retirar')

let contenedorSaldo = document.getElementById('saldo')
contenedorSaldo.textContent = '  $0'
let saldo = 0;

function depositoExtraccion() {
    botonDeposito.addEventListener('click', function() {
        let deposito = Number(contenedorDeposito.value.replace(/[^0-9]/g, '')); // Filtra caracteres no numéricos
        if (!isNaN(deposito)) {
            saldo += deposito;
            contenedorSaldo.textContent = ` $${saldo}`;
        } else {
            Swal.fire({
                icon: "error",
                title: 'Por favor, ingrese un valor numérico válido para el depósito.',
                customClass: {
                    popup: 'mi-clase-popup'
                }
            });
        }
    });

    botonExtraccion.addEventListener('click', function() {
        let extraccion = Number(contenedorExtraccion.value.replace(/[^0-9]/g, '')); // Filtra caracteres no numéricos
        if (!isNaN(extraccion)) { 
            if (saldo - extraccion < 0) {
                Swal.fire({
                    icon: "error",
                    title: 'No tienes saldo suficiente.',
                    customClass: {
                        popup: 'mi-clase-popup'
                    }
                });
            } else {
                saldo -= extraccion;
                contenedorSaldo.textContent = ` $${saldo}`;
            }
        } else {
            Swal.fire({
                icon: "error",
                title: 'Por favor, ingrese un valor numérico válido para la extracción.',
                customClass: {
                    popup: 'mi-clase-popup'
                }
            });
        }
    });
}


depositoExtraccion()

/*FUNCION DEPOSITO Y EXTRACCION DE DINERO */

/*INVERSIONES*/
class inversion {
    constructor(nombre, interes, diasDeRetencion) {
        this.nombre = nombre;
        this.interes = interes;
        this.diasDeRetencion = diasDeRetencion;
        this.info = `El ${nombre} brinda un interes anual del ${interes}%, al seleccionar este tipo de inversion debe tener en cuenta que su dinero estará fuera de su disponibilidad durante ${diasDeRetencion} días.`
    }
}

const plazoFijo = new inversion ("Plazo fijo", 200, 30)
const uva = new inversion("Plazo fijo UVA", 600, 90)
const dineroEnMovimiento = new inversion ("Cuenta Movimiento", 3 , 2)

let contenedorInfoPlazoFijo = document.getElementById('plazo-fijo')
let contenedorInfoUva = document.getElementById('uva')
let contenedorInfoDineroEnMovimiento= document.getElementById('dinero-en-movimiento')

let botonCargarInversiones= document.querySelector('.boton-inversiones')

let inputPlazoFijo = document.getElementById('input-plazo-fijo')
let inputUva = document.getElementById('input-uva')
let inputMovimiento = document.getElementById('input-movimiento')

let botonPlazofijo= document.getElementById('boton-calcular-plafo-fijo')
let botonUva= document.getElementById('boton-calcular-uva')
let botonDineroEnMovimiento= document.getElementById('boton-calcular-dinero')

let contenedorRendimientoPlazoFijo= document.getElementById('contenedor-rendimiento-plazo-fijo')
let contenedorRendimientoUva= document.getElementById('contenedor-rendimiento-uva')
let contenedorRendimientoDinero= document.getElementById('contenedor-rendimiento-dinero')

function cargarInversiones(){
    botonCargarInversiones.addEventListener('click',function(){
    contenedorInfoPlazoFijo.textContent= plazoFijo.info
    contenedorInfoUva.textContent=uva.info
    contenedorInfoDineroEnMovimiento.textContent=dineroEnMovimiento.info
    })
}

cargarInversiones()

function calcularRendimientos(){
    botonPlazofijo.addEventListener('click',function(){
        let rendimiento = (inputPlazoFijo.value * plazoFijo.interes) / 100 
        let info = `Al finalizar los ${plazoFijo.diasDeRetencion} días el rendimiento obtenido será de $${rendimiento}`;

        contenedorRendimientoPlazoFijo.textContent= info
    })

    botonUva.addEventListener('click',function(){
        let rendimiento = (inputUva.value * uva.interes) / 100 
        let info = `Al finalizar los ${uva.diasDeRetencion} días el rendimiento obtenido será de $${rendimiento}`;

        contenedorRendimientoUva.textContent= info
    })

    botonDineroEnMovimiento.addEventListener('click',function(){
        let rendimiento = (inputMovimiento.value * dineroEnMovimiento.interes) / 100 
        let info = `Al finalizar los ${dineroEnMovimiento.diasDeRetencion} días el rendimiento obtenido será de $${rendimiento}`;

        contenedorRendimientoDinero.textContent= info
    })
}

/*Le escribo un comentario acá, no junté todos los eventos en una misma funcion con parámetros porque me exigía calcular los redimientos en orden*/ 
calcularRendimientos()

/*INVERSIONES*/ 

//USO DE PROMESAS, FETCH Y JSON

let contenedorOfertaDeposito = document.querySelector(".contenedor-promocion");



fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        
        let imagenOferta = document.createElement('img');
        let imagenOferta2 = document.createElement('img')
        
        imagenOferta.src = json[0].image;
        imagenOferta.className = 'imagen-api'

        imagenOferta2.src= json[1].image;
        imagenOferta2.className = 'imagen-api'
        
        contenedorOfertaDeposito.appendChild(imagenOferta);
        contenedorOfertaDeposito.appendChild(imagenOferta2);
    })
    
    .catch(error => {
        console.error('Error al cargar promociones', error);
    });

//USO DE PROMESAS, FETCH Y JSON