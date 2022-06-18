const btnAdd = document.getElementById("add");
btnAdd.addEventListener("click", () => {Add()});
const btnRmv = document.getElementById("rmv");
btnRmv.addEventListener("click", () => {Rmv()});

function Add(){
  let para = document.createElement("p");
  para.innerHTML = "Paragráfo Vazio";
  document.body.appendChild(para);
}

function Rmv(){
  let para = document.body.lastElementChild;
  document.body.removeChild(para);
}