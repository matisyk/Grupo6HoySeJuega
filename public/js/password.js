let state = true;
let password = document.getElementById("password");
let passwordStrength = document.getElementById("password-strength");
let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");

password.addEventListener("keyup", function (){
    let pass = document.getElementById("password").value;
    checkStrength(pass);
});

function toggle() {
    if (state) {
        document.getElementById("password").setAttribute("type",
        "password");
        state = false;
    } else {
        document.getElementById("password").setAttribute("type",
        "text")
        state = true;
    }
}

function myFunction(show) {
    show.classList.toggle("fa-eye-slash");
}

function checkStrength(password) {
    let strength = 0;

    //si tiene mayúsculas y minúsculas
    if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength += 1;
        lowUpperCase.classList.remove("fa-circle");
        lowUpperCase.classList.add("fa-check");
    } else {
        lowUpperCase.classList.add("fa-circle");
        lowUpperCase.classList.remove("fa-check");
    }
    //si tiene números y letras
    if(password.match(/([0-9])/)){
        strength += 1;
        number.classList.remove("fa-circle");
        number.classList.add("fa-check");
    } else {
        number.classList.add("fa-circle");
        number.classList.remove("fa-check");
    }
    //si tiene algún caracter especial
    if(password.match(/([!, %, &, @, #, $, *, ?, _, ~, ^])/)){
        strength += 1;
        specialChar.classList.remove("fa-circle");
        specialChar.classList.add("fa-check");
    } else {
        specialChar.classList.add("fa-circle");
        specialChar.classList.remove("fa-check");
    }
    //si tiene más de siete caracteres
    if(password.length > 7){
        strength += 1;
        eightChar.classList.remove("fa-circle");
        eightChar.classList.add("fa-check");
    } else {
        eightChar.classList.add("fa-circle");
        eightChar.classList.remove("fa-check");
    }
    //si valor menor a dos
    if(strength < 2){
        passwordStrength.classList.remove("progress-bar-warning");
        passwordStrength.classList.remove("progress-bar-success");
        passwordStrength.classList.add("progress-bar-danger");
        passwordStrength.style = "width: 10%";
    } else if(strength ==2){
        passwordStrength.style = "width: 30%"
    }
    else if (strength == 3) {
        passwordStrength.classList.remove("progress-bar-success");
        passwordStrength.classList.remove("progress-bar-danger");
        passwordStrength.classList.add("progress-bar-warning");
        passwordStrength.style = "width: 60%";
    } else if (strength == 4) {
        passwordStrength.classList.remove("progress-bar-warning");
        passwordStrength.classList.remove("progress-bar-danger");
        passwordStrength.classList.add("progress-bar-success");
        passwordStrength.style = "width: 100%";
    }
}