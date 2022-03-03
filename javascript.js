let selector= document.querySelector(".div");
let content=document.createElement("p");
content.classList.add("content");
content.textContent="Hey I'm red!";
content.setAttribute("style", "color:red");
selector.appendChild(content);

let blue=document.createElement("h3");
blue.textContent=("I'm a blue h3!");
blue.setAttribute("style", "color:blue");
selector.appendChild(blue);

let childDiv=document.createElement("div");
childDiv.setAttribute("style", "border-color:black");
childDiv.setAttribute("style", "background-color:pink");
childDiv.classList.add("childDiv");


let divGrandChildh1=document.createElement("h1");
divGrandChildh1.textContent=("I'm in a div");

let divgrandchildp=document.createElement("p");
divgrandchildp.textContent=("ME TOO!");

childDiv.appendChild(divGrandChildh1);
childDiv.appendChild(divgrandchildp);


selector.appendChild(childDiv);


//button
const btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
   e.target.style.background = 'blue';
 });