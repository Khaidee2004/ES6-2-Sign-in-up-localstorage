 signup = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const num = document.getElementById("num").value;
    const pass = document.getElementById("pass").value;
    
    if(name == ""){
        alert("Enter Name");
    }
    
    else if(email == ""){
        alert("Enter Email");
    }
    
    else if(num == ""){
        alert("Enter Number");
    }
    
    else if(pass == ""){
        alert("Enter Password");
    }

    else{    
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("num",num);
        localStorage.setItem("pass",pass);
        window.location = "index.html";
    }
}

 login = () => {
    const email1 = document.getElementById("email1").value;
    const pass1 = document.getElementById("pass1").value;
    const emailget = localStorage.getItem("email");
    const passget = localStorage.getItem("pass");
    if(email1 == ""){
        alert("Enter Email");
    }
    else if(pass1 == ""){
        alert("Enter Password");
    }
    else{    
        if(email1 == emailget && pass1 == passget){
            window.location = "main.html";        
        }
        else
        {
            alert("Incorrect Email or Password");
        }
    }
}

let pname = localStorage.getItem("name");
document.getElementById("spName").innerHTML = pname;

let pemail = localStorage.getItem("email");
document.getElementById("spEmail").innerHTML = pemail;

let ppass = localStorage.getItem("pass");
document.getElementById("spPass").innerHTML = ppass;

let pnum = localStorage.getItem("num");
document.getElementById("spNum").innerHTML = pnum;