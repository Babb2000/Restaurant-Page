import { listenForMenuClick } from "../../index.jms";

//Menu Module
export const menuPage = ()=> {

    const backgroundDiv = document.getElementsByClassName("heroImage")[0];
    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("bottomDiv");
    

    //Header with flexBox
    let divHeader = document.createElement("div");
    divHeader.classList.add("divHeader");
    let divHeaderCont1 = document.createElement("div");
    let textNode1 = document.createTextNode("Dish");
    divHeaderCont1.classList.add("divHeader-flexboxItem");
    divHeaderCont1.appendChild(textNode1);
    let divHeaderCont2 = document.createElement("div");
    let textNode2 = document.createTextNode("Ingredients");
    divHeaderCont2.classList.add("divHeader-flexboxItem");
    divHeaderCont2.appendChild(textNode2);
    let divHeaderCont3 = document.createElement("div");
    let textNode3 = document.createTextNode("Price");
    divHeaderCont3.classList.add("divHeader-flexboxItem");
    divHeaderCont3.appendChild(textNode3);
    divHeader.appendChild(divHeaderCont1);
    divHeader.appendChild(divHeaderCont2);
    divHeader.appendChild(divHeaderCont3);
    
    //Create 9 divs to be placed inside each column
    let menuDiv1= document.createElement("div");
    menuDiv1.classList.add("menuDiv");
    let menuDiv2= document.createElement("div");
    menuDiv2.classList.add("menuDiv");
    let menuDiv3= document.createElement("div");
    menuDiv3.classList.add("menuDiv");
    let menuDiv4= document.createElement("div");
    menuDiv4.classList.add("menuDiv2");
    let menuDiv5= document.createElement("div");
    menuDiv5.classList.add("menuDiv2");
    let menuDiv6= document.createElement("div");
    menuDiv6.classList.add("menuDiv2");
    let menuDiv7= document.createElement("div");
    menuDiv7.classList.add("menuDiv3");
    let menuDiv8= document.createElement("div");
    menuDiv8.classList.add("menuDiv3");
    let menuDiv9= document.createElement("div");
    menuDiv9.classList.add("menuDiv3");

    //Creating flexbox grid
    let div1 = document.createElement("div");
    div1.classList.add("lowerMenu-flexboxContainer");
    
    let menuText1 = document.createTextNode("Meat Pizza");
    let menuText2 = document.createTextNode("Greek Pizza");
    let menuText3 = document.createTextNode("Mama's Special");

    let menuText4 = document.createTextNode("Pepperoni, sausage, meatballs, ham, bacon");
    let menuText5 = document.createTextNode("Feta Cheese, Mozzarella slices, basil");
    let menuText6 = document.createTextNode("Pepperoni, sausage, meatballs, ham, mushrooms, onions, green peppers, black olives");

    let menuText7 = document.createTextNode("$27 - $30");
    let menuText8 = document.createTextNode("$23 - $27");
    let menuText9 = document.createTextNode("$27 - $32");
    
    let div2 = document.createElement("div");
    div2.classList.add("lowerMenu-flexboxItem");
    div2.classList.add("lowerMenu-flexboxItem-1");
    menuDiv1.appendChild(menuText1);
    div2.appendChild(menuDiv1);
    menuDiv2.appendChild(menuText2);
    div2.appendChild(menuDiv2);
    menuDiv3.appendChild(menuText3);
    div2.appendChild(menuDiv3);
    let div3 = document.createElement("div");
    div3.classList.add("lowerMenu-flexboxItem");
    div3.classList.add("lowerMenu-flexboxItem-2");
    menuDiv4.appendChild(menuText4);
    div3.appendChild(menuDiv4);
    menuDiv5.appendChild(menuText5);
    div3.appendChild(menuDiv5);
    menuDiv6.appendChild(menuText6);
    div3.appendChild(menuDiv6);
    let div4 = document.createElement("div");
    div4.classList.add("lowerMenu-flexboxItem");
    div4.classList.add("lowerMenu-flexboxItem-3");
    menuDiv7.appendChild(menuText7);
    div4.appendChild(menuDiv7);
    menuDiv8.appendChild(menuText8);
    div4.appendChild(menuDiv8);
    menuDiv9.appendChild(menuText9);
    div4.appendChild(menuDiv9);

    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    
    bottomDiv.appendChild(divHeader);
    bottomDiv.appendChild(div1);
    backgroundDiv.appendChild(bottomDiv);


    
    
    listenForMenuClick();
   
};