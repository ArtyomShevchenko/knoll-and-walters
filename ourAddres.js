const linkToOurAddres = document.getElementById("link_contact")
const ourAddresBlock = document.getElementById("our_address")

linkToOurAddres.addEventListener("click", () => {
    ourAddresBlock.classList.replace("our-address_hidden", "our-address")
    document.body.classList.add("disable-scroll");
    window.scrollTo({
        top: 0,
    })
})