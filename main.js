btn = document.querySelector('nav #button')
active = document.querySelector('.active')
links = document.querySelectorAll('nav a')
hours = new Date().getHours()
function nightMode(){
    document.querySelector('body').classList.toggle('dark')
    btn.children[0].classList.toggle('fa-sun')
    btn.children[0].classList.toggle('fa-moon')
}

links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(link => {
            link.classList.remove('active')
        })
        active.style.top = this.offsetTop + 'px'
        document.querySelector(this.dataset.target).scrollIntoView()
    })
})

btn.addEventListener('click', nightMode)
if (hours > 18 || hours < 6){
    nightMode()
}
document.querySelector('#home').scrollIntoView()