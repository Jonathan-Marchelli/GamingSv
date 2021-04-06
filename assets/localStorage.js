  
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

        

