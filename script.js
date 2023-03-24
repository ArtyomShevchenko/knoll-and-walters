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
// document.getElementById("scrollToTopButton")
//     .addEventListener("click", () => {
//         window.scrollTo({ top: 0, behavior: "smooth" })
//     })


// window.addEventListener("scroll", e => {
//     document.documentElement.style.setProperty("--transformBgY", `${window.scrollY}px`)
// })

const sections = document.querySelectorAll("section")

sections.forEach(section => {
    const a = document.createElement("a")
    a.href = `#${section.id}`
    a.textContent = section.id.replace("_", " ")
    a.classList.add("nav-link")
    nav.append(a)
})


const callbackFunction = (entries, observer) => {
    entries.forEach(element => {
        if (element.isIntersecting) {
            nav.querySelector(`[href="#${element.target.id}"]`).classList.add("nav-link-active")
        } else {
            nav.querySelector(`[href="#${element.target.id}"]`).classList.remove("nav-link-active")
        }
    })
}

const observer = new IntersectionObserver(callbackFunction, { threshold: 0.4 })

sections.forEach(element => {
    observer.observe(element)
})


// -----------------str.replace()-----------------
// const str = "Lorem +380 93 487 77 58 ipsum lorem"

// // flag /g - global, for all value
// // flag /i - ignore string case (uppercase), replace all to lowercase
// const newStr = str.replace(/l|O|r/gi, "_")

// const newStr2 = str.replace(/[0-5]/gi, (e) => {
//     return e * 2
// })