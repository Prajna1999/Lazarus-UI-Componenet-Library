// selectors and selecting html element.
const darkLight=document.querySelector(".dark-light");
const body=document.querySelector("body")

// eventlisteners.

darkLight.addEventListener("click", ()=>{
    darkLight.classList.toggle("active");
    body.classList.toggle("dark");
})