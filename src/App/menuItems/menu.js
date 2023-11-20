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
    
    
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let textNode1 = document.createTextNode("Dish");
    let textNode2 = document.createTextNode("Ingredients");
    let textNode3 = document.createTextNode("Price");
    let row1 = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.style.fontSize = "55px";
    th1.appendChild(textNode1);
    let th2 = document.createElement("th");
    th2.style.fontSize = "55px"
    th2.appendChild(textNode2);
    let th3 = document.createElement("th");
    th3.appendChild(textNode3);
    th3.style.fontSize = "55px";
    row1.appendChild(th1);
    row1.appendChild(th2);
    row1.appendChild(th3);
    thead.appendChild(row1);
    
    
    
    
    table.appendChild(thead);
    
    
    
    
    
    
    secondDiv.appendChild(table);
    backgroundDiv.appendChild(secondDiv);
    mainDiv.appendChild(backgroundDiv);
    
    }