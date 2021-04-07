 
 const username = document.getElementById("user");
 const password =  document.getElementById("pass");

     function submitted(e) {
        e.preventDefault();
        let users = Array(
            {
                usuario: username.value,
                contra: password.value

            }
        );
        localStorage.setItem('usuario', JSON.stringify(users)); 
        console.log(localStorage.getItem('usuario'));
        console.log(users);
    };

        

