
const nombreCompleto = prompt('Bienvenido a Banco ciudad indique su apellido y nombre para poder registrarse')
let palabras = nombreCompleto.split(' ') 
    
    if (palabras.length === 1){
        alert('Recuerde ingresar su apellido y nombre completo')
        alert('Para volver a intentarlo debe recargar la página')
        
    }
     
   else if (palabras.length > 1) {

    for (i=5 ; i > 0 ;i --){
        alert(`Presione la tecla ENTER ${i} veces `)
    }

    
        const contraseña = prompt('indique una contraseña porfavor')

        alert(`Bienvenido/a ${nombreCompleto}`)   
        
        let intentos = 3



        while (intentos > 0) {

        let ingresar = prompt ('ingrese su contraseña porfavor') 
     
        if(contraseña === ingresar) {
            alert ('Has ingresado exitosamente')
            alert('Para una total activación de cuenta debe realizar 3 depósitos de dinero')
            
            let saldo = 0
          
            function depositar() {
                let deposito;
            
                do {
                    deposito = Number(prompt('Indique el monto que desea depositar:'));
            
                    if (isNaN(deposito) || deposito < 0) {
                        alert('Por favor, ingrese un monto válido y no negativo.');
                    } else {
                        saldo += deposito;
                        alert(`Depósito exitoso. Su saldo actual es de $${saldo}.`);
                    }
                } while (isNaN(deposito) || deposito < 0);
            }

            function consultarSaldo() {
                alert(`Su saldo actual es de $${saldo} la activación total de su cuenta se ha realizado correctamente.`);
            } 

            depositar();
            depositar();
            depositar();
            consultarSaldo();

            break; 

        } else {
            alert(`Te quedan ${intentos - 1 } antes de que tengas que volver a crear un usuario`);
            intentos -- ;
            
           
            } 
        }

        if(intentos==0) {
            alert ('has agotado todos los intentos debes crear un nuevo usuario') 
        }

        
    }

    

    function completarDatos() {
        alert('Llegando a este punto es necesario que completes todos los datos para elevar el nivel de proteccion de tu cuenta')
        datoRegistradoConExito = false

           while(! datoRegistradoConExito){

       const email = prompt("Necesitamos una direccion de email para enviar información")
       let letraBuscada = ["@", ".", ".com" ]       

            if( letraBuscada.every(letra => email.includes(letra)) && email.length > 8) {
                alert("hemos enviado un correo a su email, verifique su casilla de Spam porfavor") ; break
            } 
            else {
                alert(` El correo ingresado es inválido, debe contener al menos un "@", 8 dígitos y terminar en ".com" `)
            }}

            
            while(! datoRegistradoConExito){

        const dni = prompt('Ingrese su número de DNI')

            if( !isNaN(dni) === true && dni.length === 8) {
                alert("Su numero de DNI a sido registrado correctamente") ;break
            }
            else {
                alert("La cantidad de dígitos ingresados no correcponde a un número de DNI válido")
            }}


    }
    

    completarDatos() 

    class inversion {
        constructor(nombre, interesAnual, diasDeRetencion) {
            this.nombre = nombre;
            this.interesAnual = interesAnual;
            this.diasDeRetencion = diasDeRetencion;
            this.info = `El ${nombre} brinda un interes anual del ${interesAnual},al seleccionar este tipo de inversion debe tener en cuenta que su dinero estará fuera de su disponibilidad por los siguientes ${diasDeRetencion} días.`
        }
    }
    
    const plazoFijo = new inversion ("Plazo fijo", " 100%", 30)
    const uva = new inversion("Plazo fijo UVA", "120%", 90)
    const dineroDisponible = new inversion ("Cuenta Movimiento", "50%" ,5)
    
    
    function muestraDeServicios(){
        alert("Contamos con distintas opciones para puedas generar intereses sobre el dinero que guardes con nosotros")
        let decision = Number (prompt("1- Quiero mas info \n 2-Quiero comenzar a invertir"))
        
        while(decision === 1 ){
        
          let oferta = Number(prompt(`INVERSIONES DISPONIBLES: \n 1-${plazoFijo.nombre} \n 2- ${uva.nombre} \n 3-${dineroDisponible.nombre} \n 4- Iniciar inversion`))
        
            if(oferta === 1){
                alert(`${plazoFijo.info} `)
            }
            else if (oferta === 2){
                alert(`${uva.info} `)
            }
            else if (oferta === 3){
                alert(`${dineroDisponible.info} `)
            }
            else if (oferta === 4) {
                alert("Bueno profe, creo que hasta acá mi algoritmo cumple con las consignas requeridas para la entrega numero 2, seguiré avanzando en el desarrollo de la opción 2 a medida que aprendamos nuevas herramientas") ; break
            }
        }
    
        if (decision === 2) {
            alert("Bueno profe, creo que hasta acá mi algoritmo cumple con las consignas requeridas para la entrega numero 2, seguiré avanzando en el desarrollo de la opción 2 a medida que aprendamos nuevas herramientas")
        }
    
        else if (decision != 1 && decision !=2){
            alert("El dato ingresado no corresponde deberá volver a ingresar a su cuenta")
        }
           
    }
    
    muestraDeServicios()
    

