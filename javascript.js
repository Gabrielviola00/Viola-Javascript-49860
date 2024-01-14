let login = prompt('Bienvenido a Banco ciudad indique su apellido y nombre para poder registrarse')
let palabras = login.split(' ') 
    
    if (palabras.length === 1){
        alert('Recuerde ingresar su apellido y nombre completo')
        alert('Para volver a intentarlo debe recargar la página')
        
    }
     
   else if (palabras.length > 1) {

    for (i=5 ;i<6 && i > -1;i --){
        alert(`Aguarde ${i} segundos`)
    }
        let contraseña = prompt('indique una contraseña porfavor')

        alert(`Bienvenido/a ${login}`)   
        
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

    
    



