
    const save = e =>{
        let username = document.getElementById("username").value;
       let password =  document.getElementById("password").value

         localStorage.setItem("username", JSON.stringify(username));
        localStorage.setItem("password", JSON.stringify(password));
        console.log(localStorage.getItem("username"));
        e.preventDefault();

    }

    function LogIn(){
        let usernameLog = document.getElementById("username").value;
        let passwordLog = document.getElementById("username").value;
        let username = localStorage.getItem("username");
        let password = localStorage.getItem("password");

        if(usernameLog == username && passwordLog == password){
            window.location.replace("http://www.w3schools.com");
        }
        else{
            let sumbi = document.getElementById("message");
            let nav = document.getElementById("nav");
            nav.style.backgroundColor = "red";
            submi.innerHTML = "OOPS...<br> Parece que tus credenciales son incorrectas!";
        }
        
    }
