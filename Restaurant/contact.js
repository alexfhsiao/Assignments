function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactForm"].elements.length; 
        loopCounter++) {
        if (document.forms["contactForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["contactForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function validateItems(){
    var error=false;
    clearErrors();
    if(document.forms["contactForm"]["name"].value==""){
        document.forms["contactForm"]["name"].parentElement.className ="form-group has-error";
        error=true;
    }
    if(document.forms["contactForm"]["email"].value==""){
        document.forms["contactForm"]["email"].parentElement.className ="form-group has-error";
        error=true;
    }
    if(document.forms["contactForm"]["phone"].value==""){
        document.forms["contactForm"]["phone"].parentElement.className ="form-group has-error";
        error=true;
    }

    if(document.forms["contactForm"]["information"].value==""){
        document.forms["contactForm"]["information"].parentElement.className ="form-group has-error";
        error=true;
    }
    if (error){
        alert("Please fill out all of the required fields");
    }
    if (error==false){
        alert("Thank you for contacting us. We will reach out to you shortly.")
    }
    return false;
}