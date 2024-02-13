/*BOTÓN REGISTRARSE */

let botonRegistro = document.querySelector(".boton-registrarse")
let botonIniciarSesion = document.querySelector(".boton-iniciar-sesion")
let contenedorLogin = document.querySelector(".login")

const contenedorFormularioRegistrarse = document.querySelector(".contenedor-formulario-registrarse")
const contenedorFormularioIniciarSesion = document.querySelector(".contenedor-formulario-iniciar-sesion")

let inputNombreApellidoRegistrarse;
let inputContraseñaRegistrarse;
let botonRegistrarse;



function crearFormularioRegistrarse(){


inputNombreApellidoRegistrarse = document.createElement('input')
inputNombreApellidoRegistrarse.className= 'input-nombre-apellido';
inputNombreApellidoRegistrarse.type = 'text';
inputNombreApellidoRegistrarse.placeholder = 'NOMBRE USUARIO'

inputContraseñaRegistrarse= document.createElement('input')
inputContraseñaRegistrarse.className= 'input-contraseña';
inputContraseñaRegistrarse.type='password'
inputContraseñaRegistrarse.placeholder= 'CONTRASEÑA'

botonRegistrarse = document.createElement('button')
botonRegistrarse.className= 'boton-registrarse-iniciar'
botonRegistrarse.textContent= 'CONFIRMAR'

contenedorFormularioRegistrarse.innerHTML = ''; 
contenedorFormularioRegistrarse.appendChild(inputNombreApellidoRegistrarse);
contenedorFormularioRegistrarse.appendChild(inputContraseñaRegistrarse)
contenedorFormularioRegistrarse.appendChild(botonRegistrarse)


botonRegistrarse.addEventListener('click', function () {
    if(inputNombreApellidoRegistrarse.value.length > 6 && inputContraseñaRegistrarse.value.length>7){
    const usuario = {
        nombreApellido: inputNombreApellidoRegistrarse.value,
        contraseña: inputContraseñaRegistrarse.value
    };
    localStorage.setItem('Usuario', JSON.stringify(usuario));
    contenedorFormularioRegistrarse.innerHTML = ''; 
} else {alert('SU USUARIO Y CONTRASEÑA DEBEN CONTENER AL MENOS 7 CARACTERES')}}); 
}

botonRegistro.addEventListener('click', function () {
    crearFormularioRegistrarse();

});





/*BOTÓN REGISTRARSE */

/*BOTON INICIAR SESION*/

let inputNombreApellidoIniciar;
let inputContraseñaIniciar;
let botonIngresar2;
let usuarioGuardado;

function crearFormularioIniciarSesion(){


    inputNombreApellidoIniciar = document.createElement('input')
    inputNombreApellidoIniciar.className= 'input-nombre-apellido';
    inputNombreApellidoIniciar.type = 'text';
    inputNombreApellidoIniciar.placeholder = 'NOMBRE USUARIO'
    
    inputContraseñaIniciar= document.createElement('input')
    inputContraseñaIniciar.className= 'input-contraseña';
    inputContraseñaIniciar.type='password'
    inputContraseñaIniciar.placeholder= 'CONTRASEÑA'
    
    botonIngresar2 = document.createElement('button')
    botonIngresar2.className= 'boton-iniciar'
    botonIngresar2.textContent= 'INGRESAR'
    
    contenedorFormularioIniciarSesion.innerHTML = ''; 
    contenedorFormularioIniciarSesion.appendChild(inputNombreApellidoIniciar);
    contenedorFormularioIniciarSesion.appendChild(inputContraseñaIniciar)
    contenedorFormularioIniciarSesion.appendChild(botonIngresar2)
    
    
    

    botonIngresar2.addEventListener('click', function () {
         const usuarioGuardado = JSON.parse(localStorage.getItem('Usuario'));
            if (usuarioGuardado) {         
                const nombreApellidoIngresado = inputNombreApellidoIniciar.value;
                const contraseñaIngresada = inputContraseñaIniciar.value;
            if (nombreApellidoIngresado === usuarioGuardado.nombreApellido && contraseñaIngresada === usuarioGuardado.contraseña) {
                alert('Inicio de sesión exitoso');
                window.location.href = "/páginas/usuario.html"
            } else {
                alert('Nombre de usuario o contraseña incorrectos');
                
            }
        } else {
            alert('No hay usuario registrado');
        }
    });
    }

    botonIniciarSesion.addEventListener('click',function(){crearFormularioIniciarSesion()})
/*BOTON INICIAR SESION*/