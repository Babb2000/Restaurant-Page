import "./style.css";
import {setValue} from "./App/pageLoad";


    //First Display the HomePage
    const homePage = ()=> {

        const mainContainer = document.getElementById("content");
        
        let mainSectionClasses = ["heroImage", "firstSection", "secondSection", "thirdSection", "footerSection"];
        let createdMainSections = [];
        
        let div1 = document.createElement("div");
        div1.classList.add(mainSectionClasses[0]);
        createdMainSections.push(div1);
        let div2 = document.createElement("div");
        div2.classList.add(mainSectionClasses[1]);
        createdMainSections.push(div2);
        let div3 = document.createElement("div");
        div3.classList.add(mainSectionClasses[2]);
        createdMainSections.push(div3);
        let div4 = document.createElement("div");
        div4.classList.add(mainSectionClasses[3]);
        createdMainSections.push(div4);
        let div5 = document.createElement("div");
        div5.classList.add(mainSectionClasses[4]);
        createdMainSections.push(div5);
        
        
        console.log("Right before mainContainer appending");
        mainContainer.appendChild(createdMainSections[0]);
        mainContainer.appendChild(createdMainSections[1]);
        mainContainer.appendChild(createdMainSections[2]);
        mainContainer.appendChild(createdMainSections[3]);
        mainContainer.appendChild(createdMainSections[4]);
    
    }

    setValue().then((value)=>{
        if(value){
            console.log("Inside If Statement");

            homePage();  
        }
    })
      
        




