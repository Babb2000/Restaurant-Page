import "./style.css";
import value from "./App/pageLoad";


if(value){ //If the page has loaded

//First Display the HomePage

const homePage = function(){

const mainContainer = document.getElementById("content");

let mainSectionClasses = [".heroImage", ".firstSection", ".secondSection", ".thirdSection", ".footerSection"];
let createdMainSections = [];

for(let i = 0; i < mainSectionClasses.length; i++){
    let number = i;
    let div = `div + ${number + 1}`;
    div = document.createElement("div");
    div.classList.add(mainSectionClasses[i]);
    createdMainSections.push(div);
}

mainContainer.appendChild(createdMainSections[0]);
mainContainer.appendChild(createdMainSections[1]);
mainContainer.appendChild(createdMainSections[2]);
mainContainer.appendChild(createdMainSections[3]);
mainContainer.appendChild(createdMainSections[4]);
}

homePage();
}














//Have event listeners that listen for a click on the menu
//If a user clicks a menu option, clear the dom and repopulate it with the data accordingly 





































