const request = new XMLHttpRequest();
const projectList = document.querySelector(".project-list");
const template = document.querySelector("#project").innerHTML;
request.open("GET", "https://api.github.com/users/salmannotkhan/starred");
request.responseType = "json";
request.send();

function fixCase(x) {
    x = x.replace(/[_-]/, " ");
    if (x.indexOf(" ") === -1) {
        return x;
    }
    x = x.toLowerCase().split(" ");
    for (let i = 0; i < x.length; i++) {
        x[i] = x[i][0].toUpperCase() + x[i].slice(1);
    }
    return x.join(" ");
}
request.onload = () => {
    var resp = request.response;
    resp.forEach((repo) => {
        if (repo.owner.login === "salmannotkhan") {
            var rendered = Mustache.render(template, {
                name: fixCase(repo.name),
                desc: repo.description,
                lang: repo.language,
                githubUrl: repo.html_url,
                url: repo.homepage,
            });
            projectList.innerHTML += rendered;
        }
    });
    linkBtn = document.querySelectorAll(".project .links .link");
    ripple = document.createElement("div");
    ripple.classList.add("ripple");
    linkBtn.forEach((link) => {
        link.addEventListener("click", function (e) {
            ripple.style.left = e.layerX + "px";
            ripple.style.top = e.layerY + "px";
            e.target.appendChild(ripple);
            ripple.addEventListener("animationend", () => {
                ripple.remove();
            });
        });
    });
};
