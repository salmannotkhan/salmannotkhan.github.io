btn = document.querySelector("nav #button");
active = document.querySelector(".active");
links = document.querySelectorAll("nav a");
hours = new Date().getHours();
function nightMode() {
    document.querySelector("body").classList.toggle("dark");
    if (document.querySelector("body").classList.contains("dark")) {
        btn.children[0].src = "images/sun-icon.webp";
    } else {
        btn.children[0].src = "images/moon-icon.webp";
    }
}
links.forEach((link) => {
    link.addEventListener("click", function () {
        links.forEach((link) => {
            link.classList.remove("active");
        });
        active.style.top = this.offsetTop + "px";
        document.querySelector(this.dataset.target).scrollIntoView();
    });
});
btn.addEventListener("click", nightMode);
if (hours > 18 || hours < 6) {
    nightMode();
}
document.querySelector("#home").scrollIntoView();
