function validation() {
    var username = document.getElementById("uname");
    var password = document.getElementById("pwd");
    // Trim is used to remove empty spaces
    if (username.value.trim()== "" && password.value.trim() == "" ) {
      alert("Username or password  canot be blank!!");
     
      return false;
    } 
      else if(password.value.trim() == ""){
      //  alert("Username or password  canot be blank!!"); 
        document.getElementById("lblpwd").style.visibility="visible";
        password.style.border="solid 3px red";
        return false;
      }
      else if(username.value.trim() == ""){
        //  alert("Username or password  canot be blank!!"); 
          document.getElementById("lbluser").style.visibility="visible";
          username.style.border="solid 3px red";
          return false;
        }
    
    else if(password.value.trim().length<5){
        alert("password is too short")
        password.style.border="solid 3px red";
        return false;
    }
    else {
      return true;
    }
  }

//   function validation1(){
//     var username = document.getElementById("uname");
//     var password = document.getElementById("pwd");

//     if(username.value.trim().length)

//   }