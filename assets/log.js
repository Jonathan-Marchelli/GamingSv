const formCreacuenta = document.getElementById('formula');
const username = document.getElementById("user");
const password =  document.getElementById("pass");


//Seteando usuario
formCreacuenta.addEventListener('submit', (e)=>{

       e.preventDefault();
        let userValue = {
             usuario: username.value,
             contra: password.value
        }


       localStorage.setItem('usuario', JSON.stringify(userValue)); 

       console.log(localStorage.getItem('usuario'));

   });


