export const menuBar = () => {

    
    const mainDiv = document.getElementById("content");
    const backgroundDiv = document.createElement("div");
    backgroundDiv.classList.add("heroImage");
    mainDiv.appendChild(backgroundDiv);


    const container1 = document.createElement("div");
    const container2 = document.createElement("div");
    const menuContainer = document.createElement("div");
    const listContainer = document.createElement("div");
    const listItem1 = document.createElement("li");
    const listItem2 = document.createElement("li");
    const listItem3 = document.createElement("li");
    const listItem4 = document.createElement("li");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    const a4 = document.createElement("a");
    a1.textContent = "Home";
    a2.textContent = "About Us";
    a3.textContent = "Menu";
    a4.textContent = "Reservations";
    listItem1.appendChild(a1);
    listItem2.appendChild(a2);
    listItem3.appendChild(a3);
    listItem4.appendChild(a4);
    listContainer.appendChild(listItem1);
    listContainer.appendChild(listItem2);
    listContainer.appendChild(listItem3);
    listContainer.appendChild(listItem4);
    
    container1.classList.add("flexContainer1");
    container2.classList.add("flexContainer2");
    container1.style.height = "30%";
    container2.style.height = "30%";

    menuContainer.classList.add("menuContainer");
    listContainer.classList.add("listContainer");
    listContainer.style.listStyleType = "none";
    menuContainer.appendChild(listContainer);
    container2.appendChild(menuContainer);

    
    backgroundDiv.appendChild(container1);
    backgroundDiv.appendChild(container2);

}