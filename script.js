let main = document.querySelector(".main")
let code_key = document.querySelector(".code-key")
let start = document.querySelector(".start")
let box_var = document.querySelectorAll(".box__var")
let body = document.getElementsByTagName("body")
let isactive = true
body[0].addEventListener("keydown",function(event){
    if(isactive){
        isactive = false
        start.style.display = "none"
        main.style.display = "flex"
        console.log(event)
        code_key.innerHTML = event.keyCode
        for(i in box_var){
            if (box_var[i].innerHTML == "key"){
                box_var[i].innerHTML = event.key
            }
            if (box_var[i].innerHTML == "location"){
                box_var[i].innerHTML = event.location
            }
            if (box_var[i].innerHTML == "which"){
                box_var[i].innerHTML = event.which
            }
            if (box_var[i].innerHTML == "code"){
                box_var[i].innerHTML = event.code
            }
        }
    }
        
})