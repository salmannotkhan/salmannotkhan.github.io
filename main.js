btn = document.querySelector("nav #button")
active = document.querySelector(".active")
links = document.querySelectorAll("nav a")
hours = new Date().getHours()
var timeout
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
    clearTimeout(timeout)
    localStorage.setItem('darkmode', nightMode())
})
if (localStorage.darkmode == 'true'){
    nightMode()
}
else{
    if (hours > 18 || hours < 6) {
        btn.children[1].innerHTML = 'Save your eyes'
    }
    timeout = setTimeout(() => {
        btn.children[1].style.marginLeft = '10px'
        setTimeout(() => {
            btn.children[1].style.opacity = 1
        }, 500);
        setTimeout(() => {
            btn.children[1].style.opacity = 0
            setTimeout(() => {
                btn.children[1].style = ''
            }, 500);
        }, 5000);
    }, 5000);
}
document.querySelector("#home").scrollIntoView()
