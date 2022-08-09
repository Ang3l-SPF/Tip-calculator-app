const img = document.querySelector(".attribution")
const info = document.querySelector(".info")
img.addEventListener("click", ()=>{
    info.classList.toggle("active")
})