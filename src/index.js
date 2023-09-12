import "./style.css";


//Create a function that takes in an element parameter and returns if the the element is in view using getBoundClientRect() function

document.addEventListener("DOMContentLoaded", function(){
    let targetElement1 = document.querySelector(`img[src="./assets/Baltimore_Homes.jpg"]`);


function isElementInViewport(targetElement1){
    let rect1 = targetElement1.getBoundingClientRect();
    
    return(
        rect1.top >= 0 &&
        rect1.left >= 0 &&
        rect1.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect1.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkElementInView(targetElement1){
    console.log("Scrolling...");
    console.log("Element position:", targetElement1.getBoundingClientRect());
    console.log("Window scroll position:", window.scrollY);

    if(isElementInViewport(targetElement1)){
        console.log("Inside Element in Viewport")
        targetElement1.style.webkitFilter = "grayscale(0)";
        targetElement1.style.filter = "grayscale(0)";

        let targetElement2 = document.querySelector(`img[src="./assets/StreetinPhilly.jpg"]`);
        targetElement2.style.webkitFilter = "grayscale(0)";
        targetElement2.style.filter = "grayscale(0)";

        let targetElement3 = document.querySelector(`img[src="./assets/Sidewalk.jpg"]`);
        targetElement3.style.webkitFilter = "grayscale(0)";
        targetElement3.style.filter = "grayscale(0)";


    }
    else{
        targetElement1.style.webkitFilter = "grayscale(100%)";
        targetElement1.style.filter = "grayscale(100%)";

        let targetElement2 = document.querySelector(`img[src="./assets/StreetinPhilly.jpg"]`);
        targetElement2.style.webkitFilter = "grayscale(100%)";
        targetElement2.style.filter = "grayscale(100%)";

        let targetElement3 = document.querySelector(`img[src="./assets/Sidewalk.jpg"]`);
        targetElement3.style.webkitFilter = "grayscale(100%)";
        targetElement3.style.filter = "grayscale(100%)";
    }
}

window.addEventListener("scroll", function(){
    checkElementInView(targetElement1);
});
})
