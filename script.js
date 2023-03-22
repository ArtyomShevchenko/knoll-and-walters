// navigation
const nav = document.querySelector("nav")
const navContainer = document.getElementById("navigation")
const doc = document.documentElement

nav.addEventListener("click", event => {
    if (event.target.className == "nav-link") {
        for (link of nav.children) {
            link.classList.remove("nav-link-active")
        }
        event.target.classList.add("nav-link-active")
        nav.classList.remove("nav-active")

        burger.querySelector(".burger").classList.remove("burger-active")
        navContainer.classList.remove("nav-containeer-active")
        document.body.classList.remove("disable-scroll")
    }
})


// burger
const burger = document.getElementById("burger")
burger.addEventListener("click", (e) => {
    burger.querySelector(".burger").classList.toggle("burger-active");
    navContainer.classList.toggle("nav-containeer-active");
    navContainer.querySelector(".bg").classList.toggle("bg-active");
    document.body.classList.toggle("disable-scroll")
})


// header padding after scroll
const header = document.querySelector("header")
doc.style.setProperty("--header-height", `${header.offsetHeight}px`)

// scroll to top button
document.getElementById("scrollToTopButton")
    .addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    })