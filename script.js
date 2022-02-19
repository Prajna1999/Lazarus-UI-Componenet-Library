// selectors and selecting html element.
const darkLight=document.querySelector(".dark-light");


// eventlisteners.

darkLight.addEventListener("click", ()=>{
    darkLight.classList.toggle("active");
})