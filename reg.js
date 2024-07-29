function validation(){
    var firstName=document.getElementById("fname");
    var lastName=document.getElementById("lname");
    var email=document.getElementById("email");
    var number=document.getElementById("phone");
    var password=document.getElementById("pass");
    var ConfirmPassword=document.getElementById("cpass");
    
    var regx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(firstName.value.trim()=="" || lastName.value.trim()=="" || email.value.trim()=="" || number.value.trim()==""
    || password.value.trim()=="" || ConfirmPassword.value.trim()==""){
        alert("Values cannot be empty!");
        return flase;
    }else if(password.value.trim().length<5){
        alert("password length should be minimu 6 charecters!");
        password.style.border="solid 3px red";
        return false;

    }
    else if(password.value.trim().length!=ConfirmPassword.value.trim().length){
       // alert("Password does not match!");
        ConfirmPassword.style.border="solid 3px red";
        document.getElementById("lblpsw").style.visibility="visible";
        return false;
    }
    else if(number.value.trim().length!=10){
        number.style.border="solid 3px red";
        document.getElementById("lblmob").style.visibility="visible";
        return false;
    }

    else{
        true;
        
    }


        if(regx.test(email.value.trim())){
            email.style.border="solid 3px green";
            return true;

        }else{
            document.getElementById("lblemail").style.visibility="visible";
            email.style.border="solid 3px red";
            return false;
        }

    
    
    }

        