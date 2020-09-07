btn = document.querySelector('nav #button')
active = document.querySelector('.active')
links = document.querySelectorAll('nav a')
hours = new Date().getHours()
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

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

function scrollSlider() {
    logoSlider.scroll(xscroll, 0)
    if(Math.floor(logoSlider.scrollLeft / 250) == 2){
        xscroll = 10
    }
    else {
        xscroll = xscroll + logoSlider.scrollLeft + 200
    }
    scrolldelay = setTimeout(scrollSlider,2000);
}
if (width < 768){
    logoSlider = document.querySelector('.lang-logos')
    xscroll = 10
    scrollSlider()
}

btn.addEventListener('click', nightMode)
if (hours > 18 || hours < 6){
    nightMode()
}
document.querySelector('#home').scrollIntoView()