
 const formLogin = document.getElementById('formulaLogin');
 const username = document.getElementById("user");
 const password =  document.getElementById("pass");
 let navigator = document.getElementById('message');

    //Comrpobando info
    formLogin.addEventListener('submit', (e)=>{
        e.preventDefault();

        let userStorage = JSON.parse(localStorage.getItem('usuario'));


        let usuario = username.value;
        let contra = password.value;


        if (userStorage) {
            if (userStorage.usuario == usuario && userStorage.contra == contra) {         
                console.log("los usuarios son iguales");
                location.href = "inicio/index.html"
            }
            else{
                console.log('no son iguales')
                navigator.innerHTML = "OOPS... parece que los datos son erroneos, revisa que todo este bien!"
            }
            
        }
        else{
            console.log('no account')
            navigator.innerHTML = "OOPS... parece que no tienes cuenta aun, crea una y luego inicia sesion!"
        }





    })




    

