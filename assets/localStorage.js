
    const save = e =>{
        let DataFromForms = {
           UserName: document.getElementById("username").value,
           Password: document.getElementById("password").value
        }

        localStorage.setItem("DataFromForms", JSON.stringify(DataFromForms));
        console.log(localStorage.getItem("DataFromForms"));
        e.preventDefault();

    }

    function LogIn(){
        let log = false;
        alert("uiii");

        if(log == true ){
            window.location.replace("http://www.w3schools.com");
        }
        
    }
