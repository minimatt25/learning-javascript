let basketNum = 0;
let basketVal = 0;

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

function addToB(clickedID){

    //items in the basket
    basketNum+=1;
    console.log(basketNum);
    if(basketNum!=1){
        document.getElementById("items").innerHTML = "there are " + basketNum + " items in your basket.";
    } else{
        document.getElementById("items").innerHTML = "there is " + basketNum + " item in your basket.";
    }

    //price of items overall
    document.getElementById("ID").innerHTML = "ID is " + clickedID;
    
    if(clickedID == "Invincible c1" || clickedID == "Invincible c2" || clickedID == "Invincible c3"){
        basketVal+=39.99;
    } else if(clickedID == "Secret invasion" || clickedID == "Civil war" || clickedID == "long halloween"){
        basketVal+=20;
    } else if(clickedID == "year one"){
        basketVal+=10;
    } else if(clickedID == "Watchmen"){
        basketVal+=25;
    }
    console.log(basketVal);
    document.getElementById("cost").innerHTML = "Price = £" + (Math.round(basketVal * 100) / 100).toFixed(2);
}