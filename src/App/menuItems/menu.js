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
    secondDiv.style.flexDirection = "column";
    secondDiv.style.alignItems = "stretch";
    

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
    menuDiv4.classList.add("menuDiv");
    let menuDiv5= document.createElement("div");
    menuDiv5.classList.add("menuDiv");
    let menuDiv6= document.createElement("div");
    menuDiv6.classList.add("menuDiv");
    let menuDiv7= document.createElement("div");
    menuDiv7.classList.add("menuDiv");
    let menuDiv8= document.createElement("div");
    menuDiv8.classList.add("menuDiv");
    let menuDiv9= document.createElement("div");
    menuDiv9.classList.add("menuDiv");

    //Creating flexbox grid
    let div1 = document.createElement("div");
    div1.classList.add("lowerMenu-flexboxContainer");
    
    
    let div2 = document.createElement("div");
    div2.classList.add("lowerMenu-flexboxItem");
    div2.classList.add("lowerMenu-flexboxItem-1");
    div2.appendChild(menuDiv1);
    div2.appendChild(menuDiv2);
    div2.appendChild(menuDiv3);
    let div3 = document.createElement("div");
    div3.classList.add("lowerMenu-flexboxItem");
    div3.classList.add("lowerMenu-flexboxItem-2");
    div3.appendChild(menuDiv4);
    div3.appendChild(menuDiv5);
    div3.appendChild(menuDiv6);
    let div4 = document.createElement("div");
    div4.classList.add("lowerMenu-flexboxItem");
    div4.classList.add("lowerMenu-flexboxItem-3");
    div4.appendChild(menuDiv7);
    div4.appendChild(menuDiv8);
    div4.appendChild(menuDiv9);

    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    
    
    
    
    secondDiv.appendChild(divHeader);
    secondDiv.appendChild(div1);
    backgroundDiv.appendChild(secondDiv);
    mainDiv.appendChild(backgroundDiv);
    





}