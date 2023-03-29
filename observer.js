const sections = document.querySelectorAll("section")
// create anchor menu
sections.forEach(section => {
    const a = document.createElement("a")
    a.href = `#${section.id}`
    a.textContent = section.id.replace("_", " ")
    a.classList.add("nav-link")
    nav.append(a)
})
// anchor menu observer
const anchorMenuObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(element => {
            element.isIntersecting
                ? nav.querySelector(`[href="#${element.target.id}"]`).classList.add("nav-link-active")
                : nav.querySelector(`[href="#${element.target.id}"]`).classList.remove("nav-link-active")
        })
    },
    { threshold: 0.4 }
);
sections.forEach(section => {
    anchorMenuObserver.observe(section)
});



// visible observer
const allVisibleElement = document.querySelectorAll("h1, h2, h3, p, a, dt, dd, img");
const visibleObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entrie => {
            if (entrie.isIntersecting) {
                // add .class when entrie.target is visible
                entrie.target.classList.add("visible")
                // stop observe target after add .class
                visibleObserver.unobserve(entrie.target)
            }
        })
    }
)
allVisibleElement.forEach(element => {
    visibleObserver.observe(element)
})



// images observer (Lazy loading)
const images = document.querySelectorAll("img")
const imageObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entrie => {
            if (entrie.isIntersecting) {
                entrie.target.src = entrie.target.dataset.src
                imageObserver.unobserve(entrie.target)
            }
        })
    }
)

images.forEach(image => {
    imageObserver.observe(image)
})