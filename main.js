btn = document.querySelector("nav #button")
active = document.querySelector(".active")
links = document.querySelectorAll("nav a")
hours = new Date().getHours()
var timeout
function nightMode() {
    const darkMode = document.querySelector("body").classList.toggle("dark")
    btn.children[0].src = `images/${darkMode ? "sun": "moon"}-icon.webp`
    return darkMode
}
if (location.hash !== '') {
    active.style.top = document.querySelector(`a[href="${location.hash}"]`).offsetTop + 'px'
    setTimeout(()=>document.querySelector(location.hash).scrollIntoView(), 100)
}
links.forEach((link) => {
    link.addEventListener("click", function () {
        active.style.top = this.offsetTop + "px"
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