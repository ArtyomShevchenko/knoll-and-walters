// navigation
const nav = document.querySelector("nav");
const navContainer = document.getElementById("navigation");
const doc = document.documentElement;

nav.addEventListener("click", (event) => {
  if (event.target.className == "nav-link") {
    for (link of nav.children) {
      link.classList.remove("nav-link-active");
    }
    event.target.classList.add("nav-link-active");
    nav.classList.remove("nav-active");

    burger.querySelector(".burger").classList.remove("burger-active");
    navContainer.classList.remove("nav-containeer-active");
    document.body.classList.remove("disable-scroll");
  }
});

// burger
const burger = document.getElementById("burger");
burger.addEventListener("click", (e) => {
  burger.querySelector(".burger").classList.toggle("burger-active");
  navContainer.classList.toggle("nav-containeer-active");
  navContainer.querySelector(".bg").classList.toggle("bg-active");
  document.body.classList.toggle("disable-scroll");
});

// header padding after scroll
const header = document.querySelector("header");
doc.style.setProperty("--header-height", `${header.offsetHeight}px`);

// scroll to top button
// document.getElementById("scrollToTopButton")
//     .addEventListener("click", () => {
//         window.scrollTo({ top: 0, behavior: "smooth" })
//     })

// window.addEventListener("scroll", e => {
//     document.documentElement.style.setProperty("--transformBgY", `${window.scrollY}px`)
// })

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const obj = {};

  for (let [key, value] of formData) {
    obj[key] = value;
  }

  fetch("http://127.0.0.1:4000", {
    method: "POST",
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

// chat
const chatButton = document.querySelector(".chat-button");
const chatBody = document.querySelector(".chat-body");
chatButton.addEventListener("click", (e) => {
  chatBody.classList.toggle("chat-body-open");
  chatButton.classList.toggle("chat-button-close");
  if(window.innerWidth < 900) {
      document.body.classList.toggle("disable-scroll");
  }
  chatBody.querySelector(".time").textContent = chatTime()

  setInterval(() => {
      chatBody.querySelector(".time").textContent = chatTime()
  }, 1000 * 60)
});

chatBody.querySelector(".close-btn").addEventListener("click", (e) => {
  chatBody.classList.toggle("chat-body-open");
  chatButton.classList.toggle("chat-button-close");
  document.body.classList.remove("disable-scroll");
});

// time chat
function chatTime() {
    const date = new Date()
    const meridiem = () => date.getHours() < 12 ? "PM" : "AM"
    const hour = () => {
        const value = date.getHours().toString()
        if(value.length > 1) {
            return value
        }
        else {
            return "0" + value
        }
    };
    const min = () => {
        const value = date.getMinutes().toString()
        if(value.length > 1) {
            return value
        }
        else {
            return "0" + value
        }
    };

    return `${hour()}:${min()} ${meridiem()}`
}