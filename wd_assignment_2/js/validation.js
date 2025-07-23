function validate()
{
    var naam = document.getElementById('name').value;
    var pascode = document.getElementById('password').value;
    var repascode = document.getElementById('rpassword').value;
    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;
    var email = document.getElementById('email').value;
    var phonum = document.getElementById('phone').value;
    var dateofbirth = document.getElementById('dob').value;
    var icecream = document.getElementById('icecream').value;

    var error = "";
    var result = true;

    if (naam == "")
    {
        error += "You need to put in the name\n"
    }
    if((pascode.length < 9) && (pascode != ""))
    {
        error+="Password must be longer than 9 characters\n"
    }
    if(pascode == "")
    {
        error+= "Please put in a passcode\n"
    }
    if(repascode == "")
    {
        error+= "Please retype the password to make sure\n"
    }
    if(pascode != repascode)
    {
        error+="Passwords don't match\n"
    }
    if((male == "")&&(female == ""))
    {
        error += "Enter your gender\n"
    }
    if(email == "")
    {
        error+= "Enter your email\n"
    }
    if(phonum == "")
    {
        error+= "Enter your phone number\n"
    }

    if(dateofbirth == "")
    {
        error+= "Enter date of birth\n"
    }
    if(icecream == "select")
    {
        error+="Enter your favorite ice cream flavour\n"
    }
    if (error != "")
    {
        alert(error);
        result = false;
    }
    if(error == "")
    {
        alert("We are done. Thank you for registering.");
    }
    return result;

}






function init()
{

    var register = document.getElementById('register');
    register.onsubmit = validate;
    

}


window.onload = init;