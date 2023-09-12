import "./style.css";

const logo = document.querySelector("img");
logo.addEventListener("mouseenter", function(){
    this.src = "./assets/S.svg";
})

logo.addEventListener("mouseleave", function(){
    this.src = "./assets/stsLogo.svg";
})