btn = document.querySelector("nav #button")
active = document.querySelector(".active")
links = document.querySelectorAll("nav a")
function nightMode() {
    document.querySelector("body").classList.toggle("dark")
    if (document.querySelector("body").classList.contains("dark")) {
        btn.children[0].src = "images/sun-icon.webp"
        return true
    } else {
        btn.children[0].src = "images/moon-icon.webp"
        return false
    }
}
links.forEach((link) => {
    link.addEventListener("click", function () {
        links.forEach((link) => {
            link.classList.remove("active")
        })
        active.style.top = this.offsetTop + "px"
        document.querySelector(this.dataset.target).scrollIntoView()
    })
})
btn.addEventListener("click", ()=>{
    localStorage.setItem('darkmode', nightMode())
})
if (localStorage.darkmode == 'true'){
    nightMode()
}
document.querySelector("#home").scrollIntoView()
