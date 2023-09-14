let value;

const setValue = () => {
    return new Promise((resolve) => {
        window.document.addEventListener("DOMContentLoaded", function(){
            console.log("DOM Content Loaded");
            value = true;
            resolve(value);
        });
    });
}

export { setValue };
