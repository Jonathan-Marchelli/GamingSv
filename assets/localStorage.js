
    // const save = e =>{
    //     let username = document.getElementById("username").value;
    //    let password =  document.getElementById("password").value

    //      localStorage.setItem("username", JSON.stringify(username));
    //     localStorage.setItem("password", JSON.stringify(password));
    //     console.log(localStorage.getItem("username"));
    //     console.log(localStorage.getItem("password"));
    //     e.preventDefault();

    //     let usernameLog = document.getElementById("username").value;
    //     let passwordLog = document.getElementById("username").value;
    //     let username = localStorage.getItem("username").value;
    //     let password = localStorage.getItem("password");

    //     console.log(localStorage.getItem("username"));
    //     console.log(localStorage.getItem("password"));

    //     if(usernameLog == username ){
    //         window.location.replace("http://www.w3schools.com");
    //     }
    //     else{
    //         let sumbi = document.getElementById("message");
    //         let nav = document.getElementById("nav");
    //         nav.style.backgroundColor = "red";
    //         submi.innerHTML = "OOPS...<br> Parece que tus credenciales son incorrectas!";
  
    function logIn(){
        if(localStorage){
            //alert("hi")
            let username = document.getElementById("username").value;
            let password =  document.getElementById("password").value;
    
            let user = localStorage.setItem("username", JSON.stringify(username));
            let pass = localStorage.setItem("password", JSON.stringify(password));
    
            console.log(localStorage.getItem("username"));
            console.log(localStorage.getItem("password"));
            
            if(user == username){
                alert("hi");
            }
    
        }



    }

        

