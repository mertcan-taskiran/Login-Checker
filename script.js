let parameters = {
    count : false,
    letters : false,
    numbers : false,
    special : false
}

let strengthBar = document.getElementById("strength-bar");
  
function checker(){

    let email = document.getElementById('email').value;
    let ischeck = document.getElementById('ischeck');

    let emailControl = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    if(email.match(emailControl)){
        ischeck.innerHTML = '<i class="fa-solid fa-check fa-2x"></i>';
        ischeck.style.color = '#00ff00';
    }
    else{
        ischeck.innerHTML = '<i class="fa-solid fa-xmark fa-2x"></i>';
        ischeck.style.color = '#ff0000';
    }

    let password = document.getElementById("password").value;
  
    parameters.upperCase = (/[A-Z]+/.test(password))?true:false;
    parameters.numbers = (/[0-9]+/.test(password))?true:false;
    parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password))?true:false;
    parameters.count = (password.length > 7)?true:false;
  
    let barLength = Object.values(parameters).filter(value=>value);
  
    strengthBar.innerHTML = "";
    for( let i in barLength){
        let span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
    }
  
    let spanAdd = document.getElementsByClassName("strength");
    for( let i = 0; i < spanAdd.length; i++){
        switch(spanAdd.length - 1){
            case 0 :
                spanAdd[i].style.background = "#ff3e36";
                break;
            case 1:
                spanAdd[i].style.background = "#ff691f";
                break;
            case 2:
                spanAdd[i].style.background = "#ffda36";
                break;
            case 3:
                spanAdd[i].style.background = "#0be881";
                break;
        }
    }

    parameters.upperCase == true ? (uppercase.checked = true):(uppercase.checked = false);
    parameters.numbers == true ? (numerical.checked = true):(numerical.checked = false);
    parameters.special == true ? (special.checked = true):(special.checked = false);
    parameters.count == true ? (count.checked = true):(count.checked = false);

    if(uppercase.checked && numerical.checked && special.checked && count.checked && email.match(emailControl)){
        document.getElementById("btn").classList.remove("disabled");
    }else{
        document.getElementById("btn").classList.add("disabled");
    }
}

function showCollapse(){
    collapse_btn = document.getElementById("collapseOne").classList.toggle("show");
}

function toggle(){
    let password = document.getElementById("password");
    let eye = document.getElementById("toggle");
  
    if(password.getAttribute("type") == "password"){
        password.setAttribute("type","text");
        eye.style.color = "#062b61";
    }
    else{
        password.setAttribute("type","password");
        eye.style.color = "#6b6868";
    }
}