//Menu Module
export const menuPage = ()=> {

const mainDiv = document.getElementById("content");
const backgroundDiv = document.createElement("div");
backgroundDiv.classList.add("heroImage");
mainDiv.appendChild(backgroundDiv);

const secondDiv = document.createElement("div");
secondDiv.classList.add("menuContainer");
secondDiv.style.width = "80%";
secondDiv.style.height = "80%";
secondDiv.style.borderRadius = "30px";

let table = document.createElement("table");


secondDiv.appendChild(table);
backgroundDiv.appendChild(secondDiv);
mainDiv.appendChild(backgroundDiv);

}



