let inpt = document.querySelector("input");
let no_repeat = ["+","-","*","/",".","(",")","%","**"]

function add(x){
    inpt.value += x;
}

function calculate(){
    inpt.value = eval(inpt.value);
}

function cls(){
    inpt.value = "";
}

function remove(){
    inpt.value = (inpt.value).substr(0,inpt.value.length-1)
}

function factoriel(){
    if (inpt.value == ""){
        alert("You must enter a number to know its factoriel")
    }else{
        let tmp = 1;
        for (let i = 1;i<Number(inpt.value)+1;i++){
            tmp *= i;
        }
        inpt.value = tmp;
    }
}

let man_btn = document.querySelector("#man-btn");
let close_man_btn = document.querySelector("#close-man");

man_btn.addEventListener("click",function(){
    if (document.querySelector(".man").classList.contains("hidden")){
        document.querySelector(".man").classList.remove("hidden");
        document.querySelector(".overlay").classList.remove("hidden");
    }
})

close_man_btn.addEventListener("click",function(){
    document.querySelector(".man").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
})

document.addEventListener("keydown",function(e){
    if ((e.key) == "Escape" && !document.querySelector(".man").classList.contains("hidden")){
        document.querySelector(".man").classList.add("hidden");
        document.querySelector(".overlay").classList.add("hidden");
    }
})

document.querySelector(".overlay").addEventListener("click",function(){
    document.querySelector(".man").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
})