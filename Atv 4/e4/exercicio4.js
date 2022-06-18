let alterar= document.getElementById("botao");
alterar.addEventListener("click",()=>{textarea()})

function textarea(){
    let digitos = document.getElementById("txtarea").value;
    document.getElementById("texto").innerHTML = digitos;
    document.getElementById("texto").style.color = "red";
    
}

