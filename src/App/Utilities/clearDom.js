function clearDom(){ //Element is the desired element they want to remove from the dom, and page is the page the dom should load to

  const mainDiv = document.getElementById("content");
  mainDiv.innerHTML = " ";

}

export {clearDom};