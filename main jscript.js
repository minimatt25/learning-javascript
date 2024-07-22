function changeText(){
    document.getElementById("buttonChange").innerHTML = "the button worked";
}

function promptTemp(){
    let tempC = prompt("please enter your temp in celcius:", 20);
    if (tempC!=null){
        document.getElementById("tempChange").innerHTML = tempC + " Celcius in Farrenheit is " + Math.round((tempC*9/5) + 32);
    }
}

function outputUP(){
    const usernameInput = document.getElementById("user");
    const passwordInput = document.getElementById("pass");
    const username = usernameInput.value;
    const password = passwordInput.value;
    document.getElementById("userPass").innerHTML = "your username is " + username + " and your password is " + password;
}